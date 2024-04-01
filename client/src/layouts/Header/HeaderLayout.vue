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
import LogoUI from "@/components/UI/LogoUI.vue";

import SearchFunc from "@/components/Func/Search/SearchFunc.vue";

import ProfileUser from "@/components/User/ProfileUser.vue";

import { INDEX_ROUTE } from "@/router/router.js";

import { routerGoTo_helper } from "@/router/helpers.js";

function logoUIHandler() {
  routerGoTo_helper(INDEX_ROUTE.PATH);
}
</script>

<style scoped>
header {
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
@/router/router
