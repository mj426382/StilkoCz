importScripts('/%3Crepository-name%3E/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/%3Crepository-name%3E/_nuxt/30030f3.js",
    "revision": "9e840398f424030e8a552aca22b6b8bf"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/7baa9ba.js",
    "revision": "edb0ec80ff441fc6d3a9c9279733d0a5"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/8ff18ef.js",
    "revision": "c698c7f1db9bdf7f5e46f3731bdc591f"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/d6f2844.js",
    "revision": "1c847ec983d9d0ac3295dbfff4e258c2"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/e0326d6.js",
    "revision": "0a81c4e9e8e1ccdc141f17294dece900"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/eab3e6f.js",
    "revision": "c3212734bb2d37390857f5313285e1ce"
  }
], {
  "cacheId": "Stilko",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/%3Crepository-name%3E/.*'), workbox.strategies.networkFirst({}), 'GET')
