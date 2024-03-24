<template>
  <div class="logo">
    <img src="/img/logo.png" />
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("РТПиАС");
</script>

<style scoped>
.logo {
  --logo_gap: 10px;
  --logo_padding_left-right: 10px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: var(--logo_gap);

  width: fit-content;
  height: 100%;

  padding: 0 var(--logo_padding_left-right);

  &:hover {
    cursor: pointer;
  }

  span {
    font-size: var(--v1-font-size_big);
  }

  img {
    width: var(--v1-logo_width__desktop);
    height: var(--v1-logo_height__desktop);
  }
}
</style>
