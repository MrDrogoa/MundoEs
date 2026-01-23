<script setup>
import ButtonComponents from "@/components/ButtonComponents.vue";
import hospedajes from "@/data/hospedajes";
</script>

<template>
  <section class="cards px-4 py-6">
    <div class="max-w-[1200px] mx-auto">
      <h3
        class="text-[#0B1620] text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 py-3 md:py-5 text-center lg:text-start"
      >
        Hospedajes
      </h3>

      <div class="flex flex-wrap -mx-3">
        <article
          v-for="item in hospedajes"
          :key="item.id"
          class="px-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-6"
        >
          <div
            class="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
          >
            <div class="relative h-40 md:h-44 lg:h-40">
              <img
                :src="item.imgs && item.imgs.length ? item.imgs[0] : ''"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
              <span
                class="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md"
                >{{ item.tag }}</span
              >
            </div>

            <div class="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 class="text-md font-medium mb-1">{{ item.title }}</h4>
                <p class="text-sm text-gray-500 mb-4">{{ item.place }}</p>
              </div>

              <RouterLink :to="`/hospedajes/${item.id}`" class="mt-2">
                <ButtonComponents class="w-full">Consultar</ButtonComponents>
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
