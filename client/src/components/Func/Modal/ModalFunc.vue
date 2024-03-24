<template>
  <div
    id="modal"
    @click.self="modalCloseHandler"
    v-show="stylesStore.isModalVisible"
  >
    <div class="modal_inner">
      <button
        class="modal_close"
        @click="modalCloseHandler"
      >
        <CrossIcon />
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import CrossIcon from "@/components/UI/Icons/CrossIcon.vue";

import useStylesStore from "@/stores/useStylesStore.js";

const stylesStore = useStylesStore();

function modalCloseHandler() {
  stylesStore.toggleModalVisibility();
}
</script>

<style scoped>
#modal {
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  z-index: var(--index_modal);

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

    border-radius: var(--v1-border-radius_default);

    background-color: var(--v1-color_white_1);

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

      border-top-right-radius: var(--v1-border-radius_default);
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: transparent;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
