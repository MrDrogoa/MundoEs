import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TodoView from "@/views/TodoView.vue";

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
    component: TodoView,
    meta: {
      title: "Todo - MundoEscort",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
