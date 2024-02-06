<template>
  <div class="search">
    <input type="text" placeholder="поиск" />

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
  cursor: pointer !important;

  .css-icon {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }

  input {
    border: 2px solid var(--color-default);
    border-radius: var(--border-radius-default);
    font-size: var(--font-size-default);
    padding: 0 10px;
    height: 40px;
    padding-right: 36px;
    width: 300px;
    transition: all var(--transition-default);

    &:hover {
      border-color: var(--color-active-default);
    }

    &:focus {
      border-color: var(--color-active-default);
      width: 500px;
    }
  }
}
</style>
