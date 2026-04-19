self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('roleta-app').then(cache => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});