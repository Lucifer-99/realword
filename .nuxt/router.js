import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63689dea = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _636f70c2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _0a0e16ae = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0c95822e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _639aa23a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _5799c42d = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _3f00fb94 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _63689dea,
    children: [{
      path: "",
      component: _636f70c2,
      name: "home"
    }, {
      path: "/login",
      component: _0a0e16ae,
      name: "login"
    }, {
      path: "/register",
      component: _0a0e16ae,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0c95822e,
      name: "profile"
    }, {
      path: "/settings",
      component: _639aa23a,
      name: "settings"
    }, {
      path: "/editor",
      component: _5799c42d,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _3f00fb94,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
