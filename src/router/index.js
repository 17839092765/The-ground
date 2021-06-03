/*
 * @Author: your name
 * @Date: 2021-06-03 10:27:29
 * @LastEditTime: 2021-06-03 13:02:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \the_ground\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// const routes = [

// ]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "Home",
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("../views/Home.vue"),
      children: [
        {
          path: "CityMap",
          name: "CityMap",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
            import(
              /* webpackChunkName: "about" */ "../views/CityMap/CityMap.vue"
            ),
          children: [
            {
              path: "Freedom",
              name: "Freedom",

              component: () => import("../views/CityMap/children/Freedom.vue"),
            },
            {
              path: "Energy",
              name: "Energy",

              component: () => import("../views/CityMap/children/Energy.vue"),
            },
            {
              path: "general",
              name: "general",

              component: () => import("../views/CityMap/children/general.vue"),
            },
            {
              path: "population",
              name: "population",

              component: () =>
                import("../views/CityMap/children/population.vue"),
            },
            {
              path: "traffic",
              name: "traffic",

              component: () => import("../views/CityMap/children/traffic.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
