import Vue from 'vue';
import App from './App.vue';
import router from './router';


import VeeValidate from "vee-validate";
import Ionic from '@ionic/vue';

import '@ionic/core/css/ionic.bundle.css';
import { defineCustomElements } from '@ionic/pwa-elements/loader'; // <== NEW



Vue.use(Ionic);
Vue.config.productionTip = false;
Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

//Vue.config.ignoredElements = [/^ion-/] 	// <== NEW

defineCustomElements(window);  // <== NEW
