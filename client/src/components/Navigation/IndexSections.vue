<template>
  <div class="nav_sections">
    <template v-for="(cardTitle, index) in props.list_title">
      <CardUI
        :title="cardTitle"
        :decription="props?.list_description[index] ?? ''"
        @click="
          {
            if (props?.list_path[index]) {
              router.push(props.list_path[index]);
            }
          }
        "
      />
    </template>
  </div>
</template>

<script setup>
import CardUI from "@/components/UI/CardUI.vue";
import router from "@/router";

/* этот компонент используется для навигации по сайту через кнопки */

const props = defineProps({
  // заголовки для каждой карточки
  list_title: {
    type: Array,
    required: true,
  },
  // описания для каждой карточки
  list_description: {
    type: Array,
  },
  // функции, которые вызываются при нажатии на карточку
  list_path: {
    type: Array,
  },
});
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
