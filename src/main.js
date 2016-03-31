import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/dashboard': {
    component: require('./components/Dashboard.vue')
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/dashboard'
})

router.start(App, 'app')
