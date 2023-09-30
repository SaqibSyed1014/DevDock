<template>
  <nav
      class="relative w-full items-center bg-sky py-3 md:py-6 px-3 md:px-7">
    <div class="flex items-center justify-between">
      <figure>
        <router-link
            class="sm:mx-2 my-1 md:mb-0 md:mt-0"
            to="/">
          <img src="/public/img/logo.svg" alt="DevDock Logo" class="w-[70%] sm:w-3/4">
        </router-link>
      </figure>

      <!-- Collapsible navbar container -->
      <div class="hidden mt-2 flex-grow basis-[100%] items-center md:mt-0 lg:flex md:basis-auto">
        <!-- Left links -->
        <ul class="list-style-none mr-auto flex flex-col pl-0 md:mt-1 md:flex-row gap-8">
          <AppDropdown :options="['Account', 'Settings']">Services</AppDropdown>
          <li class="font-medium cursor-pointer px-4">Portfolio</li>
          <AppDropdown :options="['Account', 'Settings']">Resources</AppDropdown>
          <AppDropdown :options="['Account', 'Settings']">Company</AppDropdown>
        </ul>
      </div>

      <div class="flex items-center">
        <AppButton secondary>View Portfolio</AppButton>
        <AppButton class="hidden md:block mx-5 lg:ml-5">Direct Contact</AppButton>
        <!-- Hamburger button for mobile view -->
        <button
            class="block lg:hidden border-0 bg-transparent pl-4 text-primary hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="showMobileMenu = true"
        >
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
      </div>
    </div>

    <div v-if="showMobileMenu" class="w-full h-screen fixed top-0 left-0 z-[111] flex items-center bg-primary px-14 py-12">
      <span @click="showMobileMenu = false" class="i-ph-x-bold absolute top-10 right-10 w-12 h-12 text-sky z-[1111]" />
      <ul class="list-style-none mr-auto pl-0 text-4xl flex flex-col text-sky mx-auto gap-y-20">
        <li>
          <AppDropdown :options="['Account', 'Settings']">Services</AppDropdown>
        </li>
        <li class="font-medium cursor-pointer px-2">Portfolio</li>
        <li>
          <AppDropdown :options="['Account', 'Settings']">Resources</AppDropdown>
        </li>
        <li>
          <AppDropdown :options="['Account', 'Settings']">Company</AppDropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import AppButton from '@/core/components/AppButton.vue'
import AppDropdown from "../core/components/AppDropdown.vue";

let showMobileMenu = ref(false)
</script>

<style scoped>
nav{
  font-family: Inter;
}
</style>
