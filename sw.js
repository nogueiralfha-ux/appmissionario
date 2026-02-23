self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('missao-peru-v1').then((cache) => {
      return cache.addAll([
        'index.html',
        'devocionais.json',
        'questions.json',
        'logo-missao-peru.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});