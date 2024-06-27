<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: false,
});
import TitleArticle from '~/components/Article/TitleArticle.vue';
import LoginController from '~/src/main/infrastructure/controller/LoginPostController';
import { userAppStore } from '~/stores/user';
import { UtilHelper } from '~/src/core/utilities/UtilHelper';
import Toast from '~/components/Toast/Toast.vue';
const toastStore = toastAppStore();
const userStore = userAppStore();
const errorMsg = ref(false)

const user = ref({
  username: '',
  password: '',
});

const login = async () => {
  errorMsg.value = false
  if (validationData(user.value.username) && validationData(user.value.password)) {
    LoginController.send({
      'user': user.value.username,
      'pass': user.value.password
    });
  } else {
    errorMsg.value = true
  }
};

function validationData(data: string) {
  if (data === '') return false;
  return UtilHelper.isString(data)
}

function reset() {
  errorMsg.value = false
}
</script>
<!--  -->
<!--  -->
<template>
  {{ errorMsg }}
  <div class="container-login">
    <div class="container-blue">
      <TitleArticle title="Ingresa tus datos"></TitleArticle>
      <div class="container form">
        <InputBasic id-input="user" label="Usuario" v-model="user.username"></InputBasic>
        <InputBasic id-input="pass" label="Contraseña" v-model="user.password"></InputBasic>
        <button class="btn btn-outline-info" @click.prevent="login">Enviar</button>
        <div v-if="errorMsg" class="bg-danger bg-error input-error">
          Rellena correctamente los campos
          <i @click="reset" class="fa-solid fa-eye-slash"></i>
        </div>
      </div>
    </div>
  </div>
  <Toast></Toast>
</template>
<!--  -->
<!--  -->
<style scoped lang="scss">
.input-error {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-login .container-blue {
  min-width: 50vh;
}
</style>
