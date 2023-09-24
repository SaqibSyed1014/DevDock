<template>
  <section class="container mx-auto">
    <h3 class="text-5xl font-medium mx-auto text-center pb-14 w-full lg:w-2/4">See what our founders are saying! </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 pb-40">
      <template v-for="(info, index) in userReviews" :key="index">
        <user-card
            :color="info.color"
            :user-name="info.name"
            :user-desc="info.desc"
            :reviews="info.review"
        />
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import UserCard from "@/core/components/UserCard.vue";

const userReviews = [
  { color: '#FDFFAD', name: 'Carter Olive', desc: 'Founder of StayBusy',
    review: 'I am blown away by how dedicated ConvrtX was to supporting a founder\'s vision. The lessons I\'ve learned along the way are beyond valuable.' },
  { color: '#FFDEF7', name: 'Xan Manning', desc: 'Founder of FitGenie',
    review: 'The experience I have had with Convrtx has been nothing short of amazing. The Leadership and expertise at convrtx is top notch. I\'m all in “Go team Convrtx.' },
  { color: '#D1F2FD', name: 'Micheal McNair', desc: 'Founder of SpotSwap',
    review: 'Being new to startup world, mean’t I had a lot to learn. But ConvrtX not only positioned me corretly for investors but taught me how to raise funds too!' },
]
</script>

<style scoped>

</style>
