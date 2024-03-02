<template>
  <div class="search">
    <input
      type="text"
      placeholder="поиск"
    />

    <div class="css-icon">
      <SearchIcon />
    </div>
  </div>
</template>

<script setup>
/* 
	search component, not full ready
*/

import SearchIcon from "@/components/UI/Icons/SearchIcon.vue";
</script>

<style scoped>
.search {
  position: relative;

  .css-icon {
    --css-icon_right: 0px;
    --css-icon_top: 0px;
    --css-icon_width: 40px;
    --css-icon_height: 40px;

    position: absolute;
    right: var(--css-icon_right);
    top: var(--css-icon_top);

    display: flex;
    justify-content: center;
    align-items: center;

    width: var(--css-icon_width);
    height: var(--css-icon_height);

    &:hover {
      cursor: pointer;
    }
  }

  input {
    --input-active_width: 500px;
    --input_padding-left: 10px;
    --input_padding-right: 36px;

    transition: all var(--v1-transition_fast);

    border: var(--v1-border-width_default) solid var(--v1-color_default_1);
    border-radius: var(--v1-border-radius_default);

    font-size: var(--v1-font-size_default);

    height: 40px;
    width: 300px;

    padding-left: var(--input_padding-left);
    padding-right: var(--input_padding-right);

    &:hover {
      border-color: var(--v1-color_active_1);
    }

    &:focus {
      border-color: var(--v1-color_active_1);
      width: var(--input-active_width);
    }
  }
}
</style>
