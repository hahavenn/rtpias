<template>
  <GroupListUI :groupsObject="groupedSubjects" />
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

import GroupListUI from "@/components/UI/GroupListUI/GroupListUI.vue";

import { SUBJECTS_ERRORS } from "@/constants/errors";

import alphabetSort_helper from "@/helpers/alphabetSort.js";

import useSubjectsStore from "@/stores/useSubjectsStore.js";
const subjectsStore = useSubjectsStore();

// все предметы
const subjects = ref([]);
//загружаем предметы
async function loadSubjects() {
  subjects.value = await subjectsStore.getSubjects();

  // не получилось загрузить
  if (subjects.value.length === 0) {
    console.log(SUBJECTS_ERRORS.GET_ALL);
    return;
  }
}

// сгруппированные предметы
const groupedSubjects = computed(() => {
  return subjects.value ? alphabetSort_helper(subjects.value, "NAME", true) : [];
});

onMounted(async () => {
  await loadSubjects();
});
</script>

<style scoped></style>
