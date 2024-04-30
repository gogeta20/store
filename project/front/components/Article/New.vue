<template>
  <div class="mini-card module module-article article" id="mini-post-302186">
    <header class="mini-article-card-header">
      <div class="mini-article-card-title">
        <div class="mini-article-subhead">
          Article
          <time datetime="2020-01-28">
            Jan 28, 2020 </time>
        </div>
        <h2 class="">
          <a href="https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/" class="article-card-header read-article">
            Use and Reuse Everything in SVG  Even Animations! </a>
        </h2>
      </div>
    </header>
    <div class="mini-article-meta">
      <div class="mini-article-byline">
        <div class="author-avatar">
          <a class="author-name" href="https://css-tricks.com/author/marianabeldi/">
            <img alt="" src="https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=80&amp;d=retro&amp;r=pg" class="avatar avatar-80 photo jetpack-lazy-image jetpack-lazy-image--handled" height="80" width="80" srcset="https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=160&amp;d=retro&amp;r=pg  2x" data-lazy-loaded="1"><noscript><img alt='' src='https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=80&#038;d=retro&#038;r=pg' srcset='https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=160&#038;d=retro&#038;r=pg  2x' class='avatar avatar-80 photo' height='80' width='80' /></noscript> </a>
          <svg class="half-circle" width="80px" height="80px">
            <use xlink:href="#half-circle"></use>
          </svg>
        </div>
        <div class="author-name-area">
          <div class="author-name-prefix">
            Author
          </div>
          <a class="author-name" href="https://css-tricks.com/author/marianabeldi/">
            Mariana Beldi </a>
        </div>
      </div>
      <div class="tags">
        <a href="https://css-tricks.com/tag/svg/" rel="tag">SVG</a> <a href="https://css-tricks.com/tag/svg-animation/" rel="tag">SVG animation</a> </div>
    </div>
  </div>

</template>
<style scoped lang="scss">
p:empty {
  display: none;
}

time {
  color: #7a7a8c;
}


img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}

a {
  color: #fff;
}

a:not(.button):not(.commentPreviewButton):not(.comment-reply-link):focus,
a:not(.button):not(.commentPreviewButton):not(.comment-reply-link):hover {
  //background: -webkit-gradient(linear, left top, right top, from(#ff8a00), to(#e52e71));
  background: linear-gradient(90deg, #ff8a00 ,60%, #e52e71);
  //background-image: -webkit-gradient(linear, left bottom, left top, from(var(--purple-light)), to(var(--light-purple-bg)));
  //background-image: linear-gradient(0deg, var(--purple-light), var(--light-purple-bg));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
}
.mini-card {
  min-width: 300px;
  min-height: 350px;
  padding: 1.5rem;
  border-radius: 16px;
  background: var(--light-purple-base);
  //box-shadow:-1rem 0 1rem #1f1a2e;
  box-shadow: -1rem 2px 1rem 0px #1f1a2e;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-transition: .2s;
  transition: .2s;
  margin: 0;
}

.mini-card h2 {
  font-size: 20px;
  margin: .25rem 0 auto;
}

.mini-card:not(:first-child) {
  margin-left: -130px;
}

.mini-card:hover {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
}

.mini-card:hover~.mini-card {
  -webkit-transform: translateX(130px);
  transform: translateX(130px);
}

@media (max-width:1200px) {
  .mini-card {
    min-width: 220px;
  }

  .mini-card:not(:first-child) {
    margin-left: -30px;
  }

  .mini-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }

  .mini-card:hover~.mini-card {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
}

@media (max-width:800px) {
  .mini-card {
    min-width: 190px;
  }

  .mini-card:not(:first-child) {
    margin-left: -10px;
  }

  .mini-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }

  .mini-card:hover~.mini-card {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}


.module {
  clear: both;
  margin: 0 0 1rem;
  position: relative;
}

.module>:last-child,
.module>:last-child>:last-child {
  margin-bottom: 0;
}


.mini-article-subhead {
  font-size: 14px;
  margin: 0 0 1rem;
}

.mini-article-card-header {
  margin-bottom: auto;
}

.mini-article-meta {
  font-size: 14px;
}

.mini-article-meta .author-name {
  display: block;
  position: relative;
}

.mini-article-meta .author-avatar img {
  width: 40px;
  height: 40px !important;
}

.mini-article-meta .author-avatar .half-circle {
  width: 60px;
  height: 48px;
}

.mini-article-byline {
  margin: 3rem 0 0;
  display: grid;
  grid-template-columns: 75px 1fr;
  -webkit-box-align: center;
  align-items: center;
}

.mini-article-byline .author-avatar,
.mini-article-byline .author-name-area {
  grid-area: auto;
}


.author-avatar {
  grid-area: avatar;
  align-self: start;
  position: relative;
}

.author-avatar img {
  border-radius: 50%;
  width: 60px;
  height: 60px !important;
  display: block;
  overflow: hidden;
  margin: 16px 10px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.author-avatar .half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 56px;
  fill: none;
  stroke: url(https://css-tricks.com/wp-content/themes/CSS-Tricks-17/style.css?cache_bust=1580767355603#orange-to-pink);
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}

@media (max-width:800px) {
  .author-avatar img {
    width: 35px;
    height: 35px !important;
  }

  .author-avatar .half-circle {
    width: 55px;
    height: 40px;
  }
}

.author-name-prefix {
  //font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato, Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  color: #7a7a8c;
}

.author-name-area {
  grid-area: author;
}

.author-name,
time {
  //font-family: Sentinel SSm A, Sentinel SSm B, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

.tags {
  margin: 1rem 0 2rem;
  padding: .5rem 0 1rem;
  line-height: 2;
}

@media (max-width:800px) {
  .tags {
    margin: 0;
  }
}

.tags a {
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: .66rem;
  white-space: nowrap;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: .2rem .85rem .25rem;
}

.tags a:focus,
.tags a:hover {
  color: #03a9f4;
  border-color: #fff;
  position: relative;
}

@media (prefers-reduced-motion:reduce) {
  * {
    -webkit-animation-duration: .01ms !important;
    animation-duration: .01ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    -webkit-transition-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}

@media screen and (prefers-reduced-motion:reduce) {
  * {
    -webkit-transition: 0s !important;
    transition: 0s !important;
  }
}
</style>
<script setup lang="ts">

</script>