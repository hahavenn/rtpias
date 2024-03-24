<template>
  <footer v-html="footerInfo"></footer>
</template>

<script setup>
import { ref } from "vue";

const year = ref(2024);
const name = ref("РТПиАС");
const footerInfo = `${year.value} &#169; ${name.value}`;
</script>

<style scoped>
footer {
  width: 100%;
  min-height: var(--v1-footer_height__desktop);

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
