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

## Create Custom Blog Post Social Sharing

[Reference](https://knowledge.hubspot.com/articles/kcs_article/cos-blog/how-do-i-add-custom-social-icons-to-a-hubspot-page)

- Clone a new module from `Social Sharing` module
- Code example:

``` html
{% set size = "24px" %}
{% set borderRadius = "3px" %}
{% set linkStyle = "width:"~size~";border-width:0px;border:0px;text-decoration:none;" %}
{% set imgStyle = "height:"~size~";width:"~size~";border-radius:"~borderRadius~";border-width:0px;border:0px;" %}

{% macro render_social_icon(networkName) %}
{% set network = module[networkName] %}
{% if (networkName == "pinterest" and network.pinterest_media and network.enabled) or (networkName != "pinterest" and network.enabled) %}
{% if networkName == "pinterest" %}
{% set pinterest_media = module.pinterest.pinterest_media.src %}
{% endif %}

{% if networkName == "facebook" %}
{% set socialClass = 'fb-icon' %}
{% endif %}
{% if networkName == "twitter" %}
{% set socialClass = 'tw-icon' %}
{% endif %}
{% if networkName == "linkedin" %}
{% set socialClass = 'ld-icon' %}
{% endif %}

{% set logo = networkName ~'-color.png' %}
{% set urlOperator = "&" if "?" in page_meta.canonical_url else "&" %}
{% if module.link %}
{% set social_link_url = module.link ~ urlOperator ~ "utm_medium=social&utm_source="|safe ~ networkName %}					
{% elif content.email_type.blogRssChild %}
{% set social_link_url = content.rss_email_url %}
{% else %}
{% set social_link_url = page_meta.canonical_url ~ urlOperator ~ "utm_medium=social&utm_source="|safe ~ networkName %}
{% endif %}

<a class="{{ socialClass }}" target="_blank" href="{{ network.custom_link_format }}"><i class="fa fa-{{ networkName }}" aria-hidden="true"></i></a>
{% endif %}
{% endmacro %}

<div class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_social_sharing blog-social-sharing-wrapper" data-hs-cos-general-type="widget" data-hs-cos-type="social_sharing">
  {{ render_social_icon('facebook') }}
  {{ render_social_icon('twitter') }}
  {{ render_social_icon('linkedin') }}
  {{ render_social_icon('pinterest') }}
  {{ render_social_icon('email') }}
</div>
```

## Use custom module in `blog detail/ blog listing` template

- Right click on any custom module that you made, choose `Copy snippet`
- Paste to `blog template`