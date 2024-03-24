<template>
  <HeaderLayout />
  <main>
    <RouterView />
  </main>
  <FooterLayout />
</template>

<script setup>
import HeaderLayout from "@/layouts/Header/HeaderLayout.vue";
import FooterLayout from "@/layouts/Footer/FooterLayout.vue";
</script>

<style>
:root {
  /* переменные для сайта */
  --v1-header-height__desktop: 60px;
  --v1-footer-height__desktop: 40px;

  --v1-logo-width__desktop: 40px;
  --v1-logo-height__desktop: 40px;

  --v1-icon-size_default: 24px;

  --v1-color_default_1: #d2d2d2;
  --v1-color_active_1: #7a7a7a;
  --v1-color_white_1: #ffffff;
  --v1-color_black_1: #000000;
  --v1-color_error_1: #c82121;

  --v1-width__desktop: 1400px;
  --v1-width_tablet: 800px;
  --v1-width_mobile: 320px;

  --v1-transition_default: 0.15s;
  --v1-transition_fast: 0.1s;
  --v1-transition_normal: 1s;

  --v1-font-size_small: 12px;
  --v1-font-size_default: 16px;
  --v1-font-size_medium: 20px;
  --v1-font-size_big: 30px;
  --v1-font-size_giant: 40px;

  --v1-font-weight_regular: 400;
  --v1-font-weight_bold: 700;

  --v1-border-radius_default: 8px;

  --v1-border-width_small: 1px;
  --v1-border-width_default: 2px;

  --v1-input-button_height_1: 44px;

  --z-index_modal: 9999;
}

/* шрифты */
@font-face {
  font-family: "Play";
  src: url(./assets/fonts/Play-Regular.ttf);
}

/* основные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Play";
}

html {
  scroll-behavior: smooth;

  width: 100%;
  height: 100%;

  body {
    margin: 0;

    width: inherit;
    height: inherit;

    overflow-y: scroll;
  }

  input {
    outline: none;
  }

  a {
    color: var(--v1-color_black_1);
  }
}

.icon {
  width: var(--v1-icon-size_default);
  height: var(--v1-icon-size_default);
}

#app {
  /* конец переменных для сайта */
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  main {
    flex-grow: 1;

    width: var(--v1-width__desktop);
  }
}
</style>
