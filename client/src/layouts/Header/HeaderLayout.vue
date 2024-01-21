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
      <IconWrapperUI :isHover="true" :cursorPointer="true">
        <ProfileIcon />
      </IconWrapperUI>
    </div>
  </header>
</template>

<script setup>
import LogoUI from "@/components/UI/Images/LogoUI.vue";
import SearchFunc from "@/components/Func/SearchFunc.vue";
import ProfileIcon from "@/components/UI/Icons/ProfileIcon.vue";
import SunIcon from "@/components/UI/Icons/SunIcon.vue";
import MoonIcon from "@/components/UI/Icons/MoonIcon.vue";
import IconWrapperUI from "@/components/UI/IconWrapperUI.vue";
import SwitcherFunc from "@/components/Func/SwitcherFunc.vue";

import useStylesStore from "@/stores/useStylesStore.js";
import router, { INDEX_ROUTE } from "@/router";

const stylesStore = useStylesStore();
</script>

<style scoped>
header {
  padding: 0 calc((100% - var(--width-desktop)) / 2);
  width: 100%;
  min-height: var(--header-size);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-default);

  &::nth-child(0) {
    justify-self: flex-start;
  }

  .section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: var(--font-size-default);
  }
}
</style>
