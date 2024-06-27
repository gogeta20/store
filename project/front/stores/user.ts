// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
export const userAppStore = defineStore('userStore', {
  state: () => ({
    name: 'Mauricio',
    lastname: 'Vargas',
    email: '',
    login: false,
    id: 1,
    token: 0,
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
    },
    getFullName() {
      return this.name + ' ' + this.lastname;
    },
    setDataLogin(response:any) {
      this.name = response.name;
      this.lastname = response.lastname;
      this.login = response.login;
      this.id = response.id;
      this.token = response.token;
    }
  },
});
