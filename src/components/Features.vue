<template>
  <section class="container mx-auto relative">
    <h3 class="text-center text-5xl font-medium py-[100px] w-full lg:w-3/4 mx-auto">
      4 <span class="text-pink">Reasons</span>, Why You Should Use DevDock to Build Product
    </h3>

    <div class="blue-box bg-[#EBFAFE] rounded-[10px] sticky top-[30px] text-center pt-28 pb-14 mb-14">
      <div class="w-3/4 mx-auto">
        <h4 class="text-primary text-4xl font-medium pb-6">
          We offer <span class="rounded-[100px] bg-primary px-5 text-white uppercase">Customized</span> approach
        </h4>
        <p class="leading-7">We understand that every client and project is unique. Our agency takes a personalized approach, tailoring our services to your specific needs and goals. This ensures that the final product aligns perfectly with your vision and objectives.</p>
        <img class="mx-auto pt-7" src="/public/img/connection.svg" alt="Connection">
      </div>
    </div>

    <div class="blue-box bg-[#FFE8BC] rounded-[10px] sticky top-[54px] text-center pt-28 pb-14 mb-14">
      <div class="w-3/4 mx-auto">
        <h4 class="text-primary text-4xl font-medium pb-6">
          We focus on <span class="rounded-[100px] bg-primary px-5 text-white uppercase">Educating</span> your users
        </h4>
        <p class="leading-7">Our agency boasts a team of seasoned professionals with years of experience in product development. We have a track record of delivering successful projects across various industries, ensuring your product is in capable hands.</p>
        <img class="mx-auto pt-7" src="/public/img/laptop.svg" alt="Laptop">
      </div>
    </div>

    <div class="blue-box bg-[#BCDFFF] rounded-[10px] sticky top-[78px] text-center pt-28 pb-14 mb-14">
      <div class="w-3/4 mx-auto">
        <h4 class="text-primary text-4xl font-medium pb-6">
          We provide <span class="rounded-[100px] bg-primary px-5 text-white uppercase">Innovative</span> solutions
        </h4>
        <p class="leading-7">We pride ourselves on staying at the forefront of technology trends and innovation. When you choose our agency, you gain access to cutting-edge solutions and approaches that can give your product a competitive edge in the market.</p>
        <img class="mx-auto pt-7" src="/public/img/lens.svg" alt="Lens">
      </div>
    </div>

    <div class="blue-box bg-primary rounded-[10px] sticky top-[92px] text-center pt-28 pb-14 mb-14">
      <div class="w-3/4 mx-auto text-white">
        <h4 class="text-4xl font-medium pb-6">
          Timely Delivery <span class="rounded-[100px] bg-white px-5 text-primary uppercase">&&</span> Cost Efficiency
        </h4>
        <p class="leading-7">We are committed to delivering your product on time and within budget. Our efficient project management processes and cost-effective strategies help you maximize the return on your investment while minimizing potential delays.</p>
        <img class="mx-auto pt-7" src="/public/img/sparrow.svg" alt="Sparrow">
      </div>
    </div>
  </section>
</template>

<script setup>
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
