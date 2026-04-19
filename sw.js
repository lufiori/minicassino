self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('minicassino-app').then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});