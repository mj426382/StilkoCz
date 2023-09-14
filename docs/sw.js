importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f418e6.js",
    "revision": "fc106a5eb6af425dc9bafd5bef051682"
  },
  {
    "url": "/_nuxt/92da059.js",
    "revision": "e6417e01813efd009b3546cfadf76ae5"
  },
  {
    "url": "/_nuxt/c003676.js",
    "revision": "b18a6f401c5d25f96e1a7b076f32e7fa"
  },
  {
    "url": "/_nuxt/c913596.js",
    "revision": "3516c78724c99fbbc463a2e20cddbb6c"
  },
  {
    "url": "/_nuxt/d85826c.js",
    "revision": "fd58ec5cdfdda18efbeab96491318a86"
  },
  {
    "url": "/_nuxt/ebe8d10.js",
    "revision": "f7f34de56b847ada1f82754a6bd109a4"
  }
], {
  "cacheId": "Stilko",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
