
/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.core.setCacheNameDetails({
    prefix: 'cloud_next_abidjan',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'run-time',
  });

  workbox.precaching.precacheAndRoute([
  {
    "url": "static/404.html",
    "revision": "fd7c443c5682d50f442a6b96a345f7ba"
  },
  {
    "url": "static/css/customize.css",
    "revision": "e4b37e5dcf82a5e86210e41866e6b7ec"
  },
  {
    "url": "static/css/main.css",
    "revision": "e8b245ee726518f8384699099b2da7cf"
  },
  {
    "url": "static/css/main.min.css",
    "revision": "eef9dd85b5de840088f2b577b930a4fe"
  },
  {
    "url": "static/fonts/flaticon/flaticon.css",
    "revision": "6b31648e7c61c3c185efa1f0918b5870"
  },
  {
    "url": "static/fonts/flaticon/flaticon.min.css",
    "revision": "f213ebd74ffc76416693c4717a519b09"
  },
  {
    "url": "static/fonts/flaticon/Flaticon.svg",
    "revision": "e5867a0e572c0242da53ad1768f10782"
  },
  {
    "url": "static/img/pages/error-img.svg",
    "revision": "11d650f54e0d45a532980a9191d20a7b"
  },
  {
    "url": "static/img/pwa/favicon/favicon.ico",
    "revision": "4d7bff7080eb99513e09c624780f6d83"
  },
  {
    "url": "static/img/shapes/banner-bg2.svg",
    "revision": "a14d89a7d1fa28cbdb2db0cc5e39793f"
  },
  {
    "url": "static/img/shapes/banner-vector.svg",
    "revision": "f0b7e37268391836188d040c34f01b6b"
  },
  {
    "url": "static/img/shapes/bg-overlay.svg",
    "revision": "3590a2cad9affec7c8de92b4a0d09f0d"
  },
  {
    "url": "static/img/shapes/counter-bg.svg",
    "revision": "08d12c4ef072ccbdc1dbef6f5de5ddcd"
  },
  {
    "url": "static/img/shapes/danger.svg",
    "revision": "40078be4408701dd37e10bdb4a6ac229"
  },
  {
    "url": "static/img/shapes/error-wave1.svg",
    "revision": "281001af76bf36b4b5be6a1825b98b8b"
  },
  {
    "url": "static/img/shapes/error-wave2.svg",
    "revision": "f5d2a7a149775e9c479abf4b7fd1b661"
  },
  {
    "url": "static/img/shapes/footer-bg.svg",
    "revision": "4fff3f01302a3d3240fb105f9bee2777"
  },
  {
    "url": "static/img/shapes/login-wave1.svg",
    "revision": "e3acde1fc3cc91a3b2787185b67db4e2"
  },
  {
    "url": "static/img/shapes/login-wave2.svg",
    "revision": "b75591930ce9f16369eed2bfb7c4d1a3"
  },
  {
    "url": "static/img/shapes/morph1.svg",
    "revision": "c25210c0bcfddfcce34c6f7e92c9a22b"
  },
  {
    "url": "static/img/shapes/morph2.svg",
    "revision": "904d035e40952aadd872a60ec348ca01"
  },
  {
    "url": "static/js/customize.js",
    "revision": "e265743b856deb5185594e51f152f3fb"
  },
  {
    "url": "static/js/main.js",
    "revision": "09cfa1fc80b832eda0eff1fecfd38c81"
  },
  {
    "url": "static/js/main.min.js",
    "revision": "2227654582f41e9f2c78ea0d097031e9"
  },
  {
    "url": "static/scss/about.scss",
    "revision": "644d05c1e17dd09b3dc8ebe05217dedb"
  },
  {
    "url": "static/scss/custom.scss",
    "revision": "9a1fddfc268143ad1af745792afabb1c"
  },
  {
    "url": "static/scss/custom/_custom-styles.scss",
    "revision": "002bc64bc704ab6517284909a45de609"
  },
  {
    "url": "static/scss/custom/_custom-variables.scss",
    "revision": "bd5c9838830e45dbb8874b6e815b7064"
  },
  {
    "url": "static/scss/elements.scss",
    "revision": "d236e72b115e2511770f8da97e809876"
  },
  {
    "url": "static/scss/error.scss",
    "revision": "f70c2a83f9f724e1d06f139353d28d20"
  },
  {
    "url": "static/scss/home.scss",
    "revision": "4db158637f95e88458ead7f0e6236b12"
  },
  {
    "url": "static/scss/includes/animation.scss",
    "revision": "c7940245b969445bc8f2dfda6200fc1b"
  },
  {
    "url": "static/scss/includes/footer.scss",
    "revision": "2e26515f965680bb4e39bbe1ea1895bd"
  },
  {
    "url": "static/scss/includes/header.scss",
    "revision": "e6fde3513c560da3612162d5a6965079"
  },
  {
    "url": "static/scss/includes/nav.scss",
    "revision": "76adff77d5d15e0b5cad01f8768e8592"
  },
  {
    "url": "static/scss/includes/reset.scss",
    "revision": "18ea2b880eab269f2230a319bff7b31c"
  },
  {
    "url": "static/scss/main.scss",
    "revision": "9a1c723287b45e75f48bd06e11b64e01"
  },
  {
    "url": "static/scss/variables.scss",
    "revision": "bf6f9023ad6804ef9e0cd8caae80043e"
  },
  {
    "url": "static/vendor/animate-css/animate.css",
    "revision": "91cc40989e5e96e8d6bddc0f19598441"
  },
  {
    "url": "static/vendor/animate-css/animate.min.css",
    "revision": "bc1a6a99c43f5ccc97d2d350bde13f74"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap-grid.css",
    "revision": "af8019512bc7e96f63aa0914715a983b"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap-grid.min.css",
    "revision": "e6b31228554d88eba9212d5bd4aaf1c8"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap-reboot.css",
    "revision": "f1b21c4bd42b60467888d7045310a555"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap-reboot.min.css",
    "revision": "77b9d6d408b3cdabd8f92399abc46f51"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap.css",
    "revision": "df40d6e4c661bcd1790dce6861e34ce4"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap.min.css",
    "revision": "7cc40c199d128af6b01e74a28c5900b0"
  },
  {
    "url": "static/vendor/bootstrap/css/bootstrap.utile.css",
    "revision": "405b270f6d112d7fd29224113062a51c"
  },
  {
    "url": "static/vendor/bootstrap/js/bootstrap.bundle.js",
    "revision": "1a94abb2d5270a12fa1ffba3a186737d"
  },
  {
    "url": "static/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "revision": "a5334e475209f965b4862f3bedf32618"
  },
  {
    "url": "static/vendor/bootstrap/js/bootstrap.js",
    "revision": "702049b302bef35ba3614119b4c82cce"
  },
  {
    "url": "static/vendor/bootstrap/js/bootstrap.min.js",
    "revision": "61f338f870fcd0ff46362ef109d28533"
  },
  {
    "url": "static/vendor/isotope-layout/isotope.pkgd.js",
    "revision": "8896e082b3fa1738e2e2f558a7fc1fa4"
  },
  {
    "url": "static/vendor/isotope-layout/isotope.pkgd.min.js",
    "revision": "2afcff647ed260006faa71c8e779e8d4"
  },
  {
    "url": "static/vendor/jquery/core.js",
    "revision": "0bcb7ccc3d7603c2035e5cd3b93dc2bf"
  },
  {
    "url": "static/vendor/jquery/jquery.js",
    "revision": "cdc6230a6c2bbb8b6707fce91fdf365f"
  },
  {
    "url": "static/vendor/jquery/jquery.min.js",
    "revision": "2e1344cf35be98de57944dbaed2ac2bf"
  },
  {
    "url": "static/vendor/jquery/jquery.slim.js",
    "revision": "1a94b73b4b451a7872de5d76f57024e4"
  },
  {
    "url": "static/vendor/jquery/jquery.slim.min.js",
    "revision": "d9b11ca4d877c327889805b73bb79edd"
  },
  {
    "url": "static/vendor/magnific-popup/jquery.magnific-popup.js",
    "revision": "5b23ded83b6a631b06040ed574e43dd6"
  },
  {
    "url": "static/vendor/magnific-popup/jquery.magnific-popup.min.js",
    "revision": "ba6cf724c8bb1cf5b084e79ff230626e"
  },
  {
    "url": "static/vendor/magnific-popup/magnific-popup.css",
    "revision": "30b593b71d7672658f89bfea0ab360c9"
  },
  {
    "url": "static/vendor/magnific-popup/magnific-popup.min.css",
    "revision": "f0472f2237f87aabc41e6a16f049ff58"
  },
    {
    "url": "static/vendor/material-design-iconic-font/css/material-design-iconic-font.css",
    "revision": "088d3afe805103afe42059d7673433bb"
  },
  {
    "url": "static/vendor/material-design-iconic-font/css/material-design-iconic-font.min.css",
    "revision": "e9365fe85b7e4db79a87015e52c3db6c"
  },
  {
    "url": "static/vendor/material-design-iconic-font/css/material-design-iconic.optimal.min.css",
    "revision": "06303d39a3cf7682d669337e4fc06f7b"
  },
  {
    "url": "static/vendor/material-design-iconic-font/fonts/Material-Design-Iconic-Font.svg",
    "revision": "381f7754080ed2299a7c66a2504dff02"
  },
  {
    "url": "static/vendor/slick/fonts/slick.svg",
    "revision": "f97e3bbf73254b0112091d0192f17aec"
  },
  {
    "url": "static/vendor/slick/slick-theme.css",
    "revision": "f9faba678c4d6dcfdde69e5b11b37a2e"
  },
  {
    "url": "static/vendor/slick/slick-theme.min.css",
    "revision": "e6614b9eda44d465523095e4f5b38235"
  },
  {
    "url": "static/vendor/slick/slick-theme.scss",
    "revision": "e97dc549d5450ebd34fe128eefc69cd6"
  },
  {
    "url": "static/vendor/slick/slick.css",
    "revision": "f38b2db10e01b1572732a3191d538707"
  },
  {
    "url": "static/vendor/slick/slick.js",
    "revision": "483a3731bbe7046c1da3163da76dbe98"
  },
  {
    "url": "static/vendor/slick/slick.min.css",
    "revision": "da4e146913da6966d85a6b8686886edb"
  },
  {
    "url": "static/vendor/slick/slick.min.js",
    "revision": "d5a61c749e44e47159af8a6579dda121"
  },
  {
    "url": "static/vendor/slick/slick.scss",
    "revision": "f5309cf6905194850b44fb78b8028b95"
  },
  {
    "url": "static/vendor/wowjs/wow.js",
    "revision": "6d1de87eaba3bea986f91e344de80b50"
  },
  {
    "url": "static/vendor/wowjs/wow.min.js",
    "revision": "ca842c56b08ae9a1e4e908ec721f4494"
  }
]);

  // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        purgeOnQuotaError: true,
      }),
    ],
   }),
  );

  workbox.routing.registerRoute(
    new RegExp('/static/css/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'css-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 60 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 30,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/static/js/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'js-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 60 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 30,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/static/fonts/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fonts-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 60 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 14,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/static/img/'),
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 30 * 24 * 60 * 60,
          // Only cache 10 requests.
          maxEntries: 45,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

  workbox.routing.registerRoute(
    new RegExp('/static/vendor/'),
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'vendor-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          // Only cache requests for a week
          maxAgeSeconds: 60 * 24 * 60 * 60,
          // Only cache requests.
          maxEntries: 60,
          purgeOnQuotaError: true,
        }),
      ]
    })
  );

} else {
console.log(`Boo! Workbox didn't load 😬`);
}

const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('myQueueName', {
  maxRetentionTime: 12 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
  /\/api\/.*\/*.json/,
  new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);
