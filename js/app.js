document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map', {
        center: [58.6, 25.0],
        zoom: 7,
        minZoom: 6,
        maxZoom: 15,
        maxBounds: [
            [56.5, 20.5],
            [60.0, 29.0]
        ],
        maxBoundsViscosity: 1.0
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
});
