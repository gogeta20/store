// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
export const userAppStore = defineStore('userStore', {
  state: () => ({
    name: 'Mauricio Vargas',
    email: '',
    login: false,
    id: 1,
  }),
  actions: {
    getName() {
      return this.name;
    },
    getId() {
      return this.id;
    },
    isLogin() {
      return this.login;
    }
  },
});
