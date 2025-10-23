<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import LogoNav from "@/components/navbar/LogoNav.vue";

// Dynamic data contained entirely inside this component as requested
const footer = reactive({
  sections: [
    {
      title: "Enlaces Rápidos",
      links: [
        { text: "Hospedajes", to: "/hospedajes" },
        { text: "Agencias", to: "/agencias" },
        { text: "Servicios", to: "/servicios" },
        { text: "Ayuda", to: "/ayuda" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Términos y Condiciones", to: "/terminos" },
        { text: "Política de Privacidad", to: "/privacidad" },
        { text: "Cancelaciones", to: "/cancelaciones" },
      ],
    },
    {
      title: "Contacto",
      links: [
        {
          text: "Email: info@hospedajes.com",
          href: "mailto:info@hospedajes.com",
        },
        {
          text: "WhatsApp: +56 9 1234 5678",
          href: "https://wa.me/56912345678",
        },
        { text: "Horario: 24/7", href: "#" },
      ],
    },
  ],
  whatsapp: {
    number: "+56912345678",
    url: "https://wa.me/56912345678",
  },
});

const currentYear = new Date().getFullYear();

function attrsFor(link) {
  if (!link) return { href: "#" };
  if (link.to) return { to: link.to };
  return { href: link.href || "#", target: "_blank", rel: "noreferrer" };
}
</script>

<template>
  <footer class="bg-[#0b1620] text-gray-300">
    <section class="max-w-[1200px] mx-auto py-12">
      <div class="flex flex-wrap mx-4">
        <!-- logo column - matches sizing of other columns for consistent heights -->
        <div class="px-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-5">
          <div class="h-full flex flex-col items-center lg:items-start">
            <LogoNav />
          </div>
        </div>

        <!-- brand removed: sections will fill the footer columns -->
        <div
          v-for="(section, idx) in footer.sections"
          :key="section.title + idx"
          class="px-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-5"
        >
          <div
            class="h-full flex flex-col items-center lg:items-start text-center lg:text-start"
          >
            <h4 class="text-lg font-semibold text-white mb-3">
              {{ section.title }}
            </h4>
            <ul class="text-sm text-gray-400 space-y-2">
              <li v-for="(link, lIdx) in section.links" :key="link.text + lIdx">
                <component
                  :is="link.to ? RouterLink : 'a'"
                  v-bind="attrsFor(link)"
                  class="hover:text-white transition-colors duration-150"
                >
                  {{ link.text }}
                </component>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-6 pb-8">
        <p class="text-center text-sm text-white">
          © {{ currentYear }} Hospedajes Premium. Todos los derechos reservados.
        </p>
      </div>
    </section>

    <!-- floating whatsapp button -->
    <a
      :href="footer.whatsapp.url"
      target="_blank"
      rel="noopener"
      class="fixed right-6 bottom-6 z-50"
    >
      <div
        class="w-14 h-14 bg-[#07c160] rounded-full flex items-center justify-center shadow-lg"
      >
        <!-- chat SVG -->
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .01 4.693.01 10.5c0 1.848.49 3.588 1.42 5.14L0 24l8.74-2.29A11.947 11.947 0 0012 21c6.627 0 12-4.693 12-10.5 0-2.8-1.15-5.4-3.48-7.02z"
            fill="#fff"
          />
          <path
            d="M17.2 14.6c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.03-.52-.03-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.87 1.2 3.07c.14.2 2.08 3.17 5.04 4.44 2.96 1.27 2.96.85 3.5.8.54-.05 1.76-.72 2.01-1.41.25-.68.25-1.26.18-1.38-.07-.12-.27-.2-.57-.35z"
            fill="#07c160"
          />
        </svg>
      </div>
    </a>
  </footer>
</template>

<style scoped>
/* Footer styles are provided via Tailwind classes in the template. */
</style>
