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

## Thesis

<div class="list__item">
  <article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">
    <div class="archive__item-header">
      <h2 class="archive__item-title" itemprop="headline">
        Bio-inspired event-driven intelligence for motion estimation
      </h2>
      
      <div class="publication__links">
        <a href="https://hdl.handle.net/2117/430026" target="_blank" class="btn btn--paper">
          <i class="fas fa-external-link-alt" aria-hidden="true"></i> Link
        </a>
      </div>
    </div>
    
    <p class="archive__item-meta">
      <i>Universitat Politècnica de Catalunya</i>, 2025
    </p>
  </article>
</div>

## Talks

{% if site.talkmap_link == true %}
<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>
{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
