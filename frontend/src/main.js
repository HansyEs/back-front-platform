// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store, // Inject store so all components can access its data
  components: { 
  	App,
  	AppNavbar,
  	AppNavbarCollapsible,
  	UserSidebar,
  	AppFooter,
  }
})