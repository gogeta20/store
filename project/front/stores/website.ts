// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
export const mainAppStore = defineStore('appStore', {
    state: () => ({
        openSidebar: true,
        name: '',
        description: '',
        isOpenSideBar: true,
        nombreApp: 'mau',
        imgLogo: '/img/vue.svg',
        logoImage: '/img/vue.svg',
    }),
    actions: {
        switchSidebar(){
            this.openSidebar = !this.openSidebar;
        },
    },
})
