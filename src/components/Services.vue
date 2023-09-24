<template>
  <section class="bg-primary">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="flex items-center justify-center py-[149px]">
        <div class="w-full max-w-md">
          <img src="/public/img/arrow.svg" alt="Up Arrow">
          <h2 class="mb-8 text-white text-5xl"><span class="text-secondary">DevDock</span> works with Companies and
            supports startups in four critical ways.</h2>
          <AppButton secondary>Direct Contact</AppButton>
        </div>
      </div>
      <div class="services-grid">
        <div class="flex">
          <div class="group w-[50%] border-2 border-b-0 border-r-0 border-white border-opacity-50 cursor-pointer hover:bg-secondary">
            <div class="flex items-center h-[400px] px-[21px]">
              <div class="text-white flex-1">
                <span class="text-[53px] group-hover:text-primary opacity-2">1.</span>
                <div class="pt-10 group-hover:pt-6">
                  <img src="/public/img/capital.svg" alt="Settings">
                  <div class="flex gap-8 justify-between items-center">
                    <h3 class="text-3xl font-medium pt-5 group-hover:text-black group-hover:mb-2">Design Research</h3>
                    <span class="i-mdi-arrow-right w-12 h-10 group-hover:hidden"></span>
                  </div>
                  <p class="text-black text-sm leading-7 hidden group-hover:block">We understand that every client and project is unique. Our agency
                    takes a personalized approach, tailoring our services to your specific needs and goals. This ensures
                    that the final product aligns perfectly with your vision and objectives.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="group w-[50%] border-2 border-b-0 border-white border-opacity-50 cursor-pointer hover:bg-secondary">
            <div class="flex items-center h-[400px] px-[21px]">
              <div class="text-white flex-1">
                <span class="text-[53px] group-hover:text-primary opacity-2">2.</span>
                <div class="pt-10 group-hover:pt-3">
                  <img src="/public/img/software.svg" alt="Settings">
                  <div class="flex gap-8 justify-between items-center">
                    <h3 class="text-3xl font-medium pt-5 group-hover:text-black group-hover:mb-2">Product Development</h3>
                    <span class="i-mdi-arrow-right w-12 h-10 group-hover:hidden"></span>
                  </div>
                  <p class="text-black text-sm leading-7 hidden group-hover:block">We understand that every client and project is unique. Our agency
                    takes a personalized approach, tailoring our services to your specific needs and goals. This ensures
                    that the final product aligns perfectly with your vision and objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="group w-[50%] border-2 border-b-0 border-r-0 border-white border-opacity-50 cursor-pointer hover:bg-secondary">
            <div class="flex items-center h-[400px] px-[21px]">
              <div class="text-white flex-1">
                <span class="text-[53px] group-hover:text-primary opacity-2">3.</span>
                <div class="pt-10 group-hover:pt-3">
                  <img src="/public/img/capital.svg" alt="Settings">
                  <div class="flex gap-8 justify-between items-center">
                    <h3 class="text-3xl font-medium pt-5 group-hover:text-black group-hover:mb-2">SEO & Marketing</h3>
                    <span class="i-mdi-arrow-right w-12 h-10 group-hover:hidden"></span>
                  </div>
                  <p class="text-black text-sm leading-7 hidden group-hover:block">We understand that every client and project is unique. Our agency
                    takes a personalized approach, tailoring our services to your specific needs and goals. This ensures
                    that the final product aligns perfectly with your vision and objectives.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="group w-[50%] border-2 border-b-0 border-white border-opacity-50 cursor-pointer hover:bg-secondary">
            <div class="flex items-center h-[400px] px-[21px]">
              <div class="text-white flex-1">
                <span class="text-[53px] group-hover:text-primary opacity-2">4.</span>
                <div class="pt-10 group-hover:pt-3">
                  <img src="/public/img/strategy.svg" alt="Settings">
                  <div class="flex gap-8 justify-between items-center">
                    <h3 class="text-3xl font-medium pt-5 group-hover:text-black group-hover:mb-2">Life Time Support</h3>
                    <span class="i-mdi-arrow-right w-12 h-10 group-hover:hidden"></span>
                  </div>
                  <p class="text-black text-sm leading-7 hidden group-hover:block">We understand that every client and project is unique. Our agency
                    takes a personalized approach, tailoring our services to your specific needs and goals. This ensures
                    that the final product aligns perfectly with your vision and objectives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import AppButton from "@/core/components/AppButton.vue";
</script>

<style scoped>

</style>
