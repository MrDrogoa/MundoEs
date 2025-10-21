<script setup>
import Logo from "@/assets/logo.webp";
</script>

<template>
  <div>
    <router-link to="/">
      <img :src="Logo" alt="Logo" class="w-20 rounded-full" />
    </router-link>
  </div>
</template>

<style scoped></style>
