<template>
  <div class="subject_wrapper">
    <SubjectsListView v-if="isSubjectsListViewVisible" />
    <RouterView v-else />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";

import SubjectsListView from "./SubjectsList/SubjectsListView.vue";

import { SUBJECTS_ERRORS } from "@/constants/errors.js";

import { useRoute } from "vue-router";
const route = useRoute();

import useSubjectsStore from "@/stores/useSubjectsStore.js";
import { SUBJECTS_ROUTE } from "@/router/subjects/subjects";
const subjectsStore = useSubjectsStore();

// загружаем предметы
async function loadSubjects() {
  await subjectsStore.fetchSubjects();

  // не получилось загрузить
  if (subjectsStore.subjects.length === 0) {
    console.error(SUBJECTS_ERRORS.GET_ALL);
    return;
  }
}

// показывать ли список предметов
const isSubjectsListViewVisible = computed(() => {
  return route.name === SUBJECTS_ROUTE.NAME;
});

onMounted(async () => {
  await loadSubjects();
});
</script>

<style scoped>
.subject_wrapper {
  width: 100%;
  height: 100%;
}
</style>
