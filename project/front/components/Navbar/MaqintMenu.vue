<script lang="ts" setup>
import { mainAppStore} from "~/stores/website";
import BaseRouterLink from "~/components/Navbar/BaseRouterLink.vue";
const mainStore = mainAppStore()
const props = defineProps({
  dataTree: {
    type: Object,
    default: () => ({}),
  },
  isOpenSideBar: {
    type: Boolean,
  },
});

const { dataTree } = toRefs(props);

const selectedItem = ref<string[]>([]);

function handleClickMenu(path: string) {
  if (path === "/instrumento/alta") {
    // proyectoOrdenacion.renderWizard = !proyectoOrdenacion.renderWizard;
  }
  return path;
}

function handleOpenSubMenu(id: string) {
  selectedItem.value = selectedItem.value.includes(id)
      ? selectedItem.value.filter((item) => item !== id)
      : [...selectedItem.value, id];
}

const classes  = (id:string,type:string,selectedItem:Array<any>,isOpenSideBar:boolean) => {
  isOpenSideBar = !isOpenSideBar;
  if(selectedItem.includes(id) && type == 'main'){
    return 'bh-open item-main';
  }else if(selectedItem.includes(id) && type == 'second'){
    return 'bh-open';
  }
  return '';
}
</script>
<template>
  <ul>
    <li
        v-for="item in dataTree"
        :key="item.id"
        class="bh-nav__item"
        :class="classes(item.id, item.type,selectedItem,isOpenSideBar)"
    >
      <a
          v-if="item.children?.length > 0 && item.isVisible"
          :key="item.id"
          href="#"
          class="bh-nav__link bh-nav__link--dropdown"
          @click="handleOpenSubMenu(item.id)">
        <span>{{ item.title }} </span>
      </a>
      <BaseRouterLink
          v-if="item.children?.length === 0 && item.isVisible"
          :nombre="item.title"
          :icon="item.icon"
          class="bh-nav__link"
          iconClass="bh-nav__icon"
          :to="item.path"
          @click="handleClickMenu(item.path)" />
      <ul class="bh-nav bh-collapse">
        <MaqintMenu v-if="item.children?.length > 0" :dataTree="item.children" />
      </ul>
    </li>
  </ul>
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