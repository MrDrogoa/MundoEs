<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { reactive } from "vue";

// Dynamic cards data
const cards = reactive([
  {
    title: "Hospedajes",
    desc: "Explora y reserva los mejores hospedajes de Chile",
    to: "/hospedajes",
    icon: "hotel",
    iconBg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    title: "Agencias de Turismo",
    desc: "Conecta con agencias verificadas para experiencias únicas",
    to: "/agencias",
    icon: "money-bill-wave",
    iconBg: "bg-purple-100",
    color: "text-purple-500",
  },
  {
    title: "Servicios Complementarios",
    desc: "Transporte, tours, gastronomía y más",
    to: "/servicios",
    icon: "bell",
    iconBg: "bg-green-100",
    color: "text-green-500",
  },
  {
    title: "Mis Favoritos",
    desc: "Tus hospedajes guardados listos para reservar",
    to: "/favorite",
    icon: "star",
    iconBg: "bg-yellow-100",
    color: "text-yellow-500",
  },
  {
    title: "Mi Perfil",
    desc: "Gestiona tu cuenta y configuración",
    to: "/profile",
    icon: "user",
    iconBg: "bg-slate-100",
    color: "text-slate-500",
  },
  {
    title: "Números de Emergencia",
    desc: "Contactos de emergencia disponibles 24/7",
    to: "/emergency",
    icon: "exclamation-triangle",
    iconBg: "bg-red-100",
    color: "text-red-500",
  },
]);
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-4 lg:px-2 xl:px-0">
    <h2
      class="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold py-3 md:py-4 text-yellow-600 text-center"
    >
      Todo en un solo lugar
    </h2>
    <p class="text-sm lg:text-base text-gray-500 mb-4 lg:mb-7 text-center">
      Tu plataforma completa para hospedajes, turismo y servicios en Chile.
    </p>
    <div class="flex flex-wrap">
      <div
        v-for="(card, idx) in cards"
        :key="card.title + idx"
        class="px-3 w-full md:w-1/2 lg:w-1/3 mb-6"
      >
        <router-link :to="card.to">
          <div
            class="h-full bg-white rounded-xl shadow-sm p-6 relative flex flex-col border border-transparent hover:border-[#D4AF37] transition-colors duration-200 group"
          >
            <div class="flex items-start gap-4">
              <div
                :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300',
                  card.iconBg,
                ]"
              >
                <font-awesome-icon
                  :icon="card.icon"
                  :class="card.color"
                  class="text-xl"
                />
              </div>

              <div class="flex-1">
                <h4 class="text-lg font-medium text-gray-800">
                  {{ card.title }}
                </h4>
                <p class="text-sm text-gray-500 mt-2">{{ card.desc }}</p>
              </div>
            </div>

            <div
              class="mt-6 flex-1 flex items-end group-hover:gap-3 transition-all text-yellow-600 font-medium gap-2"
            >
              <button class="cursor-pointer">Explorar</button>
              <font-awesome-icon icon="arrow-right" class="text-lg" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
