// import defineStore  from '@pinia/nuxt';
import { defineStore } from 'pinia';
import type { Toast } from '~/src/main/domain/toast';
export const toastAppStore = defineStore('toastStore', {
  state: () => ({
    title: "",
    message: "message default",
    type: "info",
    class: "toast-info bg-info",
    code: 200,
    life: 3000,
    view: true,
    list: [
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-light",
      "bg-dark",
      "bg-white"
    ]
  }),

  actions: {
    onShowToast({ title, message, type, code, life }: Toast) {
      this.title = title;
      this.message = message;
      this.type = type,
      this.code = code;
      this.life = life;
      this.class = this.getBg();
      this.changeState()
      this.view = true;
    },
    getBg() {
      const toastClass = "toast-info ";
      return toastClass + ' bg-' + this.type;
    },
    changeState() {
      setTimeout(() => {
        this.view = false;
      }, this.life);
    }
  },
});
