<template>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kode+Mono&display=swap" rel="stylesheet">
  </Head>
  <div>
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: 'Mauricio Vargas',
  script: [
    {
      src: 'https://kit.fontawesome.com/bfa0a87a28.js',
      crossorigin: 'anonymous',
    },
  ],
});
</script>
