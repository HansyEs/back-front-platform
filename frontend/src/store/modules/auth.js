// AJAX with vue
import axios from 'axios';

const state = {
  //isLoggedIn: localStorage.getItem("token"), // AUTH State
  isLoggedIn: false,
  pending: false
}

// getters
const getters = {
  isLoggedIn: state => {
    //console.log("GETTER store/auth => store.state.auth.isLoggedIn =",state.isLoggedIn);
    return state.isLoggedIn;
  },
  pending: state => {
    console.log("LOADING",state.pending);
    return state.pending;
  }
}

// mutations
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const mutations = {

  [LOGIN](state) {
    state.pending = true; // SHOW PreLoader
  },

  [LOGIN_SUCCESS](state,token) {    
    this.dispatch('getAuthUser/getAuthUser',token); // GET auth user info
    state.isLoggedIn = true;
    state.pending = false; // HIDE PreLoader
  },

  [LOGOUT](state) {
    console.log("LOGOUT Dispatched");
    state.isLoggedIn = false;
    // TO DO => disconnect user from server
  }  
}

// actions
const actions = {

/* LOGIN */  
  login({state,commit,rootState}, creds) {

    console.log("login...","creds obj:",creds);

    commit(LOGIN); // show spinner

    return new Promise(resolve => {
      // Simulate asynchronous operation
      // // TO DO -> state.authError = error;
      setTimeout(() => {
        var token = Math.random().toString(36).substring(7)
        localStorage.setItem('token', token);
        commit(LOGIN_SUCCESS,token); // change the isLoggedIn state
        resolve();
      }, 1500);
    });

  },
/* END LOGIN */

/* LOGOUT */
  logout({commit}) {
    localStorage.removeItem("token");
    commit(LOGOUT);
  }
/* END LOGOUT */

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}