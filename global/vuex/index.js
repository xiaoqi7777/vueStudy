import Vue from "vue";
import Vuex from "vuex";
import { moduleStores } from "../modules";
import createLogger from 'vuex/dist/logger'
const state = {};

const actions = {};

const mutations = {};

const getters = {};
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  namespaced: true,
  state,
    actions,
    mutations,
    getters,
    modules: moduleStores,
    plugins:debug?[createLogger()]:[]
});
