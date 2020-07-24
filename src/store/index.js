import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    number: 0
  },
  getters: {
    doubleClicks: state => {
      return state.counter * 2;
    },
    triple: state => {
      return state.counter * 3;
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    minus: state => {
      return state.number++;
    }
  },
  actions: {},
  modules: {}
});
