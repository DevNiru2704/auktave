const CACHE_VERSION = 'v4';
const CACHE_NAME = `auktave-static-${CACHE_VERSION}`;
const ASSETS = [
    '/images/auktave_logo.png',
    '/images/auktave_main_poster.jpeg',
    '/images/hackathon_poster.png',
    '/images/robotics_competition_poster.jpeg',
    '/images/ai_short_film_poster.jpeg',
    '/images/teams_auktave/amisha_profile.jpeg',
    '/images/teams_auktave/ankur_profile.jpeg',
    '/images/teams_auktave/ariyan_profile.jpeg',
    '/images/teams_auktave/atul_profile.jpeg',
    '/images/teams_auktave/humza_profile.jpeg',
    '/images/teams_auktave/jeya_profile.jpeg',
    '/images/teams_auktave/khushi_profile.jpeg',
    '/images/teams_auktave/mizan_profile.jpeg',
    '/images/teams_auktave/nirmalya_profile.jpeg',
    '/images/teams_auktave/sowhardya_profile.jpeg',
    '/images/teams_auktave/sriparna_profile.jpeg',
    '/images/teams_auktave/suhana_profile.jpeg',
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

    const isImageRequest = event.request.destination === 'image';

    if (!isImageRequest) return;

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
