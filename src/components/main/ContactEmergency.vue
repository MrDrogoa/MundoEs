<template>
  <div class="bg-yellow-50 border border-yellow-300 rounded-xl p-6 shadow-sm">
    <h3 class="text-xl font-semibold text-gray-800 mb-3">
      {{ contact.title }}
    </h3>
    <p class="text-gray-600 mb-6">{{ contact.message }}</p>

    <div class="flex flex-col md:flex-row gap-4">
      <a
        :href="contact.whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1"
      >
        <div
          class="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-4 flex items-center justify-center gap-3 shadow-md"
        >
          <font-awesome-icon icon="phone" class="text-white text-lg" />
          <span class="text-lg font-medium">{{ contact.buttonText }}</span>
        </div>
      </a>
    </div>

    <p class="text-center text-sm text-gray-500 mt-4">{{ contact.note }}</p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Dynamic content kept inside component; can be moved to shared data if needed
const contact = reactive({
  title: "Contacto de Emergencia del Hospedaje",
  message:
    "Si tienes una emergencia relacionada con tu hospedaje o necesitas asistencia inmediata, contáctanos por WhatsApp.",
  whatsappNumber: "+56912345678",
  // prefer wa.me link for WhatsApp
  get whatsappUrl() {
    // strip non-digits
    const digits = this.whatsappNumber.replace(/\D/g, "");
    return `https://wa.me/${digits}`;
  },
  buttonText: "WhatsApp de Emergencia",
  note: "Disponible 24/7 para asistencia a nuestros huéspedes",
});
</script>

<style scoped></style>
