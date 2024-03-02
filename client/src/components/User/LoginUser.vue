<template>
  <div class="wrapper">
    <span class="title">{{ templateData.title }}</span>
    <div class="signIn_block">
      <InputTextUI
        v-model="user.login"
        :placeholder="templateData.login"
        :required="true"
      />
      <InputTextUI
        v-model="user.password"
        :placeholder="templateData.password"
        :required="true"
        :type="'password'"
      />
      <ButtonUI
        @click="loginHandler"
        :placeholder="templateData.signIn"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

import InputTextUI from "@/components/UI/InputTextUI.vue";
import ButtonUI from "@/components/UI/ButtonUI.vue";

const templateData = {
  title: "Вход",
  login: "Логин",
  password: "Пароль",
  signIn: "Войти",
};

const user = reactive({
  login: "",
  password: "",
});

function loginHandler() {
  console.log("user instance:", user);
}
</script>

<style scoped>
.wrapper {
  --wrapper_gap: 20px;
  --signIn-block_gap: 10px;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--wrapper_gap);

  .title {
    font-size: var(--v1-font-size_giant);
  }

  .signIn_block {
    width: inherit;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--signIn-block_gap);
  }
}
</style>
