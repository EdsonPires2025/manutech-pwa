self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('manutech-store').then((cache) => cache.addAll([
      './index.html',
      './style.css',
      './manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});