import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zipInfo: null,
    errorMessage: false
  },
  mutations: {
    loadData(state, data) {
      state.zipInfo = data
    },
    clearData(state) {
      state.zipInfo = null
    }
  },
  actions: {
    async fetchData({commit, state}, {zipcode, textfield}) {
      try {
        const response = await fetch(`https://api.zippopotam.us/us/${zipcode}`);
        if (response.status === 200) {
          const data = await response.json();
          commit('loadData', data);
          textfield.classList.remove('error');
          state.errorMessage = false
        } else {
          textfield.classList.add('error');
          state.errorMessage = true
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
})
