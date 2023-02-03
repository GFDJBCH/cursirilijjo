console.log("SW: Hola")

/*self.addEventListener("install", event => {
    // Descargar recursos.
    // Crear cache.
    console.log("SW: Instalando!");

//    self.skipWaiting();

    const instalacion = new Promise((resolve, reject) => {
        console.log("SW: Instalación terminada");
        setTimeout(() => {
            self.skipWaiting();
            resolve();
        }, 1);
    });
    event.waitUntil(instalacion);
});*/

self.addEventListener("activate", event => {
    // Borrar cache viejo.
    console.log("SW: Activo");
});

self.addEventListener("fetch", event => {
    console.log("SW: ", event.request.url);

    const offlineRespuesta = fetch('pages/offline.html');
    const respuesta = fetch(event.request).catch(() => offlineRespuesta);
    event.respondWith(respuesta);

});

self.addEventListener("sync", event => {
//nota: Revisar app.js
    console.log("SW: Hay conexión!");
    console.log(event);
        console.log(event.tag);
});

self.addEventListener("push", event => {
//nota: Revisar app.js
    console.log("SW: Notificación recibida!");
});