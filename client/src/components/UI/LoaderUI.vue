<template>
  <div class="loader_wrapper">
    <div class="loader"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.loader_wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    --loader_size: 40px;

    border: var(--v1-border-width_default) solid var(--v1-color_default_1);
    border-top: var(--v1-border-width_default) solid var(--v1-color_active_1);
    border-radius: 50%;
    width: var(--loader_size);
    height: var(--loader_size);
    animation: spin var(--v1-transition_normal) linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
