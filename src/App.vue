<template>
  <div id="app">
    
    <ion-app>
      
      <home></home>
      <menu-left></menu-left>
      <camera-page></camera-page>
      <router-view></router-view>
       <ion-menu-controller></ion-menu-controller>
    </ion-app>

    
   
  </div>
</template>

<script>

import Home from '@/Home'
import CameraPage from '@/components/CameraPage'
//import GeolocationPage from '@/components/GeolocationPage'
import MenuLeft from '@/components/MenuLeft'

export default {
  name: 'App',
  components : {Home, MenuLeft, CameraPage},
  data () {
    return {
      items: [{id: 0, name: 'Ahmed'}, {id: 1, name: 'Naima'}]
    }
  },
  methods: {
  }
}
</script>