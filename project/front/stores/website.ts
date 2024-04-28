// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
export const mainAppStore = defineStore('appStore', {
    state: () => ({
        openSidebar: true,
        name: '',
        description: '',
        isOpenSideBar: true,
        nombreApp: 'Moto500',
        imgLogo: '/img/vue.svg',
        logoImage: false,
    }),
    actions: {
        switchSidebar(){
            this.openSidebar = !this.openSidebar;
        },
    },
})
