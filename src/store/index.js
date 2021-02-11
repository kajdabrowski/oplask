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
  },
  mutations: {
    changeData: (state, change) => state.data = change
  },
  actions: {
    random: async context => {
      const fetch = await API.randomImages()
      context.commit("changeData", fetch)
    },
    search: async (context, payload) => {
      const fetch = await API.searchData(payload.search, payload.page)
      context.commit("changeData", fetch.results)
    },
  },
})
