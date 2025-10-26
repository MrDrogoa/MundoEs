<script setup>
import Protocolo from "./main/Protocolo.vue";
import ContactEmergency from "./main/ContactEmergency.vue";
</script>

<template>
  <section class="max-w-[1200px] mx-auto px-4 lg:px-2 xl:px-0">
    <h2
      class="text-center lg:text-start text-[#0B1620] text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4"
    >
      Protocolos de Emergencia
    </h2>
    <p class="text-center lg:text-start text-sm lg:text-base text-gray-500">
      Estos protocolos están diseñados para garantizar la seguridad y el
      bienestar de nuestros huéspedes en situaciones de emergencia.
    </p>
    <article
      class="flex w-full justify-center items-center lg:items-start gap-9 lg:flex-row flex-col-reverse my-6 px-4 lg:px-2 xl:px-0"
    >
      <div class="lg:w-2/3 xl:w-1/2">
        <Protocolo />
      </div>
      <div class="lg:w-2/3 xl:w-1/2">
        <ContactEmergency />
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped></style>
