import {
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.MODE === 'production' ? '/main1/' : '/'
  ),
  // history: createWebHistory('/'),
  routes
})

export default router