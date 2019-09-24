# Hubspot

## Create Custom Blog Search

``` html
<!-- Get all blog posts and do query search by searchQuery -->
{% set recent_posts = blog_recent_posts('default', 500) %}
{% set searchQuery = request.query_dict['query'] %}

<div class="latest-blog-wrapper latest-listing category-posts search-result-wrapper wrapper-width center-block default-pd-lg style-3" same-height-wrap>
  <h3 class="feature-post-title latest-title search-result-title mb-20">
    Search Results
  </h3>

  <div class="latest-blog category-posts-slider">
    {% for recent_post in recent_posts %}
    {% if searchQuery and searchQuery|lower in recent_post.name|lower %}
    {% set tag_url = blog_tag_url('default', '' ~ recent_post.tagList|first|string|regex_replace("[^a-zA-Z0-9 ]", "")|split(' ')|join('-')) %}

    <div class="item mb-30">
      <div class="thumbnail-wrap">
        <a href="{{recent_post.absolute_url}}" class="thumbnail" style="background-image: url({{ recent_post.featured_image }});"></a>
      </div>

      <div class="inner">
        <a class="btn-default btn-tag btn-green tag-name tag-{{ loop.index }}"
           href="{{ tag_url }}" >
          {% if recent_post.tagList|length > 0 %}{% endif %}
          {{ recent_post.tagList|first|string|truncatehtml(10, '...', false) }}
        </a>

        <div class="desc">
          <a href="{{ recent_post.absolute_url }}" same-height-header>{{ recent_post.name|striptags }}</a>
        </div>

        <a href="{{ recent_post.absolute_url }}" class="btn-default btn-read mdHidden" >Read More</a>
      </div>
    </div>
    {% endif %}
    {% endfor %}
  </div>
</div>
```