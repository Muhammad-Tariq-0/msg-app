importScripts('https://www.gstatic.com/firebasejs/7.22.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.22.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyC7BjQLckdKho0lpatVNoGAoG47b-7s5SQ",
  authDomain: "msg-app-5d6af.firebaseapp.com",
  databaseURL: "https://msg-app-5d6af.firebaseio.com",
  projectId: "msg-app-5d6af",
  storageBucket: "msg-app-5d6af.appspot.com",
  messagingSenderId: "509730574407",
  appId: "1:509730574407:web:13ff8e35ad6dd4bfe32162"
  })

  firebase.messaging();
   

  let CACHE_NAME = 'my-site-cache-v1';
  let urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/firebase-messaging-sw.js',
  '/index.html',
  '/App.js',
  '/App.css'
];

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
