<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="http://todomvc.com/examples/vanilla-es6/">
    <img alt="Gatsby" src="http://todomvc.com/site-assets/logo.svg" width="60" />
  </a>
</p>
<h1 align="center">
  ToDoMVC Vanilla-ES6 PWA Support Documentation
</h1>


## 🚀 Guide

1.  **Create learn.json in Vanilla-ES6 ToDoMVC App.**

    Follow this link `https://github.com/raamir/raamir.github.io/blob/master/projects/vanilla-es6/learn.json`

2.  **Create manifest.webmanifest file**

    ```
    {
      "short_name": "2DO",
      "name": "To Do App",
      "icons": [
      {
        "src": "/projects/vanilla-es6/icon.png",
        "type": "image/png",
        "sizes": "144x144"
      },
      {
        "src": "/projects/vanilla-es6/icons/icon192.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "/projects/vanilla-es6/icons/icon512.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ],
    "start_url": "/projects/vanilla-es6/",
    "background_color": "#3367D6",
    "display": "standalone",
    "scope": "/projects/vanilla-es6/",
    "theme_color": "#3367D6"
    }
    ```
    Make sure to chane the src links above to match your directory.

3.  **Update base.jsto get learn.json file**

    ```
    getFile('/projects/vanilla-es6/learn.json', Learn);
    ```
    
4.  **Create sw.js (service worker)**
    ```
    let CACHE_NAME = 'vanilla-es6';
    let urlsToCache = [
      'index.html',
      'icon.png',
      'icons/icon192.png',
      'icons/icon512.png',
      'learn.json',
      'manifest.webmanifest',
      'dist/bundle.js',
      'node_modules/todomvc-common/base.js',
      'node_modules/todomvc-common/base.css',
      'node_modules/todomvc-app-css/index.css'
    ];

    self.addEventListener('install', function(event) {
      // Perform install steps
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          }) 
      );
    });


    // when the browser fetches a url, either response with
    // the cached object or go ahead and fetch the actual url
    self.addEventListener('fetch', event => {
      event.respondWith(
        // ensure we check the *right* cache to match against
        caches.open(CACHE_NAME).then(cache => {
          return cache.match(event.request).then(res => {
            return res || fetch(event.request)
          });
        })
      );
    });
    ```
5.  **Update index.html to get service worke and manifest file**

    Add the following lines of code:
    ```
    <link rel="manifest" href="manifest.webmanifest">
    ```
    The following script will go inside body:
    ```
    <script>
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', function() {
          navigator.serviceWorker.register('./sw.js').then(function(registration) {
          //Registration was successful
          console.log('ServiceWorker registaion succeeded')
        }, function(err) {
          //registration failed :(
          console.log('ServiceWorker regisration failed')
        });
      });
      }
      </script>
     ```
6.  **Create icons folder to add icons**

7.  **Access your github Pages and check if you can install the app**



<!-- AUTO-GENERATED-CONTENT:END -->
