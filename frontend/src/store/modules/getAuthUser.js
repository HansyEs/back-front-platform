console.log("STORE Module :: getAuthUser")

const state = {
  info: getAuthUser() || ''
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {}

// AJAX with vue
import axios from 'axios';

function getAuthUser(){

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

};

export default {
  state,
  getters,
  actions,
  mutations
}