import Vue from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './lang/lang'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let title = to.name;
  document.title = title+" - ESP-DASH";
  next();
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
