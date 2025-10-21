<script setup>
import Heroimg from "@/components/hero/Heroimg.vue";
import HeroContent from "@/components/hero/HeroContent.vue";
</script>

<template>
  <section class="relative">
    <Heroimg />
    <div class="static md:absolute md:inset-0 flex items-center justify-center">
      <HeroContent />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
