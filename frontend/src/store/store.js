import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// STORE EXAMPLESi
const state = {
    count: 0,
    // TO DO -> Create separate Module for get Auth User
    authUser : getAuthUser() || '' // -> or empty to avoid error while loading
};

const mutations = {
    increment(state) {
        state.count++;
    }
};
// END STORE EXAMPLES

// GET AUTH USER
// AJAX with vue
import axios from 'axios';

function getAuthUser(){

	// TO DO -> get CURRENT AUTH USER ID
	var authUserID = 1;

	// URL for AXIOS API request to Express Server
	var urlAPI = 'http://localhost:3000/api/v1.0/users/'+authUserID;

	axios.get(urlAPI)
	  .then(function (response) {
	    state.authUser = response.data;
	    //console.log("AuthUser::",state.authUser);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });

}
// END GET AUTH USER

export default new Vuex.Store({
    state,
    mutations
});