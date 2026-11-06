var NOMBRE = 'aquifue-v1';
var BASE = ['./', 'index.html', 'costeo.html', 'analisis.html', 'conectar.html', 'costeo.webmanifest', 'analisis.webmanifest', 'costeo-192.png', 'costeo-512.png', 'analisis-192.png', 'analisis-512.png'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(NOMBRE).then(function (c) { return c.addAll(BASE); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf('aquifue-') === 0 && k !== NOMBRE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) { return; }
  e.respondWith(fetch(e.request).then(function (r) {
    var copia = r.clone();
    caches.open(NOMBRE).then(function (c) { c.put(e.request, copia); });
    return r;
  }).catch(function () {
    return caches.match(e.request).then(function (r) { return r || caches.match('index.html'); });
  }));
});
