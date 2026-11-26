/*
 * Service worker : permet d'installer le guide comme une application et de l'utiliser hors connexion.
 * Stratégie : réseau d'abord (toujours la dernière version en ligne), copie enregistrée si pas de connexion.
 * Changer VERSION à chaque modification importante pour forcer le renouvellement du cache.
 */
var VERSION = "guide-2026-11-26-2";
var FILES = [
  "./", "index.html", "manifest.webmanifest",
  "css/style.css", "js/app.js",
  "data/site.js", "data/fiches.js", "data/medicaments.js", "data/animations.js",
  "data/quiz.js", "data/sources.js", "data/pages.js",
  "assets/planche-digestif.jpg", "assets/fonts/inter-latin-var.woff2",
  "assets/icons/icon-192.png", "assets/icons/icon-512.png", "assets/icons/apple-touch-icon.png", "assets/icons/favicon-32.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(VERSION).then(function (cache) { return cache.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  // En ligne : toujours la dernière version (et on met la copie à jour). Hors ligne : la copie enregistrée.
  event.respondWith(fetch(req).then(function (res) {
    if (res && res.ok) {
      var copy = res.clone();
      caches.open(VERSION).then(function (cache) { cache.put(req.url.split("?")[0], copy); });
    }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (cached) {
      return cached || caches.match("index.html");
    });
  }));
});
