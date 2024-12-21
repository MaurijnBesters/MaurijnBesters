'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "389ca5c16a52caa11d139d3f96f22d6d",
"version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "e659005418be4e9e369cc53e46565ecf",
"/": "e659005418be4e9e369cc53e46565ecf",
"main.dart.js": "dca491508ab7bc6fda4778ab8492acfb",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "681df82e9fd9443272347b3530910ef4",
"assets/NOTICES": "31e235271bd7f1de35686565f491a774",
"assets/FontManifest.json": "671609fe059ea16e0eac9be1b30a2a9a",
"assets/AssetManifest.bin.json": "0d161040f3b888c4420d655baed18f45",
"assets/packages/sense_wysiwyg/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf": "5c26cb0a6cef324c460754822591bd93",
"assets/packages/sense_wysiwyg/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf": "c6bd3951c4797106c1dac753a795534a",
"assets/packages/sense_wysiwyg/fonts/Nunito_Sans/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf": "008908128930caa6ecdf0d5dd369db40",
"assets/packages/sense_wysiwyg/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf": "e7f409eb0d8afdc0e025cc2bd0987e4f",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-Bold.ttf": "79ea53fed59f391498dfc6f2fbea97c2",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-Regular.ttf": "e2f219e63a575a41e10f991e9c95819a",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-Light.ttf": "eccb6c6a243a3d44219648b6cdbc58ce",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-BoldItalic.ttf": "fee74a810c9df73fe7218e4ff5815830",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-BlackItalic.ttf": "4c5b0354e588a8387e588ccdd4fc2dd8",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-Italic.ttf": "b974ea37b30597dbf7b8d6d0ef38de89",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-Black.ttf": "3fc5af7aaeb3de5b417fcfbd8a8b10c2",
"assets/packages/sense_wysiwyg/fonts/Merriweather/Merriweather-LightItalic.ttf": "e5ce4649f1b543ef4431a3e149271bea",
"assets/packages/sense_wysiwyg/fonts/Roboto_Slab/RobotoSlab-VariableFont_wght.ttf": "639c828487a32043addce04bdf807f24",
"assets/packages/sense_wysiwyg/fonts/Oswald/Oswald-VariableFont_wght.ttf": "033f2e7815bfa96db10bbb07ca20fb93",
"assets/packages/sense_wysiwyg/fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf": "31d95e96058490552ea28f732456d002",
"assets/packages/sense_wysiwyg/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf": "78609089d3dad36318ae0190321e6f3e",
"assets/packages/sense_wysiwyg/fonts/Playwrite_NL_Guides/PlaywriteNLGuides-Regular.ttf": "2ed59abd0e6d332bd252fca73d14ad07",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-ExtraLight.ttf": "8b786d6635f731d5bfe226e9f776531b",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-ThinItalic.ttf": "49e6ab0af059a77c7f2ac161b92642ba",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-BoldItalic.ttf": "7c3d44c8821780dc2451c67cb30d31da",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-SemiBold.ttf": "efc1b35c18175cae0b8a3d06e3025cbe",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Black.ttf": "98e93fc09832d3891a57162b83ecb930",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Regular.ttf": "ba95370355da928d1c09da6a0a49a1d6",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Italic.ttf": "681198abb02b3001bcd92b9437894450",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-MediumItalic.ttf": "e1b3b87b0c17b0f670f5170e0a34eb93",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Thin.ttf": "c0b1b7e615614217544a2f588cc18188",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-ExtraBoldItalic.ttf": "10727518e2122f5478b18fd5b6a8979c",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-ExtraBold.ttf": "41df63b2d1938bf065ba71700f32b623",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Bold.ttf": "69646b07726772636b613cc5e12a1f28",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-SemiBoldItalic.ttf": "1fecb41477cac535aeaf9b4f96890d80",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-BlackItalic.ttf": "2ec43223c5620d6cb2fc97adbab58902",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Light.ttf": "eb18967912c9c66c98deec24bfe1efbd",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-LightItalic.ttf": "3b58ba9e1202872b29ee615e2cab2088",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-ExtraLightItalic.ttf": "26a1b414edb5f96f52933acbcdbbfa18",
"assets/packages/sense_wysiwyg/fonts/Kanit/Kanit-Medium.ttf": "2fedce7deb446c41cc5274c226b43c04",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/packages/sense_wysiwyg/fonts/Roboto/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/packages/sense_wysiwyg/fonts/Lora/Lora-Italic-VariableFont_wght.ttf": "21e7be184313162be8813c73ca093347",
"assets/packages/sense_wysiwyg/fonts/Lora/Lora-VariableFont_wght.ttf": "5666f85e55c0b9e2be416718b8278445",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a92c6a0b4f9ff56851faa9f78d56512b",
"assets/fonts/MaterialIcons-Regular.otf": "60f59362f2fe7272fdbf22fe8af053d6",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
