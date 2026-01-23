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
                  class="hover:text-[#D4AF37] transition-colors duration-150"
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
        class="w-14 h-14 bg-[#07c160] rounded-full flex items-center justify-center"
      >
        <font-awesome-icon icon="phone" />
      </div>
    </a>
  </footer>
</template>

<style scoped>
/* Footer styles are provided via Tailwind classes in the template. */
</style>
