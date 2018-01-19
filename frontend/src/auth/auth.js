// AUTH helper
/* globals localStorage */

import store from '@/store/store'

export default {
  login (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken () {
    return localStorage.token
  },

  logout (cb) {
    delete localStorage.token
    store.dispatch('logout')
    if (cb) cb() 
    this.onChange(false)
  },

  loggedIn () {
    store.dispatch('loggedin')
    return !!localStorage.token
  },

  onChange () {}
}

function pretendRequest (email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'p') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}