import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// STORE EXAMPLES
const state = {
    count: 0 // 
};

const getters = {

};

const mutations = {

};

const actions = {

};

// END STORE EXAMPLES

// IMPORT STORE MODULES
import auth from './modules/auth' // GET AUTH USER module
//import getAuthUser from './modules/getAuthUser' // GET AUTH USER module

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
    	auth
    	//getAuthUser
    }
});