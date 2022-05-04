importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0abf672.js",
    "revision": "7f1ac3dd097ef87bff4f3133401a6898"
  },
  {
    "url": "/_nuxt/cc5e257.js",
    "revision": "22f672f92c957927e38241ecb55fb0bc"
  },
  {
    "url": "/_nuxt/cdb7dbc.js",
    "revision": "c16e927797f4ec6a1a7e9d6b22f3b03d"
  },
  {
    "url": "/_nuxt/e0c571f.js",
    "revision": "e5407fe9235a366bafb44c7257da25a4"
  },
  {
    "url": "/_nuxt/e298e2e.js",
    "revision": "660afc9f4e09f26f0858f8884837a47b"
  },
  {
    "url": "/_nuxt/e39d00a.js",
    "revision": "4be42cca1c2d94a1d174388209d71aca"
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
