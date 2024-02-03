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
});
</script>
