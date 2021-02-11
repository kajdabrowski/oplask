import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  created() { this.$store.dispatch('random') },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
