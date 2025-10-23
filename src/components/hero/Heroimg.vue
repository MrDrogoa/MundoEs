<script setup>
import Heroimg from "@/assets/herohotel.webp";
</script>

<template>
  <section class="w-full px-5 md:px-0">
    <!-- responsive hero container: h-64 on small, h-96 on md, h-[520px] on lg -->
    <div
      class="w-full h-64 md:h-96 lg:h-[520px] overflow-hidden relative shadow-none md:shadow-2xl rounded-2xl md:rounded-none"
    >
      <img
        :src="Heroimg"
        alt="Hero Image"
        class="w-full h-full object-cover object-center"
      />
      />

      <!-- overlay sombreado -->
      <div
        class="hidden md:block absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/60 pointer-events-none rounded-2xl"
      ></div>
    </div>
  </section>
</template>

<style scoped></style>
