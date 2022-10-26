import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/Auth.vue"),
    redirect: {
        name: 'login'
    },


//Crear los childrens: 


    children: [
  
      {
        path: "emailverification",
        name: "emailverification",
        component: () => import("../views/EmailVerification.vue")
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/Register.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("../views/Login.vue"),
      },

    ],
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;