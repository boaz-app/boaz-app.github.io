'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "928aefed96078a7057bc3e7b20f4daf6",
"assets/assets/i18n/zh_TW.json": "e0944f1e33c19f0eaef7d1b41747afca",
"assets/favicon/ic_launcher.png": "b50d57679cda67fd7bc4d8752b79679e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/background.jpg": "3c00bfd6b1556a389fc814ade838928e",
"assets/images/bg_black.png": "54d2ce157d50ff2f90db5f2eea14275b",
"assets/images/bg_card.png": "d4759e5b8950b07eca54f4cad0d68a60",
"assets/images/bg_welcome.png": "7c702f831c17c05f7bdcaba8b3996198",
"assets/images/content_bg.png": "ceb2093d3389b423d8a4c9b7e3cba629",
"assets/images/curtain_blcak_close.png": "3ad7f060caefa815d8b337c63bb5d64b",
"assets/images/curtain_blcak_open.png": "d9409fad633c26c55775b27b664d4981",
"assets/images/curtain_orange_close.png": "2c3a992a2a8436839bea6149e7634d53",
"assets/images/curtain_orange_open.png": "f9be833fb0e1b7bbdd5576b036bb1926",
"assets/images/icon_add.png": "a1c702ce2a41a3ca73717444d56f924a",
"assets/images/icon_automation_grey.png": "21e1a5519ec812d4b409ed0585ee2fe6",
"assets/images/icon_automation_red.png": "3b5234b01560eda15a614ad6c902d574",
"assets/images/icon_bell.png": "45554171c9d1616b8467991068b0d4e5",
"assets/images/icon_bell_white.png": "13ce76538523578c417bcda7f8504d01",
"assets/images/icon_camera.png": "3c20cfc28c8d51abf0cfdbfabf3827fa",
"assets/images/icon_default_avatar.png": "5b92d15c4a470b1230d49223ff89e79a",
"assets/images/icon_default_member.png": "8d0ac554de5a7e003724bbbbf3dbf9ce",
"assets/images/icon_delete.png": "1025e3ebc1b96fb32c204d448212f6ec",
"assets/images/icon_device.png": "dc3b2faa99d5d80b8b82dec8dad4fe81",
"assets/images/icon_device_h.png": "53ff29351861403aa4d60b38029ac795",
"assets/images/icon_eye.png": "ec1172ea03a344d59ea377412ce290a7",
"assets/images/icon_eye_h.png": "940863eec8fb4304c4d7dc9233ad880d",
"assets/images/icon_gallery_grey_line.png": "5df91738d6295fa5b2a65b0aa5317e3d",
"assets/images/icon_home.png": "56d763edc46e4f29ba7c710d58fd7a98",
"assets/images/icon_home_h.png": "a9081cba219dc2e4c31990e06ceb90e3",
"assets/images/icon_humidity.png": "1920248c1ecbf52cc9e6ad0d68fce804",
"assets/images/icon_lock.png": "351562417f60faf5ab703203a0f03def",
"assets/images/icon_manage.png": "8d0ac554de5a7e003724bbbbf3dbf9ce",
"assets/images/icon_manage_h.png": "b7d7aebab322895ecd077fbb6803baf7",
"assets/images/icon_mode_cloud.png": "b06d843c896fbca5ea7bdcc14dba952c",
"assets/images/icon_mode_local.png": "5343c66c76bc535536c0bf830402a117",
"assets/images/icon_scene_grey.png": "17ad95b0f792f698581ae6eea78dd782",
"assets/images/icon_scene_red.png": "291ad177b69fbdee3d4d798297b375f8",
"assets/images/icon_setting_home.png": "dcc73db04a770e5191762da0b5301e36",
"assets/images/icon_setting_location.png": "8e2a92ead26fb43906fbd6743d5ce26d",
"assets/images/icon_setting_message.png": "e9af225b0823139a99e2372f17f92c1d",
"assets/images/icon_setting_qa.png": "2714f746cbb00860bc7c3df688f6ac11",
"assets/images/icon_setting_service.png": "1d56683c20df39b5c527b15e71a3da0d",
"assets/images/icon_setting_setting.png": "ac8047f6d45178523a25656547f28e5b",
"assets/images/icon_smart.png": "d50f092a3619b76a129ee9119f057438",
"assets/images/icon_smart_h.png": "68da4d06a3410c326b722729294ec869",
"assets/images/icon_sunny.png": "846a059f4c9817d7041595c51071d592",
"assets/images/icon_sun_grey.png": "413bc03326b7eaff917f27cc32c4435a",
"assets/images/icon_thermometer.png": "6db3cf994055c9c576090e9b07843462",
"assets/images/icon_wifi.png": "3a95a21a1bb70237e72651ff730bfa60",
"assets/images/logo.png": "3ba7285e1283ccf6482e4bccbd1c956f",
"assets/images/logo_white.png": "77bbf6e7d322cf4d0838d53086d58180",
"assets/images/splash_bg.png": "54d3627e5c3799386d9e6b395755f5e1",
"assets/images/switch_black.png": "d949220797fdd9cc80aec8fed8be6c9b",
"assets/images/switch_down_close.png": "10c1abe00682ef63366a427fe1d26230",
"assets/images/switch_down_open.png": "a4964153527b39bad8d30778ec91a79b",
"assets/images/switch_orange.png": "4d32faa85707cb21ff5c6832414836b9",
"assets/images/switch_stop_close.png": "4b87508e23e545d11a1a8a5d0c96abf6",
"assets/images/switch_stop_open.png": "c02858ea46ff06985738348d8d11bdc5",
"assets/images/switch_up_close.png": "c12a0028bb105b7953a0a15a7860a0e1",
"assets/images/switch_up_open.png": "c8157be577faa9ecc878cd39770db8a0",
"assets/images/tip_connect_wifi.png": "b7fd01e2c1426aa781ba712ac04ef484",
"assets/images/tip_flash.png": "297dcb3bdbe2cce058da86c261acd0aa",
"assets/images/tip_mode_1.png": "88f199d0f41766a772350e6617132860",
"assets/images/tip_mode_2.png": "53fc2161fc44090f55a2e42b976b382d",
"assets/images/tip_mode_3.png": "212cb5715dc27bfe7095b6a5e7c1fcf9",
"assets/images/weather_cloudy.png": "37e9546231afa5519c7c85c27e046d47",
"assets/images/weather_fog.png": "a776c66dedce0a4e35e2e8cf1f44de25",
"assets/images/weather_rain.png": "f9fb96551f651a268d571a4997cbac8a",
"assets/images/weather_snow.png": "2080ee9271d8d9abc424bbf93d4c610a",
"assets/images/weather_sunny.png": "f070129a1beefb7953e18777b8006573",
"assets/images/weather_sunny_cloudy.png": "ad6830c7d6a8877289e2d95360787707",
"assets/images/weather_thunder.png": "97d2c9dd239fb16a7c304e60a1777c98",
"assets/images/weather_wind.png": "578e087a9d4b8f744f46b2084416e751",
"assets/NOTICES": "7950ebcef49363ddd81ff0741fa1cf87",
"assets/packages/awesome_dialog/assets/flare/error.flr": "87d83833748ad4425a01986f2821a75b",
"assets/packages/awesome_dialog/assets/flare/error_without_loop.flr": "35b9b6c9a71063406bdac60d7b3d53e8",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/commons/assets/images/empty.png": "95fea0110ac9fb09c2c68b37213364fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/day_night_time_picker/assets/moon.png": "71137650ab728a466a50fa4fa78fb2b9",
"assets/packages/day_night_time_picker/assets/sun.png": "5fd1657bcb73ce5faafde4183b3dab22",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "008755107783fe066d35bf6ee10d3c3c",
"/": "008755107783fe066d35bf6ee10d3c3c",
"main.dart.js": "8f58632d46f3883f24db3f1446db55e9",
"manifest.json": "5486f04be4635043d526524787ee8dd8",
"version.json": "3171874d12fc58e0821b5296bb8c3af8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
