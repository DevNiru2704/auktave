const CACHE_VERSION = 'v2';
const CACHE_NAME = `auktave-static-${CACHE_VERSION}`;
const ASSETS = [
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
        caches.keys().then((keys) => Promise.all(keys.map((k) => {
            if (k !== CACHE_NAME) return caches.delete(k);
        }))).then(() => self.clients.claim())
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    // Only handle same-origin GET requests
    if (event.request.method !== 'GET' || url.origin !== location.origin) return;

    const acceptHeader = event.request.headers.get('accept') || '';
    const isHtmlRequest = event.request.mode === 'navigate' || acceptHeader.includes('text/html');
    const isStaticAsset = event.request.destination === 'style'
        || event.request.destination === 'script'
        || event.request.destination === 'image'
        || event.request.destination === 'font'
        || url.pathname.startsWith('/_next/');

    if (isHtmlRequest) {
        // Always try network first for HTML to avoid stale deployments.
        event.respondWith(
            fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
        );
        return;
    }

    if (!isStaticAsset) return;

    event.respondWith(
        caches.match(event.request).then((cached) => cached || fetch(event.request).then((res) => {
            if (res && res.status === 200 && res.type === 'basic') {
                const clone = res.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return res;
        }))
    );
});
