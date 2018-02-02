// AJAX with vue
import axios from 'axios';

const state = {
  authUserInfo: 'AUTH USER INFO EMPTY' // Initial State
}

// getters
const getters = {
  authUserInfo: state => {
    //console.log("[GETTER] store/modules/getAuthUser ::",state.authUserInfo);
    return state.authUserInfo; // RETURN Auth User data
   }
}

// mutations
const GET_AUTH_USER = "GET_AUTH_USER";

const mutations = {

  [GET_AUTH_USER](state,response) {
    //console.log("COMMITING!",response);
    state.authUserInfo = response.data;
  }

}

// actions
const actions = {

/* GET AUTH USER INFO */
getAuthUser({state,commit,rootState}, creds) {

  // GET AUTH USER INFO
  console.log("Getting auth user: ",creds)

  var authUserID = creds.userUID; // TO DO -> get REAL CURRENT AUTH USER ID
      authUserID = 1; // For prototype purposes

  // URL for AXIOS API request to Express Server
  var urlAPI = 'http://localhost:3000/api/v1.0/users/'+authUserID;

  axios.get(urlAPI)
    .then(function (response) {
      if(response.status === 204){
        console.log("USER NOT FOUND"); // APP SHOULD NEVER GET HERE!
      }else if(response.status === 200){
        //state.userInfo = response.data;
        commit(GET_AUTH_USER,response);
      }
      //console.log("AJAX ans ::",response.status,response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

},
/* GET AUTH USER INFO */

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}