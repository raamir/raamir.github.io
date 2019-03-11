let CACHE_NAME = 'quizpwa';
let urlsToCache = [
	'home.html',
	'questions.html',
	'index.js',
	'chicago.js',
	'chicago.css',
	'images/background.jpg',
	'images/cover1.png',
	'images/cover2.png',
	'images/cover3.png',
	'images/cover4.png',
	'images/emoji1.png',
	'images/emoji2.png',
	'images/result1.png',
	'images/result2.png',
	'images/result3.png',
	'images/result4.png',
	'images/true.jpg',
	'images/disney.png',
	'manifest.webmanifest'
    
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
