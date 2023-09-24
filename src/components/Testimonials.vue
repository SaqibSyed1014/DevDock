<template>
  <section class="bg-sky py-16">
    <div class="container mx-auto mb-20">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-5 text-primary">
        <p class="text-lg">We are a collaborative team. We do offer solid core values and a intention meant to provide solutions, a
          dream come actual growth for the business.</p>
        <div>
          <p class="text-base">Loved by clients around the world</p>
          <hr>
          <div class="flex flex-wrap justify-around gap-10">
            <img src="/public/img/clients/Opendoor.svg" alt="Client">
            <img src="/public/img/clients/AWS.svg" alt="Client">
            <img src="/public/img/clients/UBER_3.svg" alt="Client">
            <img src="/public/img/clients/Personio.svg" alt="Client">
            <img src="/public/img/clients/soft_bank.svg" alt="Client">
          </div>
        </div>
      </div>
    </div>
    <div class="px-7">
      <div class="relative rounded-[40px] overflow-hidden">
        <img src="/public/img/rocket.png" alt="Rocket">
        <div class="absolute left-10 top-0 flex flex-col justify-between h-full py-10">
          <button class="rounded-full bg-secondary text-primary md:py-2 lg:py-2.5 md:px-9 lg:px-11 text-sm md:text-base w-fit font-medium">Get the full effect</button>
          <h3 class="text-white text-5xl lg:text-[80px] lg:leading-[80px]">Feel the <br> BuzzZZz.</h3>
          <div class="flex justify-center items-center rounded-full h-[77px] w-[77px] bg-white cursor-pointer p-3">
            <span class="i-mdi-play w-8 h-8"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<style scoped>
hr{
  margin: 1.5rem 0;
  border-top: 1px solid #BDEDFC;
}
</style>
