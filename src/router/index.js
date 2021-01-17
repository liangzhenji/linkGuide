import Vue from 'vue'
import VueRouter from 'vue-router'

const Monitor = () => import('views/webMonitor/webMonitor')
const Guide = () => import('views/webGuide/webGuide')
const Announcement = () => import('views/updateAnnouncement/updateAnnouncement')
const Setting = () => import('views/setting/setting')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/guide'
  },
  {
    path:'/monitor',
    component:Monitor
  },
  {
    path:'/guide',
    component:Guide
  },
  {
    path:'/announcement',
    component:Announcement
  },
  {
    path:'/setting',
    component:Setting
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
