<template>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap"
      rel="stylesheet"
    />
    <!-- <script
      src="https://kit.fontawesome.com/bfa0a87a28.js"
      crossorigin="anonymous"
    ></script> -->
  </Head>
  <div>
    <!-- <Navbar /> -->

    <!-- <main class="container p-3 my-5 border rounded shadow"> -->
    <slot></slot>
    <!-- </main> -->

    <Footer />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Intro Nuxt',
  script: [
    {
      src: 'https://kit.fontawesome.com/bfa0a87a28.js',
      crossorigin: 'anonymous',
    },
  ],
});
</script>
