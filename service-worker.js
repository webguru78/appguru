const CACHE_NAME = "webguru-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "assets/css/style.css", // Replace with your actual CSS file path
  "assets/img/logo.jpg",
  "assets/img/logo.jpg",
  "assets/img/logo.jpg",
  "assets/js/main.js" // Replace with your actual JS file path
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
