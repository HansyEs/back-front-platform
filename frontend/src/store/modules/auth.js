// AJAX with vue
import axios from 'axios';

const state = {
  //isLoggedIn: localStorage.getItem("token"), // AUTH State
  isLoggedIn: false,
  userInfo: 'EMPTY' // Initial State
}

// getters
const getters = {
  isLoggedIn: state => {
    //console.log("GETTER store/auth => store.state.auth.isLoggedIn =",state.isLoggedIn);
    return state.isLoggedIn;
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
    this.dispatch('auth/getAuthUser',token); // GET auth user info
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
      }, 1000);
    });

  },
/* END LOGIN */

/* GET AUTH USER INFO */
  getAuthUser({state,commit,rootState}, token) {

    // GET AUTH USER INFO
    console.log("LOGIN >> AJAX CALL token:",token)

    var authUserID = token; // TO DO -> get REAL CURRENT AUTH USER ID
        authUserID = 1; // For prototype purposes

    // URL for AXIOS API request to Express Server
    var urlAPI = 'http://localhost:3000/api/v1.0/users/'+authUserID;

    axios.get(urlAPI)
      .then(function (response) {
        if(response.status === 204){
          console.log("USER NOT FOUND"); // APP SHOULD NEVER GET HERE!
        }else if(response.status === 200){
          state.userInfo = response.data;
        }
        //console.log("AJAX ans ::",response.status,response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  },
/* GET AUTH USER INFO */

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