<script lang="ts" setup>
import TitleArticle from '~/components/Article/TitleArticle.vue';
import LoginController from '~/src/main/application/controller/LoginPostController';
import { userAppStore } from '~/stores/user';
import { UtilHelper } from '~/src/core/utilities/UtilHelper';

const userStore = userAppStore();

const user = ref({
  username: '',
  password: '',
});

const login = async () => {

  if (UtilHelper.isString(user.value.username) && UtilHelper.isString(user.value.password)) {
    LoginController.send({
      'user': user.value.username,
      'pass': user.value.password
    });
  }

};
</script>
<!--  -->
<!--  -->
<template>
  <div class="container-article-main">
    <div class="container-blue">
      <TitleArticle title="Ingresa tus datos"></TitleArticle>
      <div class="container form">
        <InputBasic id-input="user" label="Usuario" v-model="user.username"></InputBasic>
        <InputBasic id-input="pass" label="Contraseña" v-model="user.password"></InputBasic>
        <button class="btn btn-outline-info" @click.prevent="login">Enviar</button>
      </div>
    </div>
  </div>
</template>
<!--  -->
<!--  -->
<style scoped lang="scss"></style>
