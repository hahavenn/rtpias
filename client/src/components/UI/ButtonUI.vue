<template>
  <button>{{ props.placeholder }}</button>
</template>

<script setup>
/* UI button */
const props = defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
button {
  height: var(--v1-input-button_height_1);
  width: 100%;

  outline: none;
  border: var(--v1-border-width_small) solid var(--v1-color_default_1);
  border-radius: var(--v1-border-radius_default);

  font-size: var(--v1-font-size_default);
  text-align: center;

  &:focus {
    border-color: var(--v1-color_active_1);
  }

  &:hover {
    border-color: var(--v1-color_active_1);
    cursor: pointer;
  }
}
</style>
