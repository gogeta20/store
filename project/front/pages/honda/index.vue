  <script setup lang="ts">
  definePageMeta({
    middleware: ["auth"],
    // layout: false,
  });
  import TitleArticle from "~/components/Article/TitleArticle.vue";
  import Features from "~/components/Article/Features.vue";
</script>
<template>
  <TitleArticle title="Honda"></TitleArticle>
  <Features></Features>
</template>
