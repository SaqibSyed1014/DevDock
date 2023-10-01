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
        <ul
            class="list-style-none mr-auto flex flex-col items-center pl-0 md:mt-1 md:flex-row gap-6 text-[15px]"
        >
          <li>
            <AppDropdown show-hover-color :options="['Account', 'Settings']">Services</AppDropdown>
          </li>
          <li class="cursor-pointer px-4 hover:text-pink transition">Portfolio</li>
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
      class="mobile-nav w-full h-screen fixed overflow-hidden top-[65px] left-0 z-[11111] bg-white"
  >
    <hr>
    <nav class="h-full overflow-auto">
      <ul class="list-style-none mt-8 px-3" >
        <li
            v-for="(link, index) in menuLinks"
            :key="index"
        >
          <p
              class="menu-labels transition text-primary font-medium text-lg mb-3"
              :style="{ '--index': index }"
          >
            {{ link.label }}
          </p>
          <ul
              v-if="link.subLinks.length"
              class="list-style-none mb-7"
          >
            <li
                v-for="(subLink, i) in link.subLinks"
                :key="i"
                class="sub-menu-link transition text-sm py-2"
                :style="{ '--subIndex': i }"
            >
              <router-link to="\">{{ subLink }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
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
  if (showMobileMenu.value) return
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

watch(showMobileMenu, (val) => {
  if (val) document.body.style.overflow = 'hidden'
})

const menuLinks = [
  { label: 'Services', subLinks: ['Account', 'Settings'] },
  { label: 'Portfolio', subLinks: [] },
  { label: 'Resources', subLinks: ['Account', 'Settings'] },
  { label: 'Company', subLinks: ['Account', 'Settings'] }
]
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
.mobile-nav{
  hr{
    border: 1px solid #e0e5e6;
    animation: slideRight .55s cubic-bezier(.215,.61,.355,1) forwards;
  }
  .menu-labels, .sub-menu-link {
    opacity: 0;
    transition: opacity .15s linear 0ms, transform .5s cubic-bezier(.215, .61, .355, 1) 0ms;
  }
  .menu-labels{
    animation: linkListNavItem .7s calc(var(--index)*50ms) cubic-bezier(.19,1,.22,1) forwards;
    transition-delay: calc(var(--index)*50ms);
  }
  .sub-menu-link{
    animation: linkListNavItem .7s calc(var(--subIndex)*50ms) cubic-bezier(.19,1,.22,1) forwards;
    transition-delay: calc(var(--subIndex)*80ms);
  }
  .sub-menu-link{
    position: relative;
    &::after{
      border-bottom: 1px solid #bdedfc;
      content: "";
      height: 0;
      left: 0;
      bottom: 0;
      position: absolute;
      animation: slideRight .55s cubic-bezier(.215,.61,.355,1) forwards;
    }
  }
}
</style>
