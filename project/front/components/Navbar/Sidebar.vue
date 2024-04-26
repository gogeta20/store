<script lang="ts" setup>
import { useWebsiteStore} from "~/stores/website";
const webSiteStore = useWebsiteStore()
</script>
<template>
  <aside class="bh-sidebar" :class="[{ 'bh-sidebar--hidden': webSiteStore.isOpenSideBar }]">
    <div  class="bh-header__logo">
      <router-link to="/inicio">
        <img v-if="webSiteStore.logoImage" :alt="webSiteStore.nombreApp" :src="webSiteStore.imgLogo" lazy width="130" height="30" />
        <h1 v-else class="name-page-h1">{{ webSiteStore.nombreApp }}</h1>
      </router-link>
    </div>
    <nav class="bh-nav">
      <MaqintMenu :dataTree="myRoutes" :isOpenSideBar="isOpenSideBar" />
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.bh-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  &__logo{
    border-bottom: solid 3px var(--light-gray-second);
    margin-bottom: 1rem;
  }
}

.bh-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  min-width: var(--sidbar-width);
  max-width: var(--sidbar-width);
  background-color: var(--dark-gray);
  box-shadow: inset -5px 5px 18px -5px rgb(0 0 0 / 80%);
  overflow: auto;
  transition: left 0.4s ease 0s;
  z-index: 5;
  opacity: 0.9;

  &--hidden {
    left: var(--sidbar-width-negative);
    overflow-y: auto;

    .bh-nav__list {
      width: 50px;
      margin-left: 190px;
    }

    .bh-nav__link {
      :deep(span) {
        display: none;
      }

      &.router-link-exact-active {
        display: block;
        transform: scale(1);
      }

      :deep(.bh-nav__icon) {
        color: #fff;
        text-align: center;
      }

      &:hover {
        :deep(.bh-nav__icon) {
          font-size: 1.4rem;
          color: #fff;
          text-shadow: 2px 2px rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
}

.name-page-h1{
  margin: 0;
  height: var(--header-height);
  font-size: 1.5rem;
  text-align: center;
  align-content: center;
  color: white;
  font-family: "Monospace", "Arial", "serif";
}

.bh-nav {
  :deep(.bh-nav__icon) {
    font-size: 1.2rem;
    color: #fff;
  }
}

@media (min-width: 540px) {
  .bh-sidebar {
    opacity: 1;
  }
}
</style>