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
  --header-size: 60px;
  --footer-size: 40px;

  --icon-size-default: 24px;

  --color-default: #d2d2d2;
  --color-active-default: #7a7a7a;
  --color-hover-default: #dddddd;
  --color-hover-link: #696969;
  --color-white: #fff;
  --color-black: #000;
  --color-gray: #888888;

  --width-desktop: 1400px;
  --width-tablet: 786px;
  --width-mobile: 320px;

  --transition-default: 0.15s;

  --font-size-small: 12px;
  --font-size-default: 16px;
  --font-size-medium: 20px;
  --font-size-big: 30px;
  --font-size-giant: 40px;

  --font-weight-regular: 400;
  --font-weight-bold: 700;

  --border-radius-default: 8px;
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
    color: var(--color-black);
  }
}

.icon {
  width: var(--icon-size-default);
  height: var(--icon-size-default);
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
    width: var(--width-desktop);
  }
}
</style>
