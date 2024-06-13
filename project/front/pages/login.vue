<script lang="ts" setup>
import LoginController from '~/src/main/application/controller/LoginPostController';
import { userAppStore } from '~/stores/user';
const userStore = userAppStore();

const user = ref({
  username: '',
  password: '',
});

const login = async () => {

  LoginController.send({
    'user': user.value.username,
    'pass': user.value.password
  });

};
</script>
 <!--  -->
 <!--  -->
<template>
  <div class="container-article-main">
    <div class="container-blue">
      <div class="title">
        <h2>Login</h2>
      </div>
      <div class="container form">
        <label for="uname"><b>Username</b></label>
        <input v-model="user.username" type="text" class="input" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input v-model="user.password" type="password" class="input" placeholder="Enter Password" name="psw" required />

        <button @click.prevent="login" class="button">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
