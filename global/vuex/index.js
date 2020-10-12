import Vue from "vue";
import Vuex from "vuex";
import { moduleStores } from "../modules";

const state = {};

const actions = {};

const mutations = {};

const getters = {};
Vue.use(Vuex);


export default new Vuex.Store({
  namespaced: true,
  state,
    actions,
    mutations,
    getters,
    modules: moduleStores
});
