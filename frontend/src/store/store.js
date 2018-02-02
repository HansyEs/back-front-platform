import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// STORE EXAMPLES
const state = {
    count: 0 // 
};

const getters = {

};

const mutations = {

};

const actions = {

};

// END STORE EXAMPLES

// IMPORT STORE MODULES
// import auth from './modules/auth' // module :: AUTH USER 
import authFirebase from './modules/auth_firebase' // module :: AUTH WITH FIREBASE 
// import getAuthUser from './modules/getAuthUser' // module :: GET AUTH USER INFO 
import getAuthUserFirebase from './modules/getAuthUser_firebase' // module :: GET AUTH USER INFO 

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
    	//auth,
    	authFirebase,
    	//getAuthUser
        getAuthUserFirebase
    }
});