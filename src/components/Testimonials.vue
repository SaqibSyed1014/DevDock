<template>
  <section class="bg-sky py-16">
    <div class="container mx-auto lg:mb-20">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-2 lg:gap-5 text-primary">
        <p class="sm:text-lg">
          We are a collaborative team. We do offer solid core values and a intention meant to provide solutions, a
          dream come actual growth for the business.
        </p>
        <div>
          <p class="sm:text-base pb-6">
            Loved by clients around the world
          </p>
          <hr>
          <div class="flex flex-nowrap whitespace-normal overflow-hidden py-6">
            <div class="flex justify-around items-center horizontal-slider">
              <div v-for="(logo, index) in clientLogos" :key="index"  class="px-5">
                <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
              </div>
            </div>
            <div class="flex justify-around items-center horizontal-slider">
              <div v-for="(logo, index) in clientLogos" :key="index" class="px-5">
                <img :src="`/img/clients/${logo.name}`" :alt="logo.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-banner md:px-7">
      <div class="relative rounded-lg md:rounded-[40px] overflow-hidden">
        <img src="/public/img/rocket.png" alt="Rocket">
        <div class="content-wrapper absolute left-3 md:left-10 top-0 flex flex-col justify-between h-full py-4 md:py-10">
          <button class="rounded-full bg-secondary text-primary py-1 sm:py-2 lg:py-2.5 px-6 sm:px-7 md:px-9 lg:px-11 text-xs sm:text-sm md:text-base w-fit font-medium">Get the full effect</button>
          <h3 class="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl lg:text-[80px] lg:leading-[80px] cursor-pointer">
            Feel the <br>BuzzZZz.
          </h3>
          <button class="play-btn flex justify-center items-center rounded-full w-8 h-8 md:w-14 md:h-14 lg:h-[77px] lg:w-[77px] relative cursor-pointer">
            <div class="btn-bg" />
            <span class="btn-play-icon i-mdi-play md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const clientLogos = [
  { name: 'shaoke.svg', alt: 'Shaoke' },
  { name: 'commkit.svg', alt: 'Commkit' },
  { name: 'memee.svg', alt: 'MeMee' },
  { name: 'blackburt.svg', alt: 'BlackBurt' },
  { name: 'firetrust.svg', alt: 'FireTrust' }
]
</script>

<style scoped lang="scss">
.horizontal-slider{
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-name: HSlider;
  animation-play-state: running;
  animation-timing-function: linear;
  flex: 0 0 auto;
  flex-wrap: nowrap;
}
@keyframes HSlider {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-100%);
  }
}
hr{
  border-top: 1px solid #BDEDFC;
}
.video-banner{
  img{
    transition: transform .95s cubic-bezier(.25,.46,.45,.94);
  }
  &:hover img {
    transform: scale(1.1)
  }
  .content-wrapper{
    width: -webkit-fill-available;
  }
}
.play-btn{
  & .btn-bg{
    &::after, &::before{
      border-radius: 100%;
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
    &::before{
      background-color: #ffa2ea;
      opacity: 0;
      transition: opacity 0ms linear .5s;
    }
    &::after{
      background-color: #fff;
    }
  }
  & .btn-play-icon,.btn-bg::after{
    transition: transform .5s cubic-bezier(.19,1,.22,1);
  }
  &:hover, &:focus{
    & .btn-bg {
      &::before {
        opacity: 1;
        transition: opacity 0ms linear;
      }

      &::after, {
        transform: translate3d(-2px, -2px, 0);
      }
    }
    & .btn-play-icon{
      transform: translate3d(-2px, -2px, 0);
    }
  }
}
</style>
