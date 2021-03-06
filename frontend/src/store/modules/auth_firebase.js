// AJAX with vue
import axios from 'axios';
// FIREBASE
import firebase from 'firebase';

const state = {
  //isLoggedIn: localStorage.getItem("token"), // AUTH State
  isLoggedIn: null,
  pending: false
}

// getters
const getters = {
  isLoggedIn: state => {
    //console.log("GETTER store/auth => isLoggedIn =",state.isLoggedIn);
    return state.isLoggedIn;
  },
  pending: state => {
    //console.log("LOADING",state.pending);
    return state.pending;
  }
}

// mutations
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

const mutations = {
  
  [LOGIN](state,creds) {
    state.pending = true; // SHOW PreLoader
  },

  [LOGIN_SUCCESS](state,creds) {   
    state.isLoggedIn = firebase.auth().currentUser;
    //console.log(state.isLoggedIn);
    state.pending = false; // HIDE PreLoader
  },

  [LOGIN_FAIL](state) {
    console.log("LOGIN_FAILED");
  },

  [LOGOUT](state) {
    //console.log("LOGOUT Commited",firebase.auth().currentUser);
    state.isLoggedIn = false;
    // TO DO => disconnect user from server
  }  
}

// actions
const actions = {

/* LOGIN */  
  login({state,commit,rootState}, creds) {
    //console.log("login...","creds obj:",creds);
    commit(LOGIN,creds); // show spinner
  },
/* END LOGIN */

/* LOGIN SUCCESS */  
  loginSuccess({state,commit,rootState}, creds) {
    commit(LOGIN_SUCCESS,creds); // show spinner
  },
/* END LOGIN */

/* LOGIN FAIL */  
  loginFail({state,commit,rootState}) {
    commit(LOGIN_FAIL); // show spinner
  },
/* END LOGIN */

/* LOGOUT */
  logout({commit}) {
    firebase.auth().signOut().then(() => {
      //console.log("LOGOUT Dispatched");
      commit(LOGOUT); // AUTH STATE CHANGED
    })
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