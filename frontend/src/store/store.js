import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// STORE EXAMPLES
const state = {
    count: 0 // demo purposes
};

const getters = {

	
};

const mutations = {
	// synchronous transactions
	// use -> store.commit('increment')
    increment(state) {
        state.count++;
    }
};

const actions = {
	// can contain asynchronous operations
	// Actions are triggered with the dispatch method
	// store.dispatch('increment')
	increment (context) {
      context.commit('increment') // actions commit mutations
    },
	// A more practical example of real-world actions
	// would be an action to checkout a shopping cart,
	// which involves calling an async API and
	// committing multiple mutations:
    checkout ({ commit, state }, products) {
	    // save the items currently in the cart
	    const savedCartItems = [...state.cart.added]
	    // send out checkout request, and optimistically
	    // clear the cart
	    commit(types.CHECKOUT_REQUEST)
	    // the shop API accepts a success callback and a failure callback
	    shop.buyProducts(
	      products,
	      // handle success
	      () => commit(types.CHECKOUT_SUCCESS),
	      // handle failure
	      () => commit(types.CHECKOUT_FAILURE, savedCartItems)
	    )
	    // Note we are performing a flow of asynchronous operations, and
	    // recording the side effects (state mutations) of the action
	    // by committing them.
	  }
};
// END STORE EXAMPLES

// IMPORT STORE MODULES
import getAuthUser from './modules/getAuthUser' // GET AUTH USER module

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
    	getAuthUser
    }
});