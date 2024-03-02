<template>
  <IconWrapperUI
    :isHover="true"
    :cursorPointer="true"
    @click="stylesStore.toggleModalVisibility"
  >
    <ProfileIcon />
  </IconWrapperUI>

  <Teleport to="body">
    <ModalFunc>
      <LoginUser v-if="!userStore.isAuth" />
    </ModalFunc>
  </Teleport>
</template>

<script setup>
import ProfileIcon from "@/components/UI/Icons/ProfileIcon.vue";
import IconWrapperUI from "@/components/UI/IconWrapperUI.vue";

import ModalFunc from "@/components/Func/Modal/ModalFunc.vue";

import LoginUser from "@/components/User/LoginUser/LoginUser.vue";

import useStylesStore from "@/stores/useStylesStore.js";
import useUserStore from "@/stores/useUserStore";

const stylesStore = useStylesStore();
const userStore = useUserStore();
</script>

<style scoped></style>
