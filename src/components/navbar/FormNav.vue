<script setup>
import ButtonComponents from "../ButtonComponents.vue";
</script>

<template>
  <div class="flex items-center gap-3">
    <!-- Lista de navegación de formulario -->
    <!-- botón de inicio de sesión -->
    <ButtonComponents> Iniciar Sesión </ButtonComponents>
    <!-- Botón de registro -->
    <button
      class="cursor-pointer text-[#3a3a3a] hover:text-[#838383] ease-in-out duration-300 font-medium"
    >
      Registrarse
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
