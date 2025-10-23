<template>
  <section class="py-12 bg-gradient-to-b from-red-50 to-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-6">
        <div
          class="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-3"
        >
          <font-awesome-icon icon="exclamation-triangle" class="text-red-500" />
        </div>
        <h2 class="text-lg font-semibold text-red-600">
          Números de Emergencia Chile
        </h2>
        <p class="text-sm text-gray-500 mt-2">
          Números de emergencia disponibles 24/7. En caso de emergencia, no
          dudes en llamar.
        </p>
      </div>

      <div class="flex flex-wrap -mx-3">
        <div
          v-for="(item, idx) in items"
          :key="item.title + idx"
          class="px-3 w-full md:w-1/2 mb-6"
        >
          <div
            :class="[
              'bg-white rounded-lg shadow p-6 h-full flex flex-col justify-between',
              item.highlight ? 'border-2 border-yellow-500' : '',
            ]"
          >
            <div class="flex items-start gap-4">
              <div
                :class="[
                  'w-12 h-12 rounded-lg flex items-center justify-center',
                  item.iconBg,
                ]"
              >
                <font-awesome-icon :icon="item.icon" :class="item.iconColor" />
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-semibold text-gray-800">
                  {{ item.title }}
                </h3>
                <div
                  class="flex items-center gap-2 text-yellow-600 font-semibold mt-2"
                >
                  <font-awesome-icon icon="phone" class="text-yellow-600" />
                  <span class="text-lg">{{ item.number }}</span>
                </div>
                <p class="text-sm text-gray-500 mt-3">{{ item.desc }}</p>
              </div>
            </div>

            <a
              :href="`tel:${item.numberRaw}`"
              class="mt-6 inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded text-center"
            >
              <span class="flex items-center justify-center gap-2"
                ><font-awesome-icon icon="phone" /> Llamar
                {{ item.number }}</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: "Carabineros de Chile",
    desc: "Emergencias policiales, delitos en curso, ayuda inmediata de Carabineros.",
    number: "133",
    numberRaw: "133",
    icon: "shield-alt",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    highlight: false,
  },
  {
    title: "Bomberos de Chile",
    desc: "Incendios, rescates y emergencias relacionadas con fuego o materiales peligrosos.",
    number: "132",
    numberRaw: "132",
    icon: "fire",
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    highlight: true,
  },
  {
    title: "SAMU / Ambulancia",
    desc: "Atención prehospitalaria y traslado de urgencias médicas.",
    number: "131",
    numberRaw: "131",
    icon: "ambulance",
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    highlight: false,
  },
  {
    title: "PDI - Policía de Investigaciones",
    desc: "Investigaciones criminales y delitos de mayor complejidad.",
    number: "134",
    numberRaw: "134",
    icon: "user",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    highlight: false,
  },
];
</script>

<style scoped>
/* small visual tweaks kept to Tailwind utilities; scoped css reserved for any tiny overrides */
</style>
