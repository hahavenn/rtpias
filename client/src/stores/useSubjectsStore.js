/* SUBJECTS STORE */

import { defineStore } from "pinia";
import { ref } from "vue";

import Subjects_service from "@/services/subjects.js";

import { SUBJECTS_ROUTE } from "@/router/subjects/subjects";

import useStylesStore from "@/stores/useStylesStore.js";
const useStyles = useStylesStore();

export default defineStore("subjectsStore", () => {
  // конфиг
  const storeConfig = {
    INSTANCES_FIELD_NAMES: {
      _id: "_id",
      NAME: "NAME",
      SUBJECT_ID: "SUBJECT_ID",
      LINK: "LINK",
    },
  };

  // список всех предметов
  const subjects = ref([]);

  // запрос предметов с сервера
  async function fetchSubjects() {
    useStyles.isContentLoaded = false;

    const response = await Subjects_service.getSubjects();

    // если у нас пустой ответ - проверяем наличие в сторе, если есть - возвращаем его
    subjects.value = response ?? (subjects.value.length !== 0 ? subjects.value : []);

    // добавляем ссылку для каждого предмета
    if (subjects.value.length !== 0) {
      for (const subject of subjects.value) {
        subject[
          storeConfig.INSTANCES_FIELD_NAMES.LINK
        ] = `${SUBJECTS_ROUTE.PATH}/${subject.SUBJECT_ID}`;
      }
    }

    useStyles.isContentLoaded = true;
  }

  return { storeConfig, subjects, fetchSubjects };
});
