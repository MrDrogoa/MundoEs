<script setup>
import { ref } from "vue";
// Tarjetas de acción que destacan las características y beneficios de usar el servicio de reserva de alojamientos
const items = ref([
  {
    id: 1,
    title: "Reserva por WhatsApp",
    desc: "Confirma tu reserva a través de WhatsApp",
    icon: "comments",
  },
  {
    id: 2,
    title: "Pago Seguro",
    desc: "Todas las transacciones están protegidas",
    icon: "shield-alt",
  },
  {
    id: 3,
    title: "Disponibilidad 24/7",
    desc: "Consulta y reserva en cualquier momento",
    icon: "clock",
  },
  {
    id: 4,
    title: "Hospedajes Verificados",
    desc: "Todos los alojamientos están verificados",
    icon: "star",
  },
]);
</script>

<template>
  <section class="py-12 max-w-[1200px] mx-auto">
    <!-- Titulo de la sección -->
    <h3
      class="text-center text-[#0B1620] text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold"
    >
      ¿Por qué elegirnos?
    </h3>
    <p
      class="text-sm lg:text-base text-center text-gray-500 py-3 lg:py-7 w-72 lg:w-96 mx-auto"
    >
      Ofrecemos la mejor experiencia de reserva con tecnología moderna y
      atención personalizada
    </p>

    <div class="px-4">
      <div
        class="flex justify-center flex-wrap xl:flex-nowrap -mx-3 gap-4 items-stretch"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="w-10/12 md:w-1/2 lg:w-1/3 xl:w-1/4 px-3"
        >
          <article
            class="flex-1 w-full bg-white rounded-xl shadow-lg p-5 border border-transparent hover:border-[#D4AF37] transition-colors duration-200 flex flex-col gap-4"
          >
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 rounded-lg bg-[#ecfdf5] flex items-center justify-center"
              >
                <font-awesome-icon :icon="item.icon" class="text-[#10b981]" />
              </div>
            </div>

            <div class="flex-1 text-left">
              <h4 class="font-medium mb-1">{{ item.title }}</h4>
              <p class="text-sm text-gray-500">{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
