<template>
  <Menu v-slot="{ open }" as="div" class="relative inline-block text-left">
    <MenuButton class="flex items-center whitespace-nowrap text-base-white transition-colors duration-200 font-medium rounded px-2">
      <slot />
      <span class="ml-3.5 w-2">
        <svg
            :class="[open?'rotate-180':'rotate-0']"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#889BA0"
            class="h-5 w-5 transition duration-200">
          <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
        </svg>
    </span>
    </MenuButton>
    <MenuItems class="absolute z-[100] bg-white overflow-hidden left-0 mt-2 w-[144px] p-4 origin-top-right rounded-md shadow-md focus:outline-none">
      <MenuItem v-for="(option, index) in options" :key="index">
        <div class="hover:bg-transparent cursor-pointer">
          {{ option }}
        </div>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {defineProps} from "vue";
defineProps({
  options: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>

</style>
