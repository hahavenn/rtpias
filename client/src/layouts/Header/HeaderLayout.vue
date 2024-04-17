<template>
  <header>
    <section>
      <LogoUI @click="logoUIHandler" />
      <SearchFunc />
    </section>
    <section>
      <ProfileUser />
    </section>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

import LogoUI from "@/components/UI/LogoUI.vue";
import SearchFunc from "@/components/Func/Search/SearchFunc.vue";
import ProfileUser from "@/components/User/ProfileUser.vue";

import { INDEX_ROUTE } from "@/router/router.js";

const router = useRouter();

function logoUIHandler() {
  router.push(INDEX_ROUTE.PATH);
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;

  background-color: #fff;

  padding: 0 calc((100% - var(--v1-width__desktop)) / 2);

  width: 100%;
  min-height: var(--v1-header_height__desktop);

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: var(--v1-border-width_default) solid var(--v1-color_default_1);

  section {
    --section_gap: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--section_gap);

    font-size: var(--v1-font-size_default);
  }
}
</style>
