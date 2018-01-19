// AJAX with vue
import axios from 'axios';

const state = {
  info: 'AUTH USER INFO EMPTY' // Initial State
}

// getters
const getters = {
  authUserInfo: state => {
    console.log("[GETTER]   GAU ::",state.info);
    return state.info; // RETURN Auth User data
   }
}

// mutations
const GET_AUTH_USER = "GET_AUTH_USER";

const mutations = {

  [GET_AUTH_USER](state) {

    // getAuthUser ID / token / whatever...
    console.log("[MUTATION] GAU ::Getting Auth User Info");
    //console.log("EO",rootState);

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

    //console.log("[MUTATION] GAU ::",state.info);

  }
}

// actions
const actions = {
  //getAuthUser() // -> DISPATCHED once User has loggedin 
  getAuthUser({ commit }) {
    //console.log("[ACTION]   GAU :: Getting Auth User Info");
    commit(GET_AUTH_USER);
  }
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}