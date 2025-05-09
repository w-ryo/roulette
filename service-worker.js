self.addEventListener('install', function(event) {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('fetch', function(event) {
    // オフラインキャッシュ等はここに追加も可能
  });
  