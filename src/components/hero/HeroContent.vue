<script setup>
import HeroForm from "@/components/hero/HeroForm.vue";
</script>

<template>
  <div class="flex items-center justify-center py-5">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-bold md:text-white text-[#3a3a3a]"
      >
        Descubre Hospedajes Únicos
      </h1>
      <p class="mt-3 text-sm md:text-base md:text-white text-[#505050]">
        Encuentra los mejores hospedajes cerca de ti
      </p>
      <!-- formulario de búsqueda -->
      <HeroForm />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
