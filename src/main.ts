import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import PageControls from './components/PageControls.vue';
// @ts-ignore
import MonacoEditor from 'vue-monaco';

Vue.config.productionTip = false;

Vue.component('PageControls', PageControls);
Vue.component('MonacoEditor', MonacoEditor);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
