import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    setMessages: (state, messages) => {
      state.messages = messages
    }
  },
  actions: {
    loadMessages: async context => {
      let uri = 'http://localhost:4000/messages';
      const response = await axios.get(uri)
      context.commit('setMessages', response.data)
    }
  }
})
