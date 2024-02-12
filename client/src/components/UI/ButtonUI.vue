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
  height: var(--input-height);
  width: 100%;

  outline: none;
  border: var(--border-width-small) solid var(--color-default);
  border-radius: var(--border-radius-default);

  font-size: var(--font-size-default);
  text-align: center;

  &:focus {
    border-color: var(--color-active-default);
  }

  &:hover {
    border-color: var(--color-active-default);
    cursor: pointer;
  }
}
</style>
