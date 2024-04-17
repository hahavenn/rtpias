<template>
  <div
    class="nav_sections"
    v-if="isContentLoaded"
  >
    <template v-for="section in allSections">
      <CardUI
        :name="section.NAME"
        :decription="section.DESCRIPTION ?? ''"
        @click="cardClickHandler(section.ROUTE_PATH)"
      />
    </template>
  </div>
  <LoaderUI v-else />
</template>

<script setup>
/* этот компонент используется для навигации по сайту через кнопки */

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import CardUI from "@/components/UI/CardUI.vue";
import LoaderUI from "@/components/UI/LoaderUI.vue";

import useNavigationStore from "@/stores/useNavigationStore.js";

const router = useRouter();

const useNavigation = useNavigationStore();

// все табы для отображения навигации по сайту
const allSections = ref(null);

// загружен ли контент
const isContentLoaded = ref(false);

// загружаем все секции
async function loadSections() {
  allSections.value = await useNavigation.getNavigationList();
  isContentLoaded.value = true;
}

// нажатие на карточку
function cardClickHandler(cardPath) {
  router.push(cardPath);
}

onMounted(async () => {
  await loadSections();
});
</script>

<style scoped>
.nav_sections {
  --nav-sections_gap: 30px;

  max-width: var(--v1-width__desktop);
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  gap: var(--nav-sections_gap);
}
</style>
