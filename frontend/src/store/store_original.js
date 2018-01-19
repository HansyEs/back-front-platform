import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// STORE EXAMPLES

const state = {
    count: 0, // demo purposes
    authState: false, // Initial Auth State
    authToken: 'AUTH TOKEN'
};

const getters = {
	isLoggedIn: state => {
		//console.log(">> getterAuthState from STORE     getter -->",state.authState)
		console.log("Auth State::",state.authState)
    	return state.authState
   }
};

// AUTH Mutations
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGGEDIN = "LOGGEDIN";
const LOGOUT = "LOGOUT";

const mutations = {
	// synchronous transactions
    [LOGIN] (state) {
      //state.pending = true; // Show Spinner
    },
    [LOGIN_SUCCESS] (state) {
      this.dispatch( 'getAuthUser/getAuthUser'); // Get auth user info when login from Module!!!
      state.authState = true;
      //state.pending = false; // HIDE Spinner
    },
    [LOGGEDIN] (state) {
      state.authState = true;
    },
    [LOGOUT](state) {
      state.authState = false;
    }
};

const actions = {

	// AUTH actions
	login({ commit }, creds) {
		console.log("[ACTION] dispatched --> LOGIN")
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
	loggedin({ commit }, creds) {
		commit(LOGGEDIN); // Mutation
	},
	logout({ commit }) {
		console.log("[ACTION] dispatched --> LOGOUT")
		commit(LOGOUT); // Mutation
	}
	// END AUTH actions
};

// END STORE EXAMPLES

// IMPORT STORE MODULES
import getAuthUser from './modules/getAuthUser' // GET AUTH USER module
import authModule from './modules/auth' // GET AUTH USER module

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