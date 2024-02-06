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
  border: 2px solid var(--color-default);
  border-radius: var(--border-radius-default);
  width: 256px;
  height: 180px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    border-color: var(--color-active-default);
  }

  span {
    font-size: var(--font-size-medium);
  }

  p {
    margin-top: 10px;
  }
}
</style>
