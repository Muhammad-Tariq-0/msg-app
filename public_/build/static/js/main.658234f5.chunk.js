(this["webpackJsonpmsg-app"]=this["webpackJsonpmsg-app"]||[]).push([[0],{13:function(e,n,o){e.exports=o(30)},18:function(e,n,o){},19:function(e,n,o){},30:function(e,n,o){"use strict";o.r(n);var t=o(4),i=o.n(t),a=o(12),r=o.n(a),s=(o(18),o(19),o(9)),c=o.n(s);c.a.initializeApp({apiKey:"AIzaSyC7BjQLckdKho0lpatVNoGAoG47b-7s5SQ",authDomain:"msg-app-5d6af.firebaseapp.com",databaseURL:"https://msg-app-5d6af.firebaseio.com",projectId:"msg-app-5d6af",storageBucket:"msg-app-5d6af.appspot.com",messagingSenderId:"509730574407",appId:"1:509730574407:web:13ff8e35ad6dd4bfe32162"});var l=c.a;var d=function(){var e=l.messaging();return Notification.requestPermission().then((function(n){if(n)return console.log("Permission Granted"),e.getToken().then((function(e){console.log("Token:",e)}));console.log("Error in Token generation")})).catch((function(e){console.log("Error in Permission Grantation :",e)})),navigator.serviceWorker.register("/firebase-messaging-sw.js"),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Hello World"))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(n,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.658234f5.chunk.js.map