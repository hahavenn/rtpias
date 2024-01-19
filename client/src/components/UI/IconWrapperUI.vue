<template>
  <div class="icon_wrapper" :class="{ hoverClass: isHover }" :style="componentStyle">
    <slot></slot>
  </div>
</template>

<script setup>
import { reactive } from "vue";

/*
    обертка для иконок
    props:
        isHover -> будет ли меняться цвет при наведении
        size -> размер обертки
*/

/* define common instances */
const props = defineProps({
  isHover: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "40px",
  },
  cursorPointer: {
    type: Boolean,
    default: false,
  },
});

const componentStyle = reactive({
  width: props.size,
  height: props.size,
  cursor: props.cursorPointer ? "pointer !important" : "default !important",
});
</script>

<style scoped>
.icon_wrapper {
  border: 2px solid var(--color-default);
  border-radius: 50%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.hoverClass {
  &:hover {
    border-color: var(--color-active-default);
    transition: all 0.15;
  }
}
</style>
