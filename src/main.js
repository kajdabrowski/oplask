import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as API from "@/API"
import store from './store'

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
    getImgIndex(index) {
      return this.data[index]
    },
    async search(query, page) {
      let temp = await API.searchData(query, page)
      if (temp.results.length > 1) {
        this.data = temp.results
      }
    },
    async randomImages() {
      this.data = await API.randomImages()
    }
  },

  created() {
    this.$store.dispatch('random')

    // this.data = this.randomImages()
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
