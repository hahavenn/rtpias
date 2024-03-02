<template>
  <header>
    <div class="section">
      <LogoUI @click="router.push(INDEX_ROUTE.PATH)" />
      <SearchFunc />
    </div>
    <div class="section">
      <SwitcherFunc :toggler="stylesStore.toggleTheme">
        <template #left>
          <SunIcon />
        </template>
        <template #right>
          <MoonIcon />
        </template>
      </SwitcherFunc>
      <IconProfileUser />
    </div>
  </header>
</template>

<script setup>
import LogoUI from "@/components/UI/Images/LogoUI.vue";
import SunIcon from "@/components/UI/Icons/SunIcon.vue";
import MoonIcon from "@/components/UI/Icons/MoonIcon.vue";

import SearchFunc from "@/components/Func/Search/SearchFunc.vue";
import SwitcherFunc from "@/components/Func/Switcher/SwitcherFunc.vue";

import IconProfileUser from "@/components/User/IconProfileUser.vue";

import useStylesStore from "@/stores/useStylesStore.js";

import router, { INDEX_ROUTE } from "@/router";

const stylesStore = useStylesStore();
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

  &::nth-child(0) {
    justify-self: flex-start;
  }

  .section {
    --section_gap: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--section_gap);

    font-size: var(--v1-font-size_default);
  }
}
</style>
