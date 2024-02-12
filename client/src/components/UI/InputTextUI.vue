<template>
  <input v-model="model" :placeholder="props.placeholder" :required="props.required" />
</template>

<script setup>
/* text input */

const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  minLength: {
    type: Number,
  },
  maxLength: {
    type: Number,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const model = defineModel();
</script>

<style scoped>
input {
  --input-padding-left-right: 13px;

  height: var(--input-height);
  width: 100%;

  outline: none;
  border: var(--border-width-small) solid var(--color-default);
  border-radius: var(--border-radius-default);

  font-size: var(--font-size-default);
  padding: 0 var(--input-padding-left-right);

  &:focus {
    border-color: var(--color-active-default);
  }

  &:hover {
    border-color: var(--color-active-default);
  }
}
</style>
