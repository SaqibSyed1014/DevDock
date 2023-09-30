<template>
  <section class="container mx-auto mb-28">
    <h3 class="text-center text-3xl sm:text-5xl font-medium pb-20 sm:py-[100px] w-full lg:w-3/4 mx-auto">
      4 <span class="text-pink">Reasons</span>, Why You Should Use DevDock to Build Product
    </h3>

    <template v-for="(feature, index) in featuresData" :key="index">
      <div class="rounded-[10px] text-center pt-28 pb-14 mb-3 sm:mb-14 bg-primary"
           :class="[feature.darkText?'text-primary':'text-white']"
           :style="{background: feature.color}">
        <div class="sm:w-3/4 mx-auto px-3">
          <h4 class="text-2xl sm:text-4xl font-medium pb-6">
            {{ feature.startText }}
            <span
                class="rounded-[100px] px-5 uppercase"
                :class="[feature.darkText?'bg-primary text-white':'bg-white text-primary']"
            >{{ feature.highlightedText }}</span>
            {{ feature.endText }}
          </h4>
          <p class="text-sm sm:text-lg leading-relaxed sm:leading-7">{{ feature.desc }}</p>
          <img class="mx-auto px-3 pt-7" :src="`/img/${feature.image}`" :alt="feature.alt">
        </div>
      </div>
    </template>
  </section>
</template>

<script setup>
const featuresData = [
  { startText: 'We offer', highlightedText: 'Customized', endText: 'approach', desc: 'We understand that every client and project is unique. Our agency takes a personalized approach, tailoring our services to your specific needs and goals. This ensures that the final product aligns perfectly with your vision and objectives.', image: 'connection.svg', alt: 'Connection', color: '#EBFAFE', darkText: true },
  { startText: 'We focus on', highlightedText: 'Educating', endText: 'your users', desc: 'Our agency boasts a team of seasoned professionals with years of experience in product development. We have a track record of delivering successful projects across various industries, ensuring your product is in capable hands.', image: 'laptop.svg', alt: 'Laptop', color: '#FFE8BC', darkText: true },
  { startText: 'We provide', highlightedText: 'Innovative', endText: 'solutions', desc: 'We pride ourselves on staying at the forefront of technology trends and innovation. When you choose our agency, you gain access to cutting-edge solutions and approaches that can give your product a competitive edge in the market.', image: 'lens.svg', alt: 'Lens', color: '#BCDFFF', darkText: true },
  { startText: 'Timely Delivery', highlightedText: '&&', endText: 'Cost Efficiency', desc: 'We are committed to delivering your product on time and within budget. Our efficient project management processes and cost-effective strategies help you maximize the return on your investment while minimizing potential delays.', image: 'sparrow.svg', alt: 'Sparrow', color: 'primary', darkText: false },
]
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const masterTimeline = gsap.timeline();
  const elements = document.querySelectorAll('.blue-box')
  const createTimelineForElement = (element) => {
    const tl = gsap.timeline({
      scrollTrigger :{
        trigger: element,
        start: 'top top', // Adjust the trigger start position as needed
        end: 'bottom center', // Adjust the trigger end position as needed
        scrub: 1, // Enables scrubbing for smooth scrolling
        markers: true,
        onUpdate: () => {
          // Get the ScrollTrigger progress value (0 to 1)
          // const progress = self.progress;
          // Calculate the scale factor based on the progress
          // const scaleFactor = 1 - progress * 0.2; // Adjust the factor as needed

          // Apply the scale transformation to the element
          tl.to(element, { scale: .95, duration: .3 });
        },
      }
    });

    // Return the timeline for the element
    return tl;
  };


  elements.forEach(element => {
    const elementTimeline = createTimelineForElement(element);
    masterTimeline.add(elementTimeline);
  })
  masterTimeline.play();


  // Add an event listener to watch for scroll events
  // Apply the scale transformation to the element

  // ScrollTrigger.create({
  //   trigger: '.blue-box',
  //   start: 'top bottom', // Adjust the trigger start position as needed
  //   end: 'bottom bottom', // Adjust the trigger end position as needed
  //   scrub: true, // Enables scrubbing for smooth scrolling
  //   markers: true,
  //   onUpdate: (self) => {
  //     const progress = self.progress;
  //     const scaleFactor = 1 - progress * 0.2; // Adjust the factor as needed
  //     tl.to(elementToAnimate.value, { scale: scaleFactor });
  //   },
  //   toggleClass: 'scrolling-up', // Add a class when scrolling up
  // });
});
</script>

<style scoped>

</style>
