<script setup>
const navItems = [
  { text: "Inicio", to: "/", icon: "home", color: "text-[#ff003c]" },
  { text: "Todo", to: "/todo", icon: "globe", color: "text-[#45A049]" },
  {
    text: "Hospedajes",
    to: "/hospedajes",
    icon: "hotel",
    color: "text-[#DE5855]",
  },
  {
    text: "Agencias",
    to: "/agencias",
    icon: "money-bill-wave",
    color: "text-[#46B2A8]",
  },
  {
    text: "Servicios",
    to: "/servicios",
    icon: "bell",
    color: "text-[#0B0699]",
  },
];
</script>

<template>
  <ul
    class="flex gap-3 justify-center bg-white/50 backdrop-blur-md lg:bg-transparent lg:shadow-none shadow-lg p-2 rounded-md"
  >
    <!-- Lista de navegación generada dinámicamente -->
    <li v-for="(item, idx) in navItems" :key="item.text + idx">
      <router-link :to="item.to" class="flex flex-col items-center">
        <font-awesome-icon :icon="item.icon" :class="item.color" />
        <span class="text-sm md:text-base font-medium text-[#3a3a3a]">
          {{ item.text }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
