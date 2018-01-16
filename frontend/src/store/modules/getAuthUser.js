// AJAX with vue
import axios from 'axios';

const state = {
  info: '' // Initial State
}

// getters
const getters = {}

// mutations
const GET_USER = "GET_USER";

const mutations = {
  [GET_USER](state) {
    console.log("GET USER")
    //state.info = getAuthUser();
  }
}

// actions
const actions = {
  //getAuthUser() // -> DISPATCHED once User has login => AUTH!!!
  getUser({ commit }) {
    commit(GET_USER)
  }
  /*
  getAuthUser(){

    console.log("=> STORE Module => getAuthUser ID / token / whatever...")
    var authUserID = 1; // TO DO -> get REAL CURRENT AUTH USER ID

    // URL for AXIOS API request to Express Server
    var urlAPI = 'http://localhost:3000/api/v1.0/users/'+authUserID;

    axios.get(urlAPI)
      .then(function (response) {
        state.info = response.data;
        //console.log("AuthUser::",response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  */
}

export default {
  state,
  getters,
  actions,
  mutations
}