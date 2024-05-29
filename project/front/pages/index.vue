<script setup lang="ts">
import { articlesHomeApp } from '~/src/home/application/Get/articlesHomeApp';
import Slider from "~/components/Slider/Slider.vue";
import News from "~/components/Article/News.vue";
import Features from "~/components/Article/Features.vue";
import Toast from '~/components/Toast/Toast.vue';

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
  <Slider></Slider>
  <News></News>
  <Features></Features>
</template>
<style lang="scss" scoped></style>
