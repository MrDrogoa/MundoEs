<script setup>
import ListNav from "@/components/navbar/ListNav.vue";
import FormNav from "@/components/navbar/FormNav.vue";
import LogoNav from "@/components/navbar/LogoNav.vue";
</script>
<template>
  <!-- Barra de navegación -->
  <section class="max-w-[1200px] mx-auto">
    <nav
      class="flex justify-center items-center lg:justify-between py-4 px-5 lg:px-0"
    >
      <!-- logo Principal -->
      <div class="hidden lg:flex">
        <LogoNav />
      </div>
      <!-- lista de navegación (oculta en md y menores, visible en lg) -->

      <ListNav />

      <!-- formulario de navegación (oculto en md y menores, visible en lg) -->
      <div class="hidden lg:flex">
        <FormNav />
      </div>
    </nav>
  </section>
</template>

<style scoped></style>
