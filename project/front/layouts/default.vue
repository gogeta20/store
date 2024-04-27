<script setup lang="ts">
import { mainAppStore } from "~/stores/website";
const mainStore = mainAppStore()
import Sidebar from "~/components/Navbar/Sidebar.vue";
const sidebarVisible = computed(() => mainStore.openSidebar)
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

<template>
  <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </Head>
  <div class="bh-wrapper">
    <main class="bh-main">
      <Sidebar :is-open-side-bar="sidebarVisible"></Sidebar>
      <Navbar>
        <router-view></router-view>
      </Navbar>
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.bh-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.bh-main {
  flex: 1;
  position: relative;

  &__page {
    transition: margin-left 0.4s ease;
    margin-left: 0;

    &--full-width {
      margin-left: calc(var(--sidbar-width) - 250px);
    }
  }
}

@media (min-width: 540px) {
  .bh-main {
    &__page {
      margin-left: var(--sidbar-width);

      &--full-width {
        margin-left: calc(var(--sidbar-width) - 250px);
      }
    }
  }
}
</style>
