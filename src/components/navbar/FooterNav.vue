<script setup></script>

<template>
  <nav class="max-w-[1200px] mx-auto">
    <ul class="flex gap-3 justify-between">
      <!-- Lista de navegación -->
      <li>
        <router-link to="/" class="flex flex-col items-center">
          <font-awesome-icon icon="search" class="text-[#919191]" />
          <span>Explorar</span>
        </router-link>
      </li>
      <li>
        <router-link to="/favorite" class="flex flex-col items-center">
          <font-awesome-icon icon="star" class="text-[#ffd900 ]" />
          <span>Favoritos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile" class="flex flex-col items-center">
          <font-awesome-icon
            icon="exclamation-triangle"
            class="text-[#ff0000]"
          />
          <span>Seguridad</span>
        </router-link>
      </li>
      <li>
        <router-link to="/seguridad" class="flex flex-col items-center">
          <font-awesome-icon icon="user" class="text-[#0066ff]" />
          <span>Perfil</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
