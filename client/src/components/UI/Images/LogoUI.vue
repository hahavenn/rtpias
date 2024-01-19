<template>
  <div class="logo">
    <img src="/img/logo.png" />
    <span>РТПиАС</span>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  width: fit-content;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 10px;

  span {
    font-size: 26px;
  }

  img {
    width: 40px;
    height: 40px;
  }
}
</style>
