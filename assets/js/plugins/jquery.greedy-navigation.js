/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Find the last item that is not the theme toggle
    var $lastItem = $vlinks.children().last();
    if($lastItem.find('.theme-toggle').length > 0) {
      // Skip theme toggle, try the previous item
      $lastItem = $lastItem.prev();
    }
    
    // Only move if it's not the theme toggle
    if($lastItem.length > 0 && $lastItem.find('.theme-toggle').length === 0) {
      // Move item to the hidden list
      $lastItem.prependTo($hlinks);
    }

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list (but before theme toggle)
      var $firstHidden = $hlinks.children().first();
      if($firstHidden.length > 0) {
        // Insert before theme toggle if it exists, otherwise just append
        var $themeToggle = $vlinks.find('.theme-toggle').closest('li');
        if($themeToggle.length > 0) {
          $firstHidden.insertBefore($themeToggle);
        } else {
          $firstHidden.appendTo($vlinks);
        }
        breaks.pop();
      }
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();