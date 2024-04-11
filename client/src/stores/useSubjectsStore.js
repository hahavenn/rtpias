/* SUBJECTS STORE */

import { defineStore } from "pinia";
import { ref } from "vue";

import Subjects_service from "@/services/subjects.js";

import useStylesStore from "@/stores/useStylesStore.js";
const useStyles = useStylesStore();

export default defineStore("subjectsStore", () => {
  // список всех предметов
  const _subjects = ref([]);

  // получение всех предметов
  async function getSubjects(options = {}) {
    /* 
      force - флаг принудительной загрузки предметов
    */
    const { force = false } = options;

    useStyles.isContentLoaded = false;

    // если мы не загружали список предметов
    if (_subjects.value.length === 0 || force) {
      const response = await Subjects_service.getSubjects();

      _subjects.value = response ?? [];
    }

    useStyles.isContentLoaded = true;

    return _subjects.value;
  }

  return { getSubjects };
});