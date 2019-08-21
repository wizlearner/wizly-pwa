import Vue from 'vue'
import Router from 'vue-router'
import CameraPage from '@/components/CameraPage'
import GeolocationPage from '@/components/GeolocationPage'
import MenuLeft from '@/components/MenuLeft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CameraPage',
      component: CameraPage
    },
    {
      path: '/geo-location-page',
      name: 'GeolocationPage',
      component: GeolocationPage
    },
    {
      path: '/menu-left',
      name: 'MenuLeft',
      component: MenuLeft
    } 
  ]
})