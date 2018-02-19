/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","50fc5f94573d6e72db55f0259defef47"],["/add-master.html","8847913202b123bc61b4f927281ae83f"],["/add-salon.html","44a5610fef6959a2f783de8ebc1ca137"],["/fonts/BebasNeue/BebasNeue-Thin.eot","0f5bf73e3691d7c44644c46c44923ca1"],["/fonts/BebasNeue/BebasNeue-Thin.otf","fe3b581953e54b55fdd13894bdfe8866"],["/fonts/BebasNeue/BebasNeue-Thin.svg","515cc2e25649d742946468267be33c89"],["/fonts/BebasNeue/BebasNeue-Thin.ttf","eb8331c78087d9f037f11a3df7e2ff35"],["/fonts/BebasNeue/BebasNeue-Thin.woff","7ac84c63074aee82274f6d1ec72258f4"],["/fonts/BebasNeue/BebasNeueBold.eot","754f0452e882d908f904d42ac74d1e6d"],["/fonts/BebasNeue/BebasNeueBold.otf","524d720f3f670bd38785447ca9c4b395"],["/fonts/BebasNeue/BebasNeueBold.svg","fea9b59775800f2f9735a13643dfcf5d"],["/fonts/BebasNeue/BebasNeueBold.ttf","6680bed53c1c16c0b8daa3691a7b1e60"],["/fonts/BebasNeue/BebasNeueBold.woff","360b29fb25df139871a351d65cff926e"],["/fonts/BebasNeue/BebasNeueBook.otf","0b9bf3dbd0b7002c72c4c876089f0a13"],["/fonts/BebasNeue/BebasNeueLight.eot","b11b2cc266823738d838e254a4d83448"],["/fonts/BebasNeue/BebasNeueLight.otf","4c8d42e69711e4e230d9081694db00ce"],["/fonts/BebasNeue/BebasNeueLight.svg","9795867c8053c2bed4203b961b538322"],["/fonts/BebasNeue/BebasNeueLight.ttf","8eca2dd594cef2fbcfc05688b029b709"],["/fonts/BebasNeue/BebasNeueLight.woff","8f245a654daddb4ffcf8bd4a00dc167a"],["/fonts/BebasNeue/BebasNeueRegular.eot","20b782942833aca6b81d9bd37e82b7b1"],["/fonts/BebasNeue/BebasNeueRegular.otf","a105cda50ada8b1d3c5a401a5411f8ae"],["/fonts/BebasNeue/BebasNeueRegular.svg","9ad9cae4113c68e2e618130958a384c5"],["/fonts/BebasNeue/BebasNeueRegular.ttf","abf4b2843c40fc2bd7eb6bbe929d0a23"],["/fonts/BebasNeue/BebasNeueRegular.woff","cb1228c7b1280c16083c0dc1fa3926d4"],["/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["/fonts/Material-Design-Iconic-Font.eot","e833b2e2471274c238c0553f11031e6a"],["/fonts/Material-Design-Iconic-Font.svg","381f7754080ed2299a7c66a2504dff02"],["/fonts/Material-Design-Iconic-Font.ttf","b351bd62abcd96e924d9f44a3da169a7"],["/fonts/Material-Design-Iconic-Font.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["/fonts/Material-Design-Iconic-Font.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["/fonts/MuseoSansRegular/MuseoSansRegular.eot","f30df4fe1c424f83e83faae7c4a13db9"],["/fonts/MuseoSansRegular/MuseoSansRegular.ttf","ef3daa6f0cfcb6366ada64dbbaa6501d"],["/fonts/MuseoSansRegular/MuseoSansRegular.woff","b3e4dd558860efbe20dd27e5fbb66d73"],["/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/img/favicons/android-icon-144x144.png","41a47b88bdf693e6334c0fd1130e6e9a"],["/img/favicons/android-icon-192x192.png","d92a66412430816b8af9d3f443ec44f2"],["/img/favicons/android-icon-36x36.png","8ac9dece4f396b6f1745a755d2e7e7aa"],["/img/favicons/android-icon-48x48.png","d37901f4da2c62592091b6647de9596f"],["/img/favicons/android-icon-72x72.png","55bbce1b797fbdd4357e456361f90c03"],["/img/favicons/android-icon-96x96.png","cb02b0ae7f0517a6636a80c3b4c4cfa8"],["/img/favicons/apple-icon-114x114.png","052f614833119b506c5f6e9724865b98"],["/img/favicons/apple-icon-120x120.png","196fefa7e61b6adaf7d5ab8543d5f2d7"],["/img/favicons/apple-icon-144x144.png","41a47b88bdf693e6334c0fd1130e6e9a"],["/img/favicons/apple-icon-152x152.png","de42cb5e68f3693fca2da2c2e5120383"],["/img/favicons/apple-icon-180x180.png","ed8f5ec27a48c90a10a14eb4c920efce"],["/img/favicons/apple-icon-57x57.png","c41dbc5de6d7c3d70bf203ca7971b435"],["/img/favicons/apple-icon-60x60.png","e45f8d86ebfae6842b33c8bd31a72075"],["/img/favicons/apple-icon-72x72.png","55bbce1b797fbdd4357e456361f90c03"],["/img/favicons/apple-icon-76x76.png","b6e76ac3b5cb9e5c9a3dc0955320d3ec"],["/img/favicons/apple-icon-precomposed.png","2bf88a4b7fc3c6200714a9f157e68a96"],["/img/favicons/apple-icon.png","2bf88a4b7fc3c6200714a9f157e68a96"],["/img/favicons/favicon-16x16.png","dbd0712cade1f923e94fed029a7913c3"],["/img/favicons/favicon-32x32.png","d7824e409251d73752429164147399c4"],["/img/favicons/favicon-96x96.png","cb02b0ae7f0517a6636a80c3b4c4cfa8"],["/img/favicons/favicon.ico","7ed01913600b37039383a6b6d4c89e4f"],["/img/favicons/ms-icon-144x144.png","41a47b88bdf693e6334c0fd1130e6e9a"],["/img/favicons/ms-icon-150x150.png","5a9f1947a9298c32f47c95f26650c27b"],["/img/favicons/ms-icon-310x310.png","5e73ad06003cb180d031b192556c2a9d"],["/img/favicons/ms-icon-70x70.png","c026ef40602668a11e0c6716b7d86405"],["/img/jpg/civalias-kune-332510.jpg","2ada25dfbce927e576bfe223e48f5830"],["/img/jpg/item.jpg","9cd708239ab24ae81edf12e4175200ba"],["/img/loading.gif","e46d34673a4d1335d99396af0cc9ff43"],["/img/png/android-icon-144x144.png","41a47b88bdf693e6334c0fd1130e6e9a"],["/img/png/android-icon-192x192.png","d92a66412430816b8af9d3f443ec44f2"],["/img/png/android-icon-36x36.png","8ac9dece4f396b6f1745a755d2e7e7aa"],["/img/png/android-icon-48x48.png","d37901f4da2c62592091b6647de9596f"],["/img/png/android-icon-72x72.png","55bbce1b797fbdd4357e456361f90c03"],["/img/png/android-icon-96x96.png","cb02b0ae7f0517a6636a80c3b4c4cfa8"],["/img/png/apple-icon-114x114.png","052f614833119b506c5f6e9724865b98"],["/img/png/apple-icon-120x120.png","196fefa7e61b6adaf7d5ab8543d5f2d7"],["/img/png/apple-icon-144x144.png","41a47b88bdf693e6334c0fd1130e6e9a"],["/img/png/apple-icon-152x152.png","de42cb5e68f3693fca2da2c2e5120383"],["/img/png/apple-icon-180x180.png","ed8f5ec27a48c90a10a14eb4c920efce"],["/img/png/apple-icon-57x57.png","c41dbc5de6d7c3d70bf203ca7971b435"],["/img/png/apple-icon-60x60.png","e45f8d86ebfae6842b33c8bd31a72075"],["/img/png/apple-icon-72x72.png","55bbce1b797fbdd4357e456361f90c03"],["/img/png/apple-icon-76x76.png","b6e76ac3b5cb9e5c9a3dc0955320d3ec"],["/img/png/apple-icon-precomposed.png","2bf88a4b7fc3c6200714a9f157e68a96"],["/img/png/apple-icon.png","2bf88a4b7fc3c6200714a9f157e68a96"],["/img/png/arrow-select.png","0816c058384eb8c5d67b6c18bd115cbc"],["/img/png/bg.png","3640637bfa92ccd4d2f78823f2d9a624"],["/img/png/favicon-16x16.png","dbd0712cade1f923e94fed029a7913c3"],["/img/png/favicon-32x32.png","d7824e409251d73752429164147399c4"],["/img/png/favicon-96x96.png","cb02b0ae7f0517a6636a80c3b4c4cfa8"],["/img/png/favicon.ico","7ed01913600b37039383a6b6d4c89e4f"],["/img/png/item.png","9cd708239ab24ae81edf12e4175200ba"],["/img/png/ms-icon-144x144.png","41a47b88bdf693e6334c0fd1130e6e9a"],["/img/png/ms-icon-150x150.png","5a9f1947a9298c32f47c95f26650c27b"],["/img/png/ms-icon-310x310.png","5e73ad06003cb180d031b192556c2a9d"],["/img/png/ms-icon-70x70.png","c026ef40602668a11e0c6716b7d86405"],["/img/svg/building.svg","e72762c4df0ce61d9d004ddb8044ae39"],["/img/svg/cat1.svg","008d1db9f6791d657d391240f185b5ea"],["/img/svg/cat2.svg","1570c4bdc8e5f9728135a673d0ef6962"],["/img/svg/cat3.svg","dd694916db13b661ac369bb647e6b84a"],["/img/svg/cat4.svg","526c458cf88c9755bb14121e9a3931fc"],["/img/svg/cat5.svg","361246fda7276642c82b354b2dd5b0b6"],["/img/svg/cat6.svg","913507ba98979591787b56174c4f7413"],["/img/svg/logo.svg","20a7d30ec3cd1fb6a7b7d03ac442eaf1"],["/img/svg/upload.svg","26ef40e372b9fb2789d809475e91d7a7"],["/index.html","d89009f6346d219df779dd630736ddae"],["/js/common.min.js","69a9a6626ee290c5fa74947dad66cedd"],["/js/libs.min.js","72c7921255282e3e30128a792eb7d67a"],["/manifest.json","c2615aae533cc93f593598b9bcb358de"],["/master-schedule.html","ade4171d705928e52fa58ce21371ee91"],["/myclients.html","9228ad4a11181c33719e2eabd3525c28"],["/salon-master.html","61bcb57fa50af86e9a74c15498722bb0"],["/salon.html","af96c25aafe50a508d494b11d1de9af9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







