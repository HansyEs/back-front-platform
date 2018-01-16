import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// STORE EXAMPLES

const state = {
    count: 0, // demo purposes
    authState: false
};

const getters = {
	isLoggedIn: state => {
    	return state.authState
   }
};

// AUTH Mutations
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const mutations = {
	// synchronous transactions
    [LOGIN] (state) {
      //state.pending = true;
    },
    [LOGIN_SUCCESS] (state) {
      state.authState = true;
      //state.pending = false;
      console.log("DISPATCHED :: LOGIN")
    },
    [LOGOUT](state) {
      state.authState = false;
      console.log("DISPATCHED :: LOGOUT")
    }
};

const actions = {

	// AUTH actions
	login({ commit }, creds) {
		commit(LOGIN_SUCCESS); // Mutation
		/*
		commit(LOGIN); // show spinner
		return new Promise(resolve => {
		setTimeout(() => {
		 localStorage.setItem("token", "JWT");
		 commit(LOGIN_SUCCESS);
		 resolve();
		}, 1000);
		});
		*/
	},
	logout({ commit }) {
		commit(LOGOUT); // Mutation
		/*
		localStorage.removeItem("token");
		commit(LOGOUT);
		*/
	}
	// END AUTH actions
};

// END STORE EXAMPLES

// IMPORT STORE MODULES
import getAuthUser from './modules/getAuthUser' // GET AUTH USER module

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
    	getAuthUser
    }
});