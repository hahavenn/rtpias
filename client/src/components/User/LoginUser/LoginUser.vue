<template>
  <div class="wrapper">
    <span class="title">Вход</span>
    <div class="signIn_block">
      <InputTextUI
        v-model="user.login"
        :placeholder="'Логин'"
        :required="true"
      />
      <InputTextUI
        v-model="user.password"
        :placeholder="'Пароль'"
        :required="true"
        :type="'password'"
      />
      <ButtonUI
        @click="console.log('user instance:', user)"
        :placeholder="'Войти'"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

import InputTextUI from "@/components/UI/InputTextUI.vue";
import ButtonUI from "@/components/UI/ButtonUI.vue";

const user = reactive({
  login: "",
  password: "",
});
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
    font-size: var(--font-size-giant);
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
