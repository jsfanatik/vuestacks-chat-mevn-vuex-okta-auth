import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  client_id: '{clientId}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
  {
    path:'/',
    name: 'Chat',
    component: Chat,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
