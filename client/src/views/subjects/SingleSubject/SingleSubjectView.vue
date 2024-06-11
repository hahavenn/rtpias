<template>single subject -> {{ subject_id }}</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { SINGLE_SUBJECT_PARAMS } from "@/router/subjects/single_subject/single_subject";

const route = useRoute();

// получаем id из параметров марщрута
const subject_id = computed(() => {
  return route.params?.[SINGLE_SUBJECT_PARAMS.SUBJECT_ID];
});
</script>

<style scoped></style>
