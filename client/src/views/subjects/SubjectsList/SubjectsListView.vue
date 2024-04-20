<template>
  <AlphabetListUI :groupsObject="groupedSubjects" />
</template>

<script setup>
import { computed } from "vue";

import AlphabetListUI from "@/components/UI/AlphabetListUI/AlphabetListUI.vue";

import alphabetSort_helper from "@/helpers/alphabetSort.js";

import useSubjectsStore from "@/stores/useSubjectsStore.js";
const subjectsStore = useSubjectsStore();

// сгруппированные предметы
const groupedSubjects = computed(() => {
  return alphabetSort_helper(
    subjectsStore.subjects,
    subjectsStore.storeConfig.INSTANCES_FIELD_NAMES.NAME,
    true
  );
});
</script>

<style scoped></style>
