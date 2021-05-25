import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requireAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  const protectedRoute = to.matched.some(record => record.meta.requireAuth)
  if (protectedRoute && store.state.token === null) {
    next({name: 'Home'})
  } else {
    next()
  }
})

export default router
