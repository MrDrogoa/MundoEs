<script setup>
import { reactive } from "vue";

// Dynamic steps data contained inside the component (you can later move to shared data)
const steps = reactive([
  {
    number: 1,
    title: "Mantén la calma",
    detail: "e identifica el tipo de emergencia",
  },
  {
    number: 2,
    title: "Llama al número correspondiente",
    detail: "(133, 132, 131 o 134)",
  },
  {
    number: 3,
    title: "Proporciona tu ubicación exacta",
    detail: "y describe la emergencia",
  },
  {
    number: 4,
    title: "Sigue las instrucciones",
    detail: "del operador hasta que llegue ayuda",
  },
]);
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">
      Protocolo de Emergencia
    </h3>

    <div class="flex flex-col gap-4">
      <div
        v-for="step in steps"
        :key="step.number"
        class="flex items-center gap-4"
      >
        <div class="flex-shrink-0">
          <div
            class="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 font-semibold flex items-center justify-center shadow"
          >
            {{ step.number }}
          </div>
        </div>

        <div class="flex-1">
          <p class="text-sm text-gray-700">
            <span class="font-semibold text-gray-800">{{ step.title }}</span>
            <span class="ml-2 text-gray-600">{{ step.detail }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
