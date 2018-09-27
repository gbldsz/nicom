import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    el:null
  },
  mutations: {

    updateEl(state,data){
      state.el = data
    }
  },
  actions: {
    setEl(store,data){
      store.commit('updateEl',data);
    }
  }
})
