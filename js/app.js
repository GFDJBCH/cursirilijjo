console.log("APP: Hola")
// https://caniuse.com

//nota: Verificar service worker.
/*
if (navigator.serviceWorker) {
    console.log("app: Se puede utilizar SW.");
}
*/

//nota: Registrar SW.

if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js");
}

if (window.caches) {
    caches.open('prueba-1');
    caches.open('prueba-2');
    caches.open('prueba-3');
    caches.open('prueba-4');

    // caches.has('prueba-5').then(console.log);
    // caches.delete('prueba-1')

    caches.open('cache-v1.1').then(cache => {
        // cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/css/custom.css',
            '/img/01-image.jpg',
        ]).then(() => {
            //cache.delete('/css/custom.css'); // 1
            //cache.put('index.html', new Response('Hola mundo'));
        });

        // cache.match('/index.html').then(resp => {
        //     resp.text().then(console.log)
        // });

        caches.keys().then(keys => {
            console.log(keys);
        })

    });



}