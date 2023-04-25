import { createRouter, createWebHistory } from "vue-router";
import Auth from '../pages/Auth.vue'
import Dashboard from '../pages/Dashboard.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import UserStore from '../store/user.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'Auth',
      component: Auth,
      children: [
        {
          path:'/sign-in',
          name: 'signin',
          component: SignIn
        },
        {
          path:'/sign-up',
          name: 'signup',
          component: SignUp
        }
      ]
    },
    {
      path:'/dashboard',
      name: 'dashboard',
      component: Dashboard
    }

  ]

})

router.beforeEach((to) => {
  const useUserStore = UserStore()
  const isLogedIn = useUserStore.user !== null;

  if (!isLogedIn && to.name !== 'signin' && to.name !== 'signup') {
    return { name: 'signin'}
  }
  else if (isLogedIn && to.name !== 'dashboard') {
    return { name: 'dashboard'}
  }
})


export default router;
