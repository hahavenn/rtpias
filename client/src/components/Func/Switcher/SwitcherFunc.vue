<template>
  <div class="switcher" @click="changeState(toggler)">
    <slot name="left"></slot>
    <slot name="right"></slot>
    <div class="current" :style="switcherState"></div>
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

  switcherState.transform = isChanged.value ? "translateX(" + (props.active ? "-" : "") + "34px)" : "translateX(0px)";

  toggler();
}
</script>

<style scoped>
.switcher {
  border: 2px solid var(--color-default);
  border-radius: 20px;
  width: 74px;
  height: 40px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 6px;

  &:hover {
    border-color: var(--color-active-default);
    transition: all 0.15;
  }

  .current {
    border: 2px solid var(--color-active-default);
    border-radius: 50%;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 3px;
    transition: all 0.15s;
  }
}
</style>
