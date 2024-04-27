<script setup lang="ts">
import { articlesHomeApp } from '~/src/home/application/Get/articlesHomeApp';
import Article from "~/components/Article/Article.vue";
useHead({
  title: 'Home',
});

const response = await articlesHomeApp().get();

console.log(response, 'http');
// const api = useApi();

// const { data } = await api({
//   method: 'get',
//   url: '/check',
// });
</script>
<template>
  <header>
    <h1>Cool Articles</h1>
  </header>
  <div class="band">
    <div class="item-1">
      <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="card">
        <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);"></div>
        <article>
          <h1>International Artist Feature: Malaysia</h1>
          <span>Mary Winkler</span>
        </article>
      </a>
    </div>
    <Article
        href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
        image="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);"
        title="How to Code a Scrolling “Alien Lander” Website"
        description="We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down."
        signe="Kezz Bracey"
    />
    <Article
        href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
        image="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);"
        title="How to Code a Scrolling “Alien Lander” Website"
        description="We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down."
        signe="Kezz Bracey"
    />
    <Article
        href="https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724"
        image="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png);"
        title="How to Code a Scrolling “Alien Lander” Website"
        description="We’ll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down."
        signe="Kezz Bracey"
    />
  </div>

</template>

<style lang="scss" scoped>
.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
}

header {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}
</style>
