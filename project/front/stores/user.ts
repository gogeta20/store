// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
export const userAppStore = defineStore('userStore', {
  state: () => ({
    name: 'Mauricio Vargas',
    email: '',
    login: '',
  }),
  actions: {
    getName() {
      return this.name;
    },
  },
});
