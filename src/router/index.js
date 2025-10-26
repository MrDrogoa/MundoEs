import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AllView from "@/views/AllView.vue";
import EmergencyView from "@/views/EmergencyView.vue";

// Definición de rutas
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      title: "Inicio - MundoEscort",
    },
  },
  {
    path: "/todo",
    name: "Todo",
    component: AllView,
    meta: {
      title: "Todo - MundoEscort",
    },
  },
  {
    path: "/emergency",
    name: "Emergency",
    component: EmergencyView,
    meta: {
      title: "Emergencia - MundoEscort",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
