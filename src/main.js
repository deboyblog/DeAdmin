import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(Router)
Vue.use(VueResource)

var router = new Router({ linkActiveClass: 'active', history: false })

router.map({
  '/dashboard': {
    component: require('./components/Dashboard.vue')
  },
  '/user': {
    component: require('./components/User.vue'),
    subRoutes: {
      'add': {
        component: require('./components/user/add.vue')
      },
      'manage': {
        component: require('./components/user/manage.vue')
      },
      'blacklist': {
        component: require('./components/user/blacklist.vue')
      }
    }
  },
  '/article': {
    component: require('./components/Article.vue'),
    subRoutes: {
      'add': {
        component: require('./components/article/add.vue')
      },
      'manage': {
        component: require('./components/article/manage.vue')
      },
      'category': {
        component: require('./components/article/category.vue')
      },
      'trash': {
        component: require('./components/article/trash.vue')
      }
    }
  },
  '/account': {
    component: require('./components/Account.vue'),
    subRoutes: {
      'login': {
        component: require('./components/account/login.vue')
      },
      'register': {
        component: require('./components/account/register.vue')
      },
      'findpwd': {
        component: require('./components/account/findpwd.vue')
      }
    }
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/dashboard',
  '/user/': '/user/manage',
  '/article/': '/article/manage'
})

router.start(App, 'app')
