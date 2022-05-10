importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3110df0.js",
    "revision": "4fc356f32f84175698ef7eea21486dd3"
  },
  {
    "url": "/_nuxt/7baa9ba.js",
    "revision": "edb0ec80ff441fc6d3a9c9279733d0a5"
  },
  {
    "url": "/_nuxt/8ff18ef.js",
    "revision": "c698c7f1db9bdf7f5e46f3731bdc591f"
  },
  {
    "url": "/_nuxt/b8bed84.js",
    "revision": "d42fffd70005585901a53a08ac9235d4"
  },
  {
    "url": "/_nuxt/d6f2844.js",
    "revision": "1c847ec983d9d0ac3295dbfff4e258c2"
  },
  {
    "url": "/_nuxt/eab3e6f.js",
    "revision": "c3212734bb2d37390857f5313285e1ce"
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
