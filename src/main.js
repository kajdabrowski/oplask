import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as API from "@/API"

Vue.config.productionTip = false

new Vue({
  data() { return {
    data: API.randomJSON(),
  }},
  methods: {
    getSingleImg(id) {
      return this.data.find(element => element.id == id)
    }, 
    getAllImg() {
      return this.data
    },
    async search(query) {
      let temp = await API.searchData(query)
      if (temp.results.length > 1) {
        this.data = temp.results
      }
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
