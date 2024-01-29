<template>
  <div>
    <Navbar />

    <main class="container p-3 my-5 border rounded shadow">
      <slot></slot>
    </main>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Intro Nuxt",
  bodyAttrs: [
    {
      class: "text-center",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
      integrity:
        "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
      crossorigin: "anonymous",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
    },
  ],
});
</script>
