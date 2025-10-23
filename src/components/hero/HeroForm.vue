<script setup>
// no state yet; you can bind with v-model if needed
</script>

<template>
  <div
    class="hero-form mx-auto bg-white/5 backdrop-blur-md p-3 md:p-6 rounded-xl shadow-lg mt-6"
  >
    <!-- Tabs -->
    <div class="flex gap-3 mb-4">
      <button class="px-4 py-2 rounded-md bg-[#c29224] text-white font-medium">
        Por Destino
      </button>
      <button
        class="px-4 py-2 rounded-md bg-white/20 md:text-white font-medium"
      >
        Por Fechas
      </button>
      <button
        class="px-4 py-2 rounded-md bg-white/20 md:text-white font-medium"
      >
        Por Huéspedes
      </button>
    </div>

    <form class="flex flex-col md:flex-row md:flex-wrap gap-3 items-center">
      <!-- Destino -->
      <div class="w-full md:w-1/3">
        <label
          class="block text-xs text- md:text-white mb-2 font-medium text-start"
          >Destino</label
        >
        <input
          type="text"
          placeholder="¿A dónde viajas?"
          class="w-full py-2 md:py-3 px-2 md:px-3 rounded-md border md:border-white/10 text-[#505050] md:text-white border-gray-300 bg-white/5 md:placeholder:text-white/60 focus:outline-none text-sm md:text-base"
        />
      </div>

      <!-- Entrada -->
      <div class="w-full md:w-1/6">
        <label class="block text-xs md:text-white mb-2 font-medium text-start"
          >Entrada</label
        >
        <input
          type="text"
          placeholder="dd-mm-aaaa"
          class="w-full py-2 md:py-3 px-2 md:px-3 rounded-md border md:border-white/10 text-[#505050] md:text-white border-gray-300 bg-white/5 md:placeholder:text-white/60 focus:outline-none text-sm md:text-base"
        />
      </div>

      <!-- Salida -->
      <div class="w-full md:w-1/6">
        <label class="block text-xs md:text-white mb-2 font-medium text-start"
          >Salida</label
        >
        <input
          type="text"
          placeholder="dd-mm-aaaa"
          class="w-full py-2 md:py-3 px-2 md:px-3 rounded-md border md:border-white/10 text-[#505050] md:text-white border-gray-300 bg-white/5 md:placeholder:text-white/60 focus:outline-none text-sm md:text-base"
        />
      </div>

      <!-- Botón Buscar -->
      <div class="flex md:self-end items-center">
        <button
          type="submit"
          class="cursor-pointer w-full md:w-40 bg-gradient-to-r from-[#c29224] via-[#d4af37] to-[#f5d36b] text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:from-[#eac95a] hover:via-[#cfa84a] hover:to-[#b8821f] transition-colors duration-300 font-medium text-sm md:text-base"
        >
          Buscar
        </button>
      </div>

      <!-- Secondary controls -->
      <div class="mt-2 flex gap-3 flex-wrap">
        <button
          type="button"
          class="px-2 py-1 rounded-md bg-white/10 md:text-white text-sm flex items-center gap-2 font-medium"
        >
          <font-awesome-icon icon="user" />
          <span>Huéspedes</span>
        </button>
        <button
          type="button"
          class="px-2 py-1 rounded-md bg-white/10 md:text-white text-sm flex items-center gap-2 font-medium"
        >
          <font-awesome-icon icon="filter" />
          <span>Filtros</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
