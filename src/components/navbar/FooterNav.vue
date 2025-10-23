<script setup></script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-inner z-50"
  >
    <div class="max-w-[1200px] mx-auto px-5 md:px-4 lg:px-3 xl:px-0">
      <ul class="flex gap-3 justify-between py-3">
        <!-- Lista de navegación -->
        <li>
          <router-link to="/" class="flex flex-col items-center">
            <font-awesome-icon icon="search" class="text-[#919191]" />
            <span class="text-sm sm:text-base font-medium text-[#3a3a3a]"
              >Explorar</span
            >
          </router-link>
        </li>
        <li>
          <router-link to="/favorite" class="flex flex-col items-center">
            <font-awesome-icon icon="star" class="text-[#ffd900]" />
            <span class="text-sm sm:text-base font-medium text-[#3a3a3a]"
              >Favoritos</span
            >
          </router-link>
        </li>
        <li>
          <router-link to="/profile" class="flex flex-col items-center">
            <font-awesome-icon
              icon="exclamation-triangle"
              class="text-[#ff0000]"
            />
            <span class="text-sm sm:text-base font-medium text-[#3a3a3a]"
              >Seguridad</span
            >
          </router-link>
        </li>
        <li>
          <router-link to="/seguridad" class="flex flex-col items-center">
            <font-awesome-icon icon="user" class="text-[#0066ff]" />
            <span class="text-sm sm:text-base font-medium text-[#3a3a3a]"
              >Perfil</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
