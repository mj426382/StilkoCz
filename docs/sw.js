importScripts('/%3Crepository-name%3E/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/%3Crepository-name%3E/_nuxt/91d6607.js",
    "revision": "197087051e38561964bdbbfd94b29504"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/92da059.js",
    "revision": "e6417e01813efd009b3546cfadf76ae5"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/c003676.js",
    "revision": "b18a6f401c5d25f96e1a7b076f32e7fa"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/c913596.js",
    "revision": "3516c78724c99fbbc463a2e20cddbb6c"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/ebe8d10.js",
    "revision": "f7f34de56b847ada1f82754a6bd109a4"
  },
  {
    "url": "/%3Crepository-name%3E/_nuxt/f2e2b2b.js",
    "revision": "281511fdabc34df6081890989bec8b45"
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
