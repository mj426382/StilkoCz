importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2df8112.js",
    "revision": "1aff6c94606beb3098cadbdc49a2d191"
  },
  {
    "url": "/_nuxt/2e3a5fe.js",
    "revision": "337b05ede284459f8fffb7d22b4612ac"
  },
  {
    "url": "/_nuxt/6cdd7c8.js",
    "revision": "71c102613f03713e82ab5124daf4db96"
  },
  {
    "url": "/_nuxt/aab60e1.js",
    "revision": "ffeec47c8d4877095efba8e2b696dfd5"
  },
  {
    "url": "/_nuxt/d2ddc97.js",
    "revision": "6bdd93efb5c86b476cdc498df844ef33"
  },
  {
    "url": "/_nuxt/d844ea6.js",
    "revision": "0264ae6f2c146633b1041cd7890fee4d"
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
