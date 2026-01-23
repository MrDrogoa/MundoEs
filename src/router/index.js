import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AllView from "@/views/AllView.vue";
import EmergencyView from "@/views/EmergencyView.vue";
import HospedajesView from "@/views/HospedajesView.vue";
import CardsDetailsHospedaje from "@/components/main/CardsDetailsHospedaje.vue";
import AgencyView from "@/views/AgencyView.vue";
import CardsDetailsAgency from "@/components/main/CardsDetailsAgency.vue";
import ServiceView from "@/views/ServiceView.vue";
import CardsDetailsService from "@/components/main/CardsDetailsService.vue";

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
  {
    path: "/hospedajes",
    name: "Hospedajes",
    component: HospedajesView,
    meta: {
      title: "Hospedajes - MundoEscort",
    },
  },
  {
    path: "/hospedajes/:id",
    name: "HospedajeDetails",
    component: CardsDetailsHospedaje,
    meta: {
      title: "Hospedaje - MundoEscort",
    },
  },
  {
    path: "/agencias",
    name: "Agencia",
    component: AgencyView,
    meta: {
      title: "Agencias - MundoEscort",
    },
  },
  {
    path: "/agencias/:id",
    name: "AgencyDetails",
    component: CardsDetailsAgency,
    meta: {
      title: "Agencia - MundoEscort",
    },
  },
  {
    path: "/servicios",
    name: "Servicio",
    component: ServiceView,
    meta: {
      title: "Servicios - MundoEscort",
    },
  },
  {
    path: "/servicios/:id",
    name: "ServiceDetails",
    component: CardsDetailsService,
    meta: {
      title: "Servicio - MundoEscort",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
