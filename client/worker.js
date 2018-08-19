console.log('Loaded service worker!');

self.addEventListener('push', ev => {
  const response = ev.data.json();
  console.log('response',response);
  console.log('Got push', response.data.title);
  self.registration.showNotification(response.data.title, {
    body: 'Hello, World!',
    icon: 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
  });
});