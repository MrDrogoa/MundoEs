<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import FooterNav from "@/components/navbar/FooterNav.vue";
</script>

<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <!-- Barra de navegación del pie de página -->
    <FooterNav />
    <Footer />
  </div>
</template>

<style scoped></style>
