<template>
  <div class="ion-page" main>
    <ion-header>
       <ion-toolbar class="toolbar-md-primary">
        <ion-title>HomePage: WizLearner Toolbar</ion-title>
      </ion-toolbar>
    </ion-header>
  
  <ion-content>
    <ion-button @click="openMenu">Open Left Menu</ion-button>
  </ion-content>

  <ion-footer>
    <ion-title>Copyrights Reserved with WizLearner</ion-title>
  </ion-footer>

  <router-view></router-view>

  </div>
</template>

<script>
export default {
  methods: {
    openMenu () {
      document.querySelector('ion-menu-controller').open('start')
    }
  }
}
</script>