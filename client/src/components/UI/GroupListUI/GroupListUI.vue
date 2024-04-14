<template>
  <ul class="groups_list">
    <template v-for="(group, group_index) in groupsObject">
      <li class="group">
        <span class="group_name">{{ group_index.toUpperCase() }}</span>
        <InstancesList :group="group" />
      </li>
    </template>
  </ul>
</template>

<script setup>
import InstancesList from "./InstancesList/InstancesList.vue";

const props = defineProps({
  groupsObject: {
    /*
      {
        "group_name": [
          {
            NAME: "имя",
            LINK?: "ссылка",
            ...
          },
          ...
        ],
        ...
      }
    */
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.groups_list {
  height: 100%;

  --offset: 20px;

  .group {
    padding: calc(var(--offset) / 2) 0;
    box-sizing: content-box;

    &:not(:first-child) {
      border-top: var(--v1-border-width_small) solid var(--v1-color_active_1);
    }

    display: flex;
    flex-direction: row;

    .group_name {
      display: inline-block;
      width: 65px;

      color: var(--v1-color_blue_default);
      font-size: var(--v1-font-size_big);
      font-weight: var(--v1-font-weight_bold);
      line-height: var(--v1-font-size_big);

      padding: 0 var(--offset);

      border-right: var(--v1-border-width_small) solid var(--v1-color_default_1);

      flex-shrink: 0;
    }
  }
}
</style>
