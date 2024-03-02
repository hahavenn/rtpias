<template>
  <div
    class="switcher"
    @click="changeState(toggler)"
  >
    <slot name="left"></slot>
    <slot name="right"></slot>
    <div
      class="current"
      :style="switcherState"
    ></div>
  </div>
</template>

<script setup>
/*
	props:
		active -> если true - активен правый
		toggler -> срабатывает на каждый клик
*/

import { reactive, ref } from "vue";

/* define common instances */

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  toggler: {
    type: Function,
    required: true,
  },
});

// стили для состояния свитчера
const switcherState = reactive({
  left: props.active ? "" : "3px",
  right: props.active ? "3px" : "",
  transform: "",
});

// для проверки того, изменилось ли состояние свитчера
const isChanged = ref(false);

// по клику меняет состояние свитчера
function changeState(toggler) {
  isChanged.value = !isChanged.value;

  switcherState.transform = isChanged.value
    ? "translateX(" + (props.active ? "-" : "") + "34px)"
    : "translateX(0px)";

  toggler();
}
</script>

<style scoped>
.switcher {
  --switcher_border-radius: 20px;
  --switcher_width: 74px;
  --switcher_height: 40px;
  --switcher_padding_left-right: 6px;

  transition: all var(--v1-transition_fast);

  border: var(--v1-border-width_default) solid var(--v1-color_default_1);
  border-radius: var(--switcher_border-radius);

  width: var(--switcher_width);
  height: var(--switcher_height);

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--switcher_padding_left-right);

  &:hover {
    cursor: pointer;
    border-color: var(--v1-color_active_1);
  }

  .current {
    --current_width: 30px;
    --current_height: 30px;
    --current_top: 3px;

    transition: all var(--v1-transition_fast);

    border: var(--v1-border-width_default) solid var(--v1-color_active_1);
    border-radius: 50%;

    width: var(--current_width);
    height: var(--current_height);

    position: absolute;
    top: var(--current_top);
  }
}
</style>
