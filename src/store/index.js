import Vue from 'vue'
import Vuex from 'vuex'


import * as API from "@/API"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    getAllImg: state => state.data,
    getImgIndex: state => index => state.data[index],
    getSingleImg: state => id => state.data.find(element => element.id == id),
    


/*
    this.$root.getAllImg
    från 
    till =>
    this.$store.getters.getAllImg

    från => getters
    getAllImg() {
      return this.data
    },
    */
  },
  mutations: {
    /*changeData(state, change) {
      state.data = change
    }*/
    changeData: (state, change) => state.data = change
  },
  actions: {
    random: async context => {
      const fetch = await API.randomImages()
      context.commit("changeData", fetch)
    },
    search: async (context, payload)=> {
      const fetch = await API.searchData(payload.search, payload.page)
      context.commit("changeData", fetch.results)
    },

    /*
    async search(query, page) {
      let temp = await API.searchData(query, page)
      if (temp.results.length > 1) {
        this.data = temp.results
      }
    },



    async randomImages() {
      this.data = await API.randomImages()
    }
    */
  },
  modules: {
  }
})
