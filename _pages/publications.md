---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

## Publications

{% for post in site.publications reversed %}
  {% include archive-single-publication.html %}
{% endfor %}

## Talks

{% if site.talkmap_link == true %}
<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>
{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
