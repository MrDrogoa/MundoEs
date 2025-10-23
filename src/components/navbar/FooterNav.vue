<script setup>
const navItems = [
  { text: "Explorar", to: "/", icon: "search", color: "text-[#919191]" },
  { text: "Favoritos", to: "/favorite", icon: "star", color: "text-[#ffd900]" },
  {
    text: "Seguridad",
    to: "/emergency",
    icon: "exclamation-triangle",
    color: "text-[#ff0000]",
  },
  { text: "Perfil", to: "/profile", icon: "user", color: "text-[#0066ff]" },
];
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-inner z-50"
  >
    <div class="max-w-[1200px] mx-auto px-5 md:px-4 lg:px-3 xl:px-0">
      <ul class="flex gap-3 justify-between py-3">
        <!-- Lista de navegación generada dinámicamente -->
        <li v-for="(item, idx) in navItems" :key="item.text + idx">
          <router-link :to="item.to" class="flex flex-col items-center">
            <font-awesome-icon :icon="item.icon" :class="item.color" />
            <span class="text-sm sm:text-base font-medium text-[#3a3a3a]">
              {{ item.text }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
