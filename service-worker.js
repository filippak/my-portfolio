"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/my-portfolio/index.html","d73f3e8e3933bf99943db6cde3338ef1"],["/my-portfolio/static/css/main.3461708f.css","7357ab4bc142f2799880079bb562512a"],["/my-portfolio/static/js/main.15e766f7.js","0dfe5aca2bc5e59318f1ae66be4ea663"],["/my-portfolio/static/media/3_gradients.b881b1fc.png","b881b1fcdbf2af29c8c3b7fe22c8a16e"],["/my-portfolio/static/media/FK_logo.a874a780.svg","a874a7805197cce67351c39f5501f8a0"],["/my-portfolio/static/media/art.3aa3d50a.svg","3aa3d50aff49bf7cc8affd16152c898e"],["/my-portfolio/static/media/checklight.7ff828a8.png","7ff828a8a55ec5c1bab958adf54aac11"],["/my-portfolio/static/media/globe.c9504b8c.svg","c9504b8c33543d503a7ab152067e8b1e"],["/my-portfolio/static/media/gradient_gif.3da7f951.gif","3da7f951bc507fba410a90f8ac002fc7"],["/my-portfolio/static/media/growing_cell_gif.eb5893c9.gif","eb5893c978c246478ba528576e61b9b6"],["/my-portfolio/static/media/hat.6a9856dc.svg","6a9856dc9171012e73c4a083f055d14f"],["/my-portfolio/static/media/large-fractal.2d8732f8.png","2d8732f8c1932d839634b5adc3ba6544"],["/my-portfolio/static/media/lines-down.4f2a8c32.png","4f2a8c32ce2c4d86d098c7d028bbe716"],["/my-portfolio/static/media/lines-side.e12cfcbe.png","e12cfcbe6641500e2eb38a4e052b8a10"],["/my-portfolio/static/media/lines-up.42c6d5ce.png","42c6d5cef02516189c3ea4ea89d70192"],["/my-portfolio/static/media/medium-fractal.82690993.png","82690993352c02d2c83986e6a55d35e4"],["/my-portfolio/static/media/office-pac.6d62e130.png","6d62e130a13e1362ebd139848e4f54dd"],["/my-portfolio/static/media/one-cell.a5b0efa6.png","a5b0efa602afe4585c3359a55590a620"],["/my-portfolio/static/media/openmind-pitch.5d5d3573.png","5d5d35732143758355c04143a9d726e1"],["/my-portfolio/static/media/profile2.9dba763f.png","9dba763f9c1464610d6058691a1e230d"],["/my-portfolio/static/media/sign-along.2800e7a4.png","2800e7a4c0195439d585cb0ee921fd56"],["/my-portfolio/static/media/small-fractal.235ff2d1.png","235ff2d15aed9c017008c75b59cac09b"],["/my-portfolio/static/media/two-cells.bf0f12fb.png","bf0f12fbbbbc90c614a54c80c8a0ab7f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/my-portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});