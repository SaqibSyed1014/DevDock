<template>
  <nav
      class="relative flex w-full flex-wrap items-center justify-between bg-white py-2 md:py-6">
    <div class="flex w-full flex-wrap items-center justify-between px-7">
      <div>
        <a
            class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 md:mb-0 md:mt-0"
            href="#">
          <img src="/public/img/logo.svg" alt="logo" class="mr-10" style="height: 40px">
        </a>
      </div>

      <!-- Hamburger button for mobile view -->
      <button
          class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 md:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent4"
          aria-controls="navbarSupportedContent4"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-7 w-7">
          <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
        </svg>
      </span>
      </button>

      <!-- Collapsible navbar container -->
      <div
          class="!visible mt-2 hidden flex-grow basis-[100%] items-center md:mt-0 md:!flex md:basis-auto"
          id="navbarSupportedContent4">
        <!-- Left links -->
        <ul class="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row gap-8">
          <AppDropdown :options="['Account', 'Settings']">Services</AppDropdown>
          <li class="font-medium px-4">Portfolio</li>
          <AppDropdown :options="['Account', 'Settings']">Resources</AppDropdown>
          <AppDropdown :options="['Account', 'Settings']">Company</AppDropdown>
        </ul>

        <div class="flex items-center">
          <AppButton secondary class="mr-5">View Portfolio</AppButton>
          <AppButton>Direct Contact</AppButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import AppButton from '@/core/components/AppButton.vue'
import AppDropdown from "../core/components/AppDropdown.vue";
</script>

<style scoped>
nav{
  font-family: Inter;
}
</style>
