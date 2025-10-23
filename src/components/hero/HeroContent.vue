<script setup>
import HeroForm from "@/components/hero/HeroForm.vue";
</script>

<template>
  <div class="flex items-center justify-center py-5">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:text-white text-[#0B1620]"
      >
        Descubre el
        <span class="md:text-[#ffd900] text-[#0B1620] md:animate-pulse"
          >hospedaje</span
        >
        ideal
      </h1>
      <p
        class="mt-3 text-sm sm:text-base md:text-lg md:text-white text-gray-500 font-medium"
      >
        Un mundo hecho para Escorts
      </p>
      <!-- formulario de búsqueda -->
      <HeroForm />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
