import { createRouter, createWebHistory } from "vue-router";
import LoginVue from "./../components/Auth/Login.vue";
import RegisterComponent from "./../components/Auth/RegisterComponent.vue";
import CreateTaskComponent from "./../components/Tasks/CreateTaskComponent.vue";
import LayoutsVue from "./../components/Layouts.vue";
import AllTasks from "./../components/Tasks/AllTasks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      meta: { auth: false },
      component: RegisterComponent,
    },

    {
      path: "/login",
      name: "Login",
      meta: { auth: false },
      component: LoginVue,
    },

    {
      path: "/",
      component: LayoutsVue,
      children: [
        {
          path: "/create-task",
          name: "createTask",
          meta: { auth: true },
          component: CreateTaskComponent,
        },
        {
          path: "/",
          name: "AllTasks",
          meta: { auth: true },
          component: AllTasks,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !localStorage.getItem("auth_t")) {
    next("login");
  } else if (!to.meta.auth && localStorage.getItem("auth_t")) {
    next("/");
  } else {
    next();
  }
});

export default router;
