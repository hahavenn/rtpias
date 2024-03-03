<template>
  <IconWrapperUI
    :isHover="true"
    :cursorPointer="true"
    @click="profileIconHandler"
  >
    <ProfileIcon />
  </IconWrapperUI>

  <Teleport to="body">
    <ModalFunc v-if="!userStore.isAuth">
      <LoginUser />
    </ModalFunc>
  </Teleport>
</template>

<script setup>
import ProfileIcon from "@/components/UI/Icons/ProfileIcon.vue";
import IconWrapperUI from "@/components/UI/IconWrapperUI.vue";

import ModalFunc from "@/components/Func/Modal/ModalFunc.vue";

import LoginUser from "@/components/User/LoginUser.vue";

import useStylesStore from "@/stores/useStylesStore.js";
import useUserStore from "@/stores/useUserStore";

const stylesStore = useStylesStore();
const userStore = useUserStore();

function profileIconHandler() {
  stylesStore.toggleModalVisibility();
}
</script>

<style scoped></style>
