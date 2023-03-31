import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

let app = createApp(App)
router.beforeEach((to, from, next) => {
  if (!window.history.state.current) window.history.state.current = to.fullPath
  if (!window.history.state.back) window.history.state.back = from.fullPath
  // 手动修改history的state
  return next()
})
app.use(router).mount('#app')
