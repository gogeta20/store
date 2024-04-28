<script setup lang="ts">
import MaqintMenu from "~/components/Navbar/MaqintMenu.vue";
import { mainAppStore} from "~/stores/website";
const mainStore = mainAppStore()
defineProps({
  isOpenSideBar: {
    type: Boolean,
  },
});
const myRoutes = reactive([
  {
    id: "1",
    title: "router.marca",
    path: "/inicio",
    icon: "home",
    isVisible: true,
    children: [
      {
        id: "2.2",
        title: "honda",
        path: "/honda",
        isVisible: true,
        type: 'third',
        children: [],
      },
      {
        id: "2.3",
        title: "yamaha",
        path: "/modelo/ini",
        isVisible: true,
        children: [],
        type: 'third',
      },
      {
        id: "2.1",
        title: "kawasaki",
        path: "/solicitude/archivos",
        isVisible: true,
        children: [],
        type: 'third',
      },
      {
        id: "2.1",
        title: "ducati",
        path: "/solicitude/archivos",
        isVisible: true,
        children: [],
        type: 'third',
      },
    ],
    type: 'main'
  },
  {
    id: "2",
    title: "sidebar.solicitud.title",
    path: "#",
    icon: "plus",
    isVisible: true,
    type: 'main',
    children: [
      {
        id: "2.0",
        title: "sidebar.solicitud.po",
        path: "/proxecto-ordenacion/alta",
        isVisible: true,
        type: 'second',
        children: [],
      },
      {
        id: "2.1",
        title: "sidebar.solicitud.dsx",
        path: "/doc-simple-xestion/alta",
        isVisible: true,
        children: [],
      },
    ],
  },
  {
    id: "3",
    title: "router.consulta",
    path: "/consulta",
    icon: "search",
    isVisible: true,
    type: 'main',
    children: [
      {
        id: "3.0",
        title: "router.expedientes",
        path: "/consulta/expedientes",
        isVisible: true,
        type: 'second',
        children: [],
      },
      {
        id: "3.1",
        title: "router.estado-tramitacion",
        path: "/consulta/estado-tramitacion",
        isVisible: true,
        children: [],
      },
      {
        id: "3.2",
        title: "router.expedientes-requerimiento",
        path: "/consulta/expedientes-requerimiento",
        isVisible: true,
        type: 'second',
        children: [],
      },
    ],
  },
  {
    id: "4",
    title: "router.consulta-modelos",
    path: "/modelo/consulta",
    icon: "search",
    isVisible: true,
    type: 'main',
    children: [],
  },
]);
</script>
<template>
  <aside class="bh-sidebar" :class="[{ 'bh-sidebar--hidden': isOpenSideBar }]">
    <div  class="bh-header__logo">
<!--      <div class="loader loader-6">-->
<!--        <div class="loader-inner"></div>-->
<!--      </div>-->
      <router-link to="/">
        <img v-if="mainStore.logoImage" :alt="mainStore.nombreApp" :src="mainStore.imgLogo" lazy width="130" height="30" />
        <h1 v-else class="name-page-h1">{{ mainStore.nombreApp }}</h1>
      </router-link>
    </div>
    <nav class="bh-nav">
      <MaqintMenu :dataTree="myRoutes" :isOpenSideBar="isOpenSideBar" />
    </nav>
  </aside>
</template>

<style scoped lang="scss">
.bh-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  &__logo{
    border-bottom: solid 1px var(--purple-second);
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
  //background-color: var(--light-purple);
  //background: var(--light-purple-base);
  background: var(--dark-purple-gradiend);
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

//ppppppppppppppppp

.loader {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 75px;
  display: inline-block;
  vertical-align: middle;
}

.loader-star {
  position: absolute;
  top: calc(50% - 12px);
}
/*LOADER-1*/

.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #f50057;
  border-left-color: transparent;
  border-bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
  animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
}

.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #f50057;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
  animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
}
/*LOADER-2*/

.loader-2 .loader-star {
  position: static;
  width: 60px;
  height: 60px;
  -webkit-transform: scale(0.7);
  -ms-transform: scale(0.7);
  transform: scale(0.7);
  -webkit-animation: loader-2-star 1s ease alternate infinite;
  animation: loader-2-star 1s ease alternate infinite;
}

.loader-2 .loader-circles {
  width: 8px;
  height: 8px;
  background: #18ffff;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 4px);
  top: calc(50% - 4px);
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-animation: loader-2-circles 1s ease-in-out alternate infinite;
  animation: loader-2-circles 1s ease-in-out alternate infinite;
}
/*LOADER-3*/

.loader-3 .dot {
  width: 10px;
  height: 10px;
  background: #00e676;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 5px);
}

.loader-3 .dot1 {
  left: 0px;
  -webkit-animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
  animation: dot-jump 0.5s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
}

.loader-3 .dot2 {
  left: 20px;
  -webkit-animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
  animation: dot-jump 0.5s 0.2s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
}

.loader-3 .dot3 {
  left: 40px;
  -webkit-animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
  animation: dot-jump 0.5s 0.4s cubic-bezier(0.77, 0.47, 0.64, 0.28) alternate infinite;
}
/*LOADER-4*/

.loader-4 {
  border: 7px double #ff5722;
  -webkit-animation: ball-turn 1s linear infinite;
  animation: ball-turn 1s linear infinite;
}

.loader-4:before,
.loader-4:after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ff5722;
  border-radius: 50%;
  bottom: 0;
  right: 37px;
}

.loader-4:after {
  left: 37px;
  top: 0;
}
/*LOADER-5*/

.loader-5 {
  border: 8px dotted rgba(255, 255, 0, 1);
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-animation: dotted-spin 1s linear infinite;
  animation: dotted-spin 1s linear infinite;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 0, 0.3);
  border-left-width: 2px;
  border-left-color: rgba(255, 255, 0, 0.5);
  border-top-width: 3px;
  border-right-width: 4px;
  border-top-color: rgba(255, 255, 0, 0.7);
}

.loader-5 .loader-pacman,
.loader-pacman {
  position: absolute;
  top: 40px;
  left: 25px;
  width: 0px;
  height: 0px;
  border-right: 12px solid transparent;
  border-top: 12px solid rgba(255, 255, 0, 1);
  border-left: 12px solid rgba(255, 255, 0, 1);
  border-bottom: 12px solid rgba(255, 255, 0, 1);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}
/*LOADER-6*/

.loader-6 {
  border: 6px groove #7e57c2;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-animation: loader-1-inner 1s ease-out alternate infinite;
  animation: loader-1-inner 1s ease-out alternate infinite;
}

.loader-6 .loader-inner {
  border: 0px inset #9575cd;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  -webkit-animation: border-zoom 1s ease-out alternate infinite;
  animation: border-zoom 1s ease-out alternate infinite;
}
@keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes border-zoom {
  0% {
    border-width: 0px;
  }
  100% {
    border-width: 10px;
  }
}

</style>