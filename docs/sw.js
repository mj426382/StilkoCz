importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1eca96d.js",
    "revision": "27d332348ca80223b32df6aed6810d29"
  },
  {
    "url": "/_nuxt/3c7c1f4.js",
    "revision": "bc227f1d5167e99f20d524c9a1df3230"
  },
  {
    "url": "/_nuxt/53a348b.js",
    "revision": "32dabbffe00247890a98ed9cb55baca8"
  },
  {
    "url": "/_nuxt/7317676.js",
    "revision": "4badfbda72f43d8bf73ef386f0348e41"
  },
  {
    "url": "/_nuxt/9606e70.js",
    "revision": "2adacdca018ac8715214a42f0f2fc495"
  },
  {
    "url": "/_nuxt/f235564.js",
    "revision": "8f440068653e25dcbd3df7ef4f82d588"
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
