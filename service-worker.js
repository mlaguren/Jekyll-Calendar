const CACHE_NAME = 'jekyll-calendar-cache-v1';
const toCache = [
'/index.html',
'/calendar/',
'/assets/css/main.css',
'/assets/js/calendar.js'
];

self.addEventListener('install', e => {
e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(toCache)));
});

self.addEventListener('fetch', e => {
e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

// optionally: manage activation/cleanup of old caches
