<template>
  <input
    v-model="model"
    :placeholder="props.placeholder"
    :required="props.required"
    :type="props.type"
    :minLength="props.minLength"
    :maxLength="maxLength"
  />
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
  type: {
    type: String,
    default: "text",
  },
});

const model = defineModel();
</script>

<style scoped>
input {
  --input-padding-left-right: 13px;

  height: var(--v1-input-button_height_1);
  width: 100%;

  outline: none;
  border: var(--v1-border-width_small) solid var(--v1-color_default_1);
  border-radius: var(--v1-border-radius_default);

  font-size: var(--v1-font-size_default);
  padding: 0 var(--input-padding-left-right);

  &:focus {
    border-color: var(--v1-color_active_1);
  }

  &:hover {
    border-color: var(--v1-color_active_1);
  }
}
</style>
