<script setup></script>

<template>
  <ul
    class="flex gap-3 justify-center bg-white/50 backdrop-blur-md lg:bg-transparent lg:shadow-none shadow-lg p-2 rounded-md"
  >
    <!-- Lista de navegación -->
    <li>
      <router-link to="/" class="flex flex-col items-center">
        <font-awesome-icon icon="home" class="text-[#ff003c]" />
        <span class="text-sm md:text-base font-medium text-[#3a3a3a]"
          >Inicio</span
        >
      </router-link>
    </li>
    <li>
      <router-link to="/todo" class="flex flex-col items-center">
        <font-awesome-icon icon="globe" class="text-[#45A049]" />
        <span class="text-sm md:text-base font-medium text-[#3a3a3a]"
          >Todo</span
        >
      </router-link>
    </li>
    <li>
      <router-link to="/hospedajes" class="flex flex-col items-center">
        <font-awesome-icon icon="hotel" class="text-[#DE5855]" />
        <span class="text-sm md:text-base font-medium text-[#3a3a3a]"
          >Hospedajes</span
        >
      </router-link>
    </li>
    <li>
      <router-link to="/agencias" class="flex flex-col items-center">
        <font-awesome-icon icon="money-bill-wave" class="text-[#46B2A8]" />
        <span class="text-sm md:text-base font-medium text-[#3a3a3a]"
          >Agencias</span
        >
      </router-link>
    </li>
    <li>
      <router-link to="/servicios" class="flex flex-col items-center">
        <font-awesome-icon icon="bell" class="text-[#0B0699]" />
        <span class="text-sm md:text-base font-medium text-[#3a3a3a]"
          >Servicios</span
        >
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
