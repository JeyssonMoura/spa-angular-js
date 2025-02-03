const CACHE_NAME = "spa-cache-v1";
const urlsToCache = ["/", "index.html", "assets/js/app.js", "views/home.html", "views/about.html", "views/contact.html", "assets/js/controllers/home.ctrl.js", "assets/js/controllers/about.ctrl.js", "assets/js/controllers/contact.ctrl.js", "assets/js/lib/angular.min.js", "assets/js/lib/angular-route.min.js"];

// Instalação do Service Worker
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepta as requisições e retorna do cache
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

// Atualiza o cache e remove versões antigas
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName !== CACHE_NAME;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});
