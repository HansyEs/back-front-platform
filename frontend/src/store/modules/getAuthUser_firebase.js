// AJAX with vue
import axios from 'axios';

const state = {
  authUserInfo: "" // Initial State
}

// getters
const getters = {
  authUserInfo: state => {
    //console.log("[GETTER] store/getAuthUser ::",state.authUserInfo);
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
getAuthUser({state,commit,rootState}, user) {

  // GET AUTH USER INFO
  console.log("Getting auth user.uid =",user.uid);

  var authUserID = 'http://localhost:3000/api/v1.0/authFirebase/'+user.uid;

  axios.get(authUserID)
    .then(function (response) {
      if(response.status === 204){
        console.log("USER NOT AUTH"); // APP SHOULD NEVER GET HERE!
      }else if(response.status === 200){
        console.log("AUTH UID :",response.data);
        if(response.data!=false){
          fetchUserData(response);
        }else{
          console.log("TO DO => Create AUTHed USER in DB");
        }
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    function fetchUserData(obj){
      
      //console.log(obj);
      var userUID = obj.data;

      // URL for AXIOS API request to Express Server
      var urlAPI = 'http://localhost:3000/api/v1.0/users/'+userUID;

      axios.get(urlAPI)
        .then(function (response) {
          if(response.status === 204){
            console.log("USER NOT FOUND"); // APP SHOULD NEVER GET HERE!
          }else if(response.status === 200){
            //state.userInfo = response.data;
            console.log("USER RESP",response);
            commit(GET_AUTH_USER,response);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

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