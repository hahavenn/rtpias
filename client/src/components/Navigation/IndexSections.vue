<template>
  <div class="nav_sections">
    <template v-for="section in props.sections">
      <CardUI
        :title="section.TITLE"
        :decription="section.DESCRIPTION"
        @click="cardClickHandler(section.PATH)"
      />
    </template>
  </div>
</template>

<script setup>
import CardUI from "@/components/UI/CardUI.vue";
import router from "@/router";

/* этот компонент используется для навигации по сайту через кнопки */

const props = defineProps({
  sections: {
    type: Object,
    required: true,
  },
});

// функция перенаправления на раздел
function cardClickHandler(pathToGo) {
  router.push(pathToGo);
}
</script>

<style scoped>
.nav_sections {
  --nav-sections_margin-top: 40px;
  --nav-sections_gap: 30px;

  max-width: var(--v1-width__desktop);
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  gap: var(--nav-sections_gap);

  margin-top: var(--nav-sections_margin-top);
}
</style>
