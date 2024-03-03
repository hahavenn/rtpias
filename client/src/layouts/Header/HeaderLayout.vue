<template>
  <header>
    <section>
      <LogoUI @click="logoUIHandler" />
      <SearchFunc />
    </section>
    <section>
      <UserProfile />
    </section>
  </header>
</template>

<script setup>
import LogoUI from "@/components/UI/Images/LogoUI.vue";

import SearchFunc from "@/components/Func/Search/SearchFunc.vue";

import UserProfile from "@/components/User/UserProfile.vue";

import router from "@/router";
import { INDEX_ROUTE } from "@/router/constants";

function logoUIHandler() {
  router.push(INDEX_ROUTE.PATH);
}
</script>

<style scoped>
header {
  padding: 0 calc((100% - var(--v1-width__desktop)) / 2);

  width: 100%;
  min-height: var(--v1-header-height__desktop);

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
