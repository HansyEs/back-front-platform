import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Profile from '@/components/Profile';
import Organization from '@/components/Organization';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home // <- WELCOME
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    }
  ],
  mode: 'history' // AVOID # from urls
})