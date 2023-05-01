const cacheName = 'pwa-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        '/index.html',
        '/style.css',
        '/background.js',
        '/images/lightblue.jpg',
        '/images/lightgold.jpg'
      ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});