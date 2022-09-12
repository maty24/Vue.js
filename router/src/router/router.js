import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../modules/pokemon/pages/ListPage.vue"),
  },
  {
    path: "/about",
    component: () => import("../modules/pokemon/pages/AboutPage.vue"), //para la ruta perezosa
  },
  {
    path: "/:id",
    name: "pokemon-id",
    component: () => import("../modules/pokemon/pages/PokemonPage.vue"),
    //manda el id en las props
    props: (route) => {
      const id = Number(route.params.id); //parsea el string a number y me trar el numero del param
      return isNaN(id) ? { id: 1 } : { id }; //pregunta si es number
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../modules/shared/pages/NoPageFound.vue"),
  }, //buscar cualquier url que no sea los que tengo aca de los componeentes y me muestra solo el componeten que puse
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
