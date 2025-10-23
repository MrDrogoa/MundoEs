<script setup>
import sampleImg from "@/assets/herohotel.webp";

const cards = [
  {
    id: 1,
    title: "Apart Hotel RapaNui",
    place: "Ovalle, Coquimbo",
    img: sampleImg,
    tag: "Premium",
  },
  {
    id: 2,
    title: "Tu Hogar Lejos de Casa 3",
    place: "Chillán, Ñuble",
    img: sampleImg,
    tag: "Premium",
  },
  {
    id: 3,
    title: "Departamento PCM 3",
    place: "Rancagua, Libertador...",
    img: sampleImg,
    tag: "Premium",
  },
  //   {
  //     id: 4,
  //     title: "Tu Hogar Lejos de Casa 2",
  //     place: "Chillán, Ñuble",
  //     img: sampleImg,
  //     tag: "Top",
  //   },
];
</script>

<template>
  <section class="cards px-4 py-6">
    <div class="max-w-[1200px] mx-auto">
      <h3
        class="text-[#0B1620] text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 py-3 md:py-5 text-center lg:text-start"
      >
        🏆 Hospedajes Premium
      </h3>

      <div class="flex justify-center items-center flex-wrap -mx-3">
        <article
          v-for="card in cards"
          :key="card.id"
          class="px-3 w-full md:w-1/2 lg:w-1/3 mb-6"
        >
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
          >
            <div class="relative h-44 md:h-48 lg:h-44">
              <img
                :src="card.img"
                alt="card image"
                class="w-full h-full object-cover"
              />
              <span
                class="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md"
                >{{ card.tag }}</span
              >
            </div>

            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 class="text-md font-medium mb-1">{{ card.title }}</h4>
                <p class="text-sm text-gray-500 mb-4">{{ card.place }}</p>
              </div>

              <div class="mt-2">
                <button
                  class="w-full cursor-pointer bg-gradient-to-r from-[#c29224] via-[#d4af37] to-[#f5d36b] text-white py-2 px-4 rounded-md hover:from-[#eac95a] hover:via-[#cfa84a] hover:to-[#b8821f] transition-colors duration-300 font-medium text-sm md:text-base"
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
