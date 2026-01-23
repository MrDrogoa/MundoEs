<script setup>
// no state yet; you can bind with v-model if needed
import ButtonComponents from "../ButtonComponents.vue";
</script>

<template>
  <div
    class="hero-form mx-auto bg-white/5 backdrop-blur-md p-3 md:p-6 rounded-xl lg:shadow-lg mt-6"
  >
    <!-- Simplified central search (matches mock) -->
    <form class="flex flex-col items-center w-full">
      <div
        class="w-full max-w-3xl flex flex-col md:flex-row items-stretch bg-white rounded-full overflow-hidden shadow-md"
      >
        <!-- Input: fills available space on desktop, full width on mobile -->
        <input
          type="text"
          placeholder="Escribe aqui tu ciudad"
          class="w-full md:flex-1 py-4 px-6 text-gray-700 placeholder-gray-400 text-lg focus:outline-none bg-transparent"
        />

        <!-- Button: full width on mobile, auto on desktop; on desktop keep rounded right edge -->
        <ButtonComponents
          type="submit"
          class="w-full md:w-auto md:px-6 md:py-3 rounded-none md:rounded-r-full hidden md:block"
        >
          Buscar hospedaje
        </ButtonComponents>
      </div>
      <ButtonComponents class="w-50 block md:hidden mt-4">
        Buscar hospedaje
      </ButtonComponents>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
