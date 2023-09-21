<template>
  <header class="bg-sky py-20">
    <div class="intro-content container mx-auto text-primary text-center">
      <h1 class="text-8xl flex flex-row flex-wrap gap-y-3 items-center justify-center font-semibold">
        <span>Get</span>&nbsp;<span>your</span>&nbsp;<span>Personalized</span>&nbsp;
        <img src="public/img/hire_01.png" alt="Hire 01" width="165" height="190" class="rounded-[100px] shrink-0">
        <img src="public/img/hire_02.png" alt="Hire 02" width="165" height="190" class="rounded-[100px] shrink-0">
        &nbsp;<span>Development</span>&nbsp;<span>Services</span>&nbsp; <span>Under</span>&nbsp;1 Roof
      </h1>
      <div class="pt-10">
        <p class="text-2xl">Focus only on <span class="underlines-word">productivity</span> now</p>
        <div class="pt-14">
          <AppButton class="fancy-btn mr-8">View Portfolio</AppButton>
          <AppDropdown :options="['Account', 'Settings']">Explore our Gallery</AppDropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from "@/core/components/AppButton.vue";
import AppDropdown from "@/core/components/AppDropdown.vue";
</script>

<style scoped lang="scss">
.underlines-word{
  position: relative;
  padding-right: 10px;
  &::after{
    content: '';
    display: block;
    position: absolute;
    left: -20px;
    bottom: -10px;
    background-image: url("/public/img/lines.svg");
    background-repeat: no-repeat;
    width: 155px;
    height: 17px;
  }
}
.fancy-btn{
  position: relative;
  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    left: -70px;
    background-image: url("/public/img/illustrations.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
  &::after{
    content: '';
    display: block;
    position: absolute;
    top: -18px;
    right: -12px;
    background-image: url("/public/img/star.svg");
    background-repeat: no-repeat;
    height: 15px;
    width: 13px;
  }
}
</style>
