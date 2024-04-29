<template>
  <footer class="mt-5 bg-dark text-white p-5">
    &copy; Yirsis Serrano - {{ currentYear }}
  </footer>
</template>

<script setup>
const currentYear = new Date().getUTCFullYear();
</script>

<style scoped>
footer {
  background: var(--resaltado-3);
  height: 15rem;
  margin-top: 5rem;
}
</style>
