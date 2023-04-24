import { createRouter, createWebHistory } from "vue-router";
import Auth from '../pages/Auth.vue'
import Dashboard from '../pages/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Auth',
      component: Auth,
      children: [
        {
          path:'/Dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path:'/Dashboard',
      name: 'dashboard',
      component: Dashboard
    }

  ]

})

export default router;
