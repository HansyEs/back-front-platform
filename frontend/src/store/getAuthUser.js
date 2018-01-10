import Vue from 'vue';
import Vuex from 'vuex'; // FOR STORE -> STAGE MANAGEMENT -> Global objects sharing betwwen components

Vue.use(Vuex);

const state = {
    count: 0
};

/*
// AJAX with vue
import axios from 'axios';

// TO DO -> get CURRENT AUTH USER ID
var authUserID = 1;

// URL for AXIOS API request to Express Server
var urlAPI = 'http://localhost:3000/api/v1.0/users/'+authUserID;


axios.get(urlAPI)
  .then(function (response) {
    authUser.info = response.data;
    console.log("AuthUser::",authUser);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

const mutations = {
    INCREMENT_VALUE(state) {
        state.count++;
    }
};

export default new Vuex.Store({
    state,
    mutations
});