<script setup>
// no state yet; you can bind with v-model if needed
</script>

<template>
  <div
    class="hero-form max-w-[92%] md:max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg mt-6"
  >
    <!-- Tabs -->
    <div class="flex gap-3 mb-4">
      <button class="px-4 py-2 rounded-md bg-[#c29224] text-white font-medium">
        Por Destino
      </button>
      <button class="px-4 py-2 rounded-md bg-white/20">Por Fechas</button>
      <button class="px-4 py-2 rounded-md bg-white/20">Por Huéspedes</button>
    </div>

    <form class="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
      <!-- Destino -->
      <div class="col-span-2">
        <label class="block text-xs text-white/80 mb-1">Destino</label>
        <input
          type="text"
          placeholder="¿A dónde viajas?"
          class="w-full py-2 md:py-3 px-2 md:px-3 rounded-md border border-white/10 bg-white/5 placeholder:text-white/60 text-white focus:outline-none text-sm md:text-base"
        />
      </div>

      <!-- Entrada -->
      <div class="col-span-1">
        <label class="block text-xs text-white/80 mb-1">Entrada</label>
        <input
          type="text"
          placeholder="dd-mm-aaaa"
          class="w-full py-2 md:py-3 px-2 md:px-3 rounded-md border border-white/10 bg-white/5 placeholder:text-white/60 text-white focus:outline-none text-sm md:text-base"
        />
      </div>

      <!-- Salida -->
      <div class="col-span-1">
        <label class="block text-xs text-white/80 mb-1">Salida</label>
        <input
          type="text"
          placeholder="dd-mm-aaaa"
          class="w-full py-2 md:py-3 px-2 md:px-3 rounded-md border border-white/10 bg-white/5 placeholder:text-white/60 text-white focus:outline-none text-sm md:text-base"
        />
      </div>

      <!-- Botón Buscar -->
      <div class="col-span-2 flex items-end">
        <button
          type="submit"
          class="ml-auto cursor-pointer bg-gradient-to-r from-[#c29224] via-[#d4af37] to-[#f5d36b] text-white py-2 md:py-3 px-4 md:px-6 rounded-md hover:from-[#eac95a] hover:via-[#cfa84a] hover:to-[#b8821f] transition-colors duration-300 font-medium text-sm md:text-base"
        >
          Buscar
        </button>
      </div>

      <!-- Secondary controls -->
      <div class="col-span-6 mt-2 flex gap-3">
        <button
          type="button"
          class="px-2 py-1 rounded-md bg-white/10 text-sm flex items-center gap-2"
        >
          <font-awesome-icon icon="user" />
          <span>Huéspedes</span>
        </button>
        <button
          type="button"
          class="px-2 py-1 rounded-md bg-white/10 text-sm flex items-center gap-2"
        >
          <font-awesome-icon icon="filter" />
          <span>Filtros</span>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
