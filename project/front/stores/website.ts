// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
export const useWebsiteStore = defineStore('webSiteStore', {
    state: () => ({
        name: '',
        description: '',
        isOpenSideBar: true,
        nombreApp: 'mau',
        imgLogo: 'img',
        logoImage: 'img',
    }),
    // actions: {
    //     async fetch() {
    //         const infos = await $fetch('https://api.nuxt.com/modules/pinia')
    //         this.name = infos.name
    //         this.description = infos.description
    //     }
    // }
})
