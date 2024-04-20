<template>
  <ul class="instances_list">
    <template v-for="instance in group">
      <li class="instance">
        <RouterLink
          v-if="instance?.LINK"
          :to="instance?.LINK"
        >
          {{ instance.NAME }}
        </RouterLink>
        <span v-else>{{ instance.NAME }}</span>
      </li>
    </template>
  </ul>
</template>

<script setup>
const props = defineProps({
  group: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.instances_list {
  --offset: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  padding: 0 var(--offset);

  .instance {
    a,
    span {
      display: inline-block;

      max-width: 100%;

      text-overflow: ellipsis;
      overflow: hidden;

      font-size: var(--v1-font-size_medium);

      @media (hover: hover) {
        &:hover {
          text-decoration: none;
          color: var(--v1-color_red_default);
          transition: var(--v1-transition_default);
        }
      }
    }
  }
}
</style>
