<template>
  <section class="bg-sky py-10">
    <div class="container mx-auto">
      <div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-5 text-primary">
        <p class="text-lg">We are a collaborative team. We do offer solid core values and a intention meant to provide solutions, a
          dream come actual growth for the business.</p>
        <div>
          <p class="text-base">Loved by clients around the world</p>
          <hr>
          <div class="flex gap-10">
            <img src="/public/img/clients/Opendoor.svg" alt="Client">
            <img src="/public/img/clients/AWS.svg" alt="Client">
            <img src="/public/img/clients/UBER_3.svg" alt="Client">
            <img src="/public/img/clients/Personio.svg" alt="Client">
            <img src="/public/img/clients/soft_bank.svg" alt="Client">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials"
}
</script>

<style scoped>
hr{
  margin: 1.5rem 0;
  border-top: 1px solid #BDEDFC;
}
</style>
