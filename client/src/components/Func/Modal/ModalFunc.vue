<template>
  <div id="modal" @click.self="stylesStore.toggleModalVisibility()" v-show="stylesStore.isModalVisible">
    <div class="modal_inner">
      <div class="modal_close" @click="stylesStore.toggleModalVisibility()">
        <CrossIcon />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import CrossIcon from "@/components/UI/Icons/CrossIcon.vue";

import useStylesStore from "@/stores/useStylesStore.js";

const stylesStore = useStylesStore();
</script>

<style scoped>
#modal {
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: 9999;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .modal_inner {
    --inner-modal-width: 360px;
    --inner-modal-height: 480px;
    --padding-value: 40px;

    width: var(--inner-modal-width);
    height: var(--inner-modal-height);

    padding: var(--padding-value) calc(var(--padding-value) / 2);

    border-radius: var(--border-radius-default);

    background-color: var(--color-white);

    position: relative;

    cursor: default;

    display: flex;
    justify-content: center;
    align-items: center;

    .modal_close {
      --close-button-size: 40px;

      position: absolute;
      right: 0;
      top: 0;

      width: var(--close-button-size);
      height: var(--close-button-size);

      border-top-right-radius: var(--border-radius-default);

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;

        background-color: var(--color-hover-default);
        transition: var(--transition-default) all;
      }
    }
  }
}
</style>
