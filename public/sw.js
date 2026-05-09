const CACHE_NAME = 'auktave-static-v1';
const ASSETS = [
    '/',
    '/favicon.ico',
    '/favicon-32x32.png',
    '/images/og/custom-og.png',
    '/images/og/custom-og-1200x630.webp',
    '/images/og/custom-og-600x315.webp'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(keys.map((k) => { if (k !== CACHE_NAME) return caches.delete(k); }))).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    // Only handle same-origin GET requests
    if (event.request.method !== 'GET' || url.origin !== location.origin) return;
    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request).then((res) => {
            // Optionally cache navigations and images
            if (res && res.status === 200 && res.type === 'basic') {
                const clone = res.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return res;
        }).catch(() => caches.match('/')))
    );
});
