'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e1451690bacf70e100a3e12cc156f1a8",
"index.html": "2ae725424996b5b8a620e44f103d52f6",
"/": "2ae725424996b5b8a620e44f103d52f6",
"main.dart.js": "35d2bccc1fe79de6e4a8dec32827e6e9",
"version.json": "9bbf51e20e7237e15fc0df20ea92fa82",
"assets/assets/images/lumapace-symbol-transparent.png": "de52fa03a8e6109b0aaef05810382ed7",
"assets/assets/images/covers/garden.webp": "4fb38089ac10013a4bcb4add65efa572",
"assets/assets/images/covers/subway.webp": "f1128acbf5cfae243d4206a6242a9200",
"assets/assets/images/lumapace-icon.png": "9d3680437713817ad60caa125a85c03d",
"assets/assets/audio/demo_ambient.mp3": "e1d76b878aa9060ff7f2666568278b8e",
"assets/assets/audio/ui_chime.mp3": "612d8bb57ac6ead4fdb21c3ceae3bd9e",
"assets/assets/content/episodes/002/episode.json": "3dbb1b21a33bd43a56e02b4411342e31",
"assets/assets/content/episodes/002/cues.json": "462c37ca8525c376075a13c61abe1845",
"assets/assets/content/episodes/002/audio.mp3": "2558d1f45538c9c6695709e6930fd7cb",
"assets/assets/content/episodes/c006/episode.json": "67caf13fb56f5ef24a532aa401480958",
"assets/assets/content/episodes/c006/audio.mp3": "d4705fee383fab3dd4319bdeda02a7f6",
"assets/assets/content/episodes/c006/cues.json": "77069ce636a713b81dea3f83e6ffcd85",
"assets/assets/content/episodes/c009/episode.json": "f10a6fbee67ac56f758aaab8f51ca2ae",
"assets/assets/content/episodes/c009/cues.json": "b04ddda8784b4853e1ef9795c4db922b",
"assets/assets/content/episodes/c011/episode.json": "9daac7036da3b6983a83b3a6220291e9",
"assets/assets/content/episodes/c011/cues.json": "50248bf853cee84f2b4e4fc6993f01ce",
"assets/assets/content/episodes/c013/episode.json": "95afe01bec9737f819ac8298e05ca83c",
"assets/assets/content/episodes/c013/cues.json": "0a96da0a3768f4f574bc4e3dc81e9632",
"assets/assets/content/episodes/c014/episode.json": "ff172dceb57207a570a3c11873681387",
"assets/assets/content/episodes/c014/cues.json": "8c6692ca1013fa4ed17ef0303ce05ef0",
"assets/assets/content/episodes/c015/episode.json": "316cdf87bea931793252a5cf2281b827",
"assets/assets/content/episodes/c015/cues.json": "d5caab6042bed1b6a5a533a308a46846",
"assets/assets/content/episodes/c016/episode.json": "5e8d226fe48ff74ccba7c1215907f7d6",
"assets/assets/content/episodes/c016/cues.json": "a098183643cfe50d18313c03f9c8750d",
"assets/assets/content/episodes/c017/episode.json": "533e0c4aa1a5f0acd4a7958de6e4d82e",
"assets/assets/content/episodes/c017/cues.json": "4209b9acf3cf1b01d99fadb659dd5022",
"assets/assets/content/episodes/c018/episode.json": "eb3747b25e2f321da0ac0f82c9966860",
"assets/assets/content/episodes/c018/cues.json": "3bd34b3751bdc17760d8c1fa973eede0",
"assets/assets/content/episodes/003/episode.json": "6dd1e0e6cebd98fe1d3828369906cafa",
"assets/assets/content/episodes/003/cues.json": "43046c2d4eb4515ddb7b303f4ba834aa",
"assets/assets/content/episodes/c022/episode.json": "9a428a3cf1f08467ae9e7868f2eb6d1a",
"assets/assets/content/episodes/c022/cues.json": "8efe1d5c2b3da1ef96d58d8e0c7e0b2e",
"assets/assets/content/episodes/c026/episode.json": "808231236aa76b6a8bbf92e18d005868",
"assets/assets/content/episodes/c026/cues.json": "731049a75d2090ae1989a05b38220581",
"assets/assets/content/episodes/c029/episode.json": "a1b2de0d02378feda288f85fb33935a5",
"assets/assets/content/episodes/c029/cues.json": "657e2502ccb03e9c914eaf794f1840cf",
"assets/assets/content/episodes/c031/episode.json": "4dd228e4e8c7eeae5e99a86bed06dfd9",
"assets/assets/content/episodes/c031/cues.json": "655ca0d792a5c3962d2b98a26d3f2f31",
"assets/assets/content/episodes/c032/episode.json": "428cf24ab71fae78266e9cd76a645117",
"assets/assets/content/episodes/c032/cues.json": "100f77d7889f0e65c3f1d8a03bfe4284",
"assets/assets/content/episodes/c033/episode.json": "7d5e99401cfdd0134b7e7de589065d7d",
"assets/assets/content/episodes/c033/cues.json": "b26d0d4920e4e03f071a8bb9600cbcc5",
"assets/assets/content/episodes/c003/episode.json": "247a4e8e1141685abf15f5f2b24c0bf0",
"assets/assets/content/episodes/c003/cues.json": "6172ae39b2adff26663d0b62e7fb94cd",
"assets/assets/content/episodes/c007/episode.json": "bd858c21be2823f132f33220d687acac",
"assets/assets/content/episodes/c007/cues.json": "e0165961dc6f6fb9723c323ae8ce0130",
"assets/assets/content/episodes/c020/episode.json": "2a4df08f05fdb83eeec33c420003193d",
"assets/assets/content/episodes/c020/cues.json": "384b4d50d0ea3b3730f20ba7e4716e7b",
"assets/assets/content/episodes/c023/episode.json": "608b1c58e050987c8e97f347d797633b",
"assets/assets/content/episodes/c023/cues.json": "361da2f0081aa998281730f8a6582ea0",
"assets/assets/content/episodes/c027/episode.json": "8c78bcc04bf70e976fbde85c8dfc60d2",
"assets/assets/content/episodes/c027/cues.json": "610d482de4c0b579f0749e152459346b",
"assets/assets/content/episodes/c028/episode.json": "e10f8013669f6d300f6717a544d062b3",
"assets/assets/content/episodes/c028/cues.json": "493ca428583ca4048c38081c80a9ab49",
"assets/assets/content/episodes/c002/episode.json": "db5704a31dff20f36ba2ade130ff5519",
"assets/assets/content/episodes/c002/cues.json": "2725d0a2de510705109d84bd64a3a22e",
"assets/assets/content/episodes/c004/episode.json": "9cb6392c70499b6f45d989e0ec3c48b0",
"assets/assets/content/episodes/c004/cues.json": "794d8a0c38beb08fdcac5cb6d0ef40ac",
"assets/assets/content/episodes/c005/episode.json": "d33cd2697733c81b57a1caea978c710e",
"assets/assets/content/episodes/c005/cues.json": "03bdfaaaa030fa156b51a194be2b42f9",
"assets/assets/content/episodes/c008/episode.json": "d156e74fd2f1edd6c7ef5b0abb55f421",
"assets/assets/content/episodes/c008/cues.json": "516af27086b2df2d9b77ea9e3fb1a747",
"assets/assets/content/episodes/c010/episode.json": "bce3f237c01197f36837317971666704",
"assets/assets/content/episodes/c012/episode.json": "ec8203e554e5ce64cc1376facbcbb819",
"assets/assets/content/episodes/c012/cues.json": "8f8cb907b7a870a2814b7aea74f8d4b8",
"assets/assets/content/episodes/c024/episode.json": "abf31ba073df34b36c519c87532139e0",
"assets/assets/content/episodes/c024/cues.json": "c80efe3df548c9b53e6dad8b3b560e45",
"assets/assets/content/episodes/c030/episode.json": "42cd0eb95fc5ae51572bf8add2bd0ecf",
"assets/assets/content/episodes/c030/cues.json": "2c4c9c4fff20e1d20280fa7d4d3cf485",
"assets/assets/content/catalog.json": "022cec5b0958e83cea9d815ac171004f",
"assets/packages/purchases_flutter/assets/web/purchases_js_hybrid_mappings.js": "894ef7d6c3ae0bb203da54725eadd387",
"assets/packages/flutter_local_notifications_web/web/notifications_service_worker.js": "087634de8a8c1c49d00bcd212bf7feb4",
"assets/fonts/MaterialIcons-Regular.otf": "14726ed22d554a58f97d6b146b47e940",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a59f1297831a9df4f588ec1f1afd9690",
"assets/AssetManifest.bin.json": "2d41703fc6f1397a5ba0a8e61a19207d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "59bfc1f1b1c4b830fb0447189e47e835",
"icons/Icon-192.png": "142262e8de03a1ba327d649f112cdf31",
"icons/Icon-512.png": "bade6a76f065fdab75e0a117b2821c20",
"icons/apple-touch-icon.png": "7f4afca8672ff2c81cbca514892ddfdc",
"icons/Icon-maskable-192.png": "8f903a989d397bec56184c52c32ab50f",
"icons/Icon-maskable-512.png": "936eeabe4860a4bda635172eb58b3747",
"manifest.json": "fc4a4b781751b9849695bf37cc491435",
"favicon.png": "2f8797655aa53e2d48e81be4263b9a62",
"privacy.html": "27ddfd81eb359ddb560bf83edb0bf3d0",
"terms.html": "b93b5d356a4946a257dd10647aff533b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
