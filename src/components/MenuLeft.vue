<template>      
<div>

<ion-menu side="start" menuId="first">
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title>WizLearner</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content padding>
  <ion-list>
    <ion-item>Home</ion-item>
    <ion-item>Parent Dashboard</ion-item>
    <ion-item>Youtube Playlist</ion-item>
    <ion-item>Sign Out</ion-item>
  </ion-list>
  </ion-content>
</ion-menu>

<ion-router-outlet main>
  
</ion-router-outlet>

</div>
</template>

