<template>
  <section>
    <span>
      <b>{{ props.title }}</b>
    </span>
    <p v-if="props.decription">{{ props.decription }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  decription: {
    type: String,
  },
});
</script>

<style scoped>
section {
  --card_width: 256px;
  --card_height: 180px;
  --card_padding: 10px;
  --card_gap: 10px;

  border: var(--v1-border-width_default) solid var(--v1-color_default_1);
  border-radius: var(--v1-border-radius_default);

  width: var(--card_width);
  height: var(--card_height);

  padding: var(--card_padding);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: var(--card_gap);

  &:hover {
    cursor: pointer;

    border-color: var(--v1-color_active_1);
  }

  span {
    font-size: var(--v1-font-size_medium);
  }
}
</style>
