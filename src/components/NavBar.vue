<template>
  <nav
      class="nav-container w-full items-center py-2 lg:py-1 px-3 md:px-7 z-[1111]"
      :class="[showMobileMenu?'bg-white':'bg-sky', isScrollingDown ? 'nav-hidden':'nav-fixed']"
  >
    <div class="flex items-center justify-between">
      <figure>
        <router-link
            class="sm:mx-2 my-1 md:mb-0 md:mt-0"
            to="/">
          <img src="/public/img/logo.svg" alt="DevDock Logo" class="w-[70%] sm:w-3/4">
        </router-link>
      </figure>

      <!-- Collapsible navbar container -->
      <div class="hidden lg:flex items-center flex-grow basis-[100%] md:basis-auto md:mt-0 mt-2">
        <!-- Left links -->
        <ul class="list-style-none mr-auto flex flex-col items-center pl-0 md:mt-1 md:flex-row gap-6">
          <li>
            <AppDropdown show-hover-color :options="['Account', 'Settings']">Services</AppDropdown>
          </li>
          <li class="font-medium cursor-pointer px-4 hover:text-pink transition">Portfolio</li>
          <li>
            <AppDropdown show-hover-color :options="['Account', 'Settings']">Resources</AppDropdown>
          </li>
          <li>
            <AppDropdown show-hover-color :options="['Account', 'Settings']">Company</AppDropdown>
          </li>
        </ul>
      </div>

      <div class="flex items-center">
        <AppButton secondary class="shrink-0">View Portfolio</AppButton>
        <AppButton class="hidden lg:block mx-5 lg:ml-5">Direct Contact</AppButton>
        <!-- Hamburger button for mobile view -->
        <div class="flex lg:hidden items-center pl-4 pr-2 text-primary" @click="showMobileMenu = !showMobileMenu">
          <span v-if="!showMobileMenu" class="i-solar-hamburger-menu-linear w-9 h-9" />
          <span
              v-else
              class="i-ph-x w-9 h-9"
          />
        </div>
      </div>
    </div>

  </nav>

  <div
      v-if="showMobileMenu"
      class="w-full h-screen fixed top-[65px] left-0 z-[11111] flex justify-center items-center bg-white px-14 py-12"
  >
    <p class="text-center text-3xl font-bold">Coming Soon</p>
    <!--      <ul class="list-style-none mr-auto pl-0 text-4xl flex flex-col text-sky mx-auto gap-y-20">-->
    <!--        <li>-->
    <!--          <AppDropdown :options="['Account', 'Settings']">Services</AppDropdown>-->
    <!--        </li>-->
    <!--        <li class="font-medium cursor-pointer px-2">Portfolio</li>-->
    <!--        <li>-->
    <!--          <AppDropdown :options="['Account', 'Settings']">Resources</AppDropdown>-->
    <!--        </li>-->
    <!--        <li>-->
    <!--          <AppDropdown :options="['Account', 'Settings']">Company</AppDropdown>-->
    <!--        </li>-->
    <!--      </ul>-->
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import AppButton from '@/core/components/AppButton.vue'
import AppDropdown from "../core/components/AppDropdown.vue";

let showMobileMenu = ref(false)

// Variables to track scroll position
const scrollY = ref(window.scrollY);
const isScrollingDown = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isScrollingDown.value = currentScrollY > scrollY.value;
  scrollY.value = currentScrollY;
};

// Attach and remove scroll event listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})
</script>

<style scoped lang="scss">
nav{
  font-family: Inter;
}
.pushed-up {
  transform: translateY(-100%);
  transition: transform 0.3s ease; /* Adjust the transition duration as desired */
}
nav{
  &.nav-container{
    position: fixed;
    transition: transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    //transition-behavior: normal, normal;
    //transition-duration: 0ms, 3s;
    //transition-timing-function: linear, cubic-bezier(0.645, 0.045, 0.355, 1);
    //transition-delay: 0.2s, 0s;
    //transition-property: background-color, transform;
  }
  &.nav-hidden{
    transform: translateY(-100%);
  }
  &.nav-fixed{
    transform: translateY(0);
  }
}
</style>
