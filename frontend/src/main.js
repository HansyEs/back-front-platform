// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//FIREBASE FOR AUTH PROTOTYPE
import firebase from 'firebase'
let app;

let config = {
  apiKey: "AIzaSyAiByn6Pltcgb1RjS0ymbvfBnbBb8U9xe0",
  authDomain: "tt-dashboard-c6268.firebaseapp.com",
  databaseURL: "https://tt-dashboard-c6268.firebaseio.com",
  projectId: "tt-dashboard-c6268",
  storageBucket: "tt-dashboard-c6268.appspot.com",
  messagingSenderId: "827126545333"
};

firebase.initializeApp(config)

// VUEX STORE for Single State Tree
// example:: Get auth user and share with all components
import Vuex from 'vuex';
Vue.use(Vuex);
import store from './store/store'

//UI Components
import AppNavbar from './components/navbar'
Vue.component('navbar',AppNavbar)
import AppNavbarCollapsible from './components/navbar-collapsible'
Vue.component('navbar-collapsible',AppNavbarCollapsible)
import UserSidebar from './components/user-sidebar'
Vue.component('user-sidebar',UserSidebar)
import AppFooter from './components/footer'
Vue.component('app-footer',AppFooter)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      store, // Inject store so all components can access its data
      components: { 
      	App,
      	AppNavbar,
      	AppNavbarCollapsible,
      	UserSidebar,
      	AppFooter
      }
    })
  }
});