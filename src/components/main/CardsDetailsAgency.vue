<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import agencias from "@/data/agencias";
import ButtonComponents from "@/components/ButtonComponents.vue";

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

const item = agencias.find((h) => h.id === id) || agencias[0];

// compute contact href: handle full URLs (WhatsApp links), tel:, or email addresses
const contactHref = computed(() => {
  const val = item && item.contactEmail ? item.contactEmail : "";
  if (!val) return "#";
  // if it already looks like a http(s) link, wa.me, or tel: use as-is
  if (
    /^https?:\/\//i.test(val) ||
    /^wa\.me/i.test(val) ||
    val.startsWith("tel:")
  ) {
    return val;
  }
  // if it's just the numeric wa.me without protocol (rare), prefix it
  if (/^\+?\d{7,}$/.test(val) && val.startsWith("+")) {
    return `https://wa.me/${val.replace(/\+/g, "")}`;
  }
  // if it contains an @ use mailto:
  if (val.includes("@")) return `mailto:${val}`;
  // fallback to value as-is
  return val;
});

// carousel state
const currentIndex = ref(0);
const currentImg = computed(() => item.imgs[currentIndex.value]);

function next() {
  currentIndex.value = (currentIndex.value + 1) % item.imgs.length;
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + item.imgs.length) % item.imgs.length;
}

function goTo(i) {
  currentIndex.value = i;
}

function reserve() {
  // simple reservation flow: navigate to agencias list or to a reservation route
  router.push({ path: "/agencias" });
}

function goBack() {
  // navigate back to agencias listing
  router.push({ path: "/agencias" });
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-6">
    <div class="bg-white rounded-xl shadow p-6">
      <!-- Back button (parent is group so children can react with group-hover) -->
      <div
        @click="goBack"
        class="mb-4 flex items-center gap-2 text-yellow-600 font-medium hover:gap-3 transition-all cursor-pointer w-max group"
      >
        <font-awesome-icon icon="arrow-left" class="text-lg cursor-pointer" />

        <button type="button" class="cursor-pointer">Volver</button>
      </div>
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Left: Carousel -->
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
              <img
                :src="currentImg"
                alt="image"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Prev/Next -->
            <font-awesome-icon
              icon="arrow-alt-circle-left"
              @click="prev"
              class="absolute left-2 top-1/2 text-gray-600 hover:text-gray-800 transition-all -translate-y-1/2 bg-white/80 rounded-full p-2 text-sm lg:text-lg cursor-pointer"
            >
            </font-awesome-icon>
            <font-awesome-icon
              icon="arrow-alt-circle-right"
              @click="next"
              class="absolute right-2 top-1/2 text-gray-600 hover:text-gray-800 transition-all -translate-y-1/2 bg-white/80 rounded-full p-2 text-sm lg:text-lg cursor-pointer"
            >
            </font-awesome-icon>
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-2 mt-4">
            <button
              v-for="(img, i) in item.imgs"
              :key="i"
              @click="goTo(i)"
              :class="[
                'w-20 h-14 rounded overflow-hidden',
                currentIndex === i ? 'ring-2 ring-yellow-400' : '',
              ]"
            >
              <img :src="img" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Right: Details -->
        <div class="lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-semibold text-[#0B1620]">
              {{ item.title }}
            </h2>
            <p class="text-sm text-gray-500 mb-4">{{ item.place }}</p>
            <p class="text-gray-700 mb-4">{{ item.longDesc }}</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              :href="contactHref"
              class="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonComponents class="w-full">Contactar</ButtonComponents>
            </a>

            <a :href="`tel:${item.phone}`" class="flex-1">
              <ButtonComponents class="w-full">Llamar</ButtonComponents>
            </a>

            <button @click="reserve" class="flex-1">
              <ButtonComponents class="w-full">Reservar</ButtonComponents>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
