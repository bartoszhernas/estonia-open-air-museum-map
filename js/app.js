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

    // Custom house marker icon
    const houseIcon = L.divIcon({
        className: 'house-marker',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" width="28" height="35">
            <path d="M16 2 L2 16 L6 16 L6 36 L26 36 L26 16 L30 16 Z" fill="#8B4513" stroke="#5C3D2E" stroke-width="1.5"/>
            <rect x="12" y="22" width="8" height="14" fill="#D2B48C" stroke="#5C3D2E" stroke-width="1"/>
            <rect x="9" y="18" width="5" height="5" fill="#FFF8DC" stroke="#5C3D2E" stroke-width="0.8"/>
            <rect x="18" y="18" width="5" height="5" fill="#FFF8DC" stroke="#5C3D2E" stroke-width="0.8"/>
        </svg>`,
        iconSize: [28, 35],
        iconAnchor: [14, 35],
        popupAnchor: [0, -35]
    });

    // Type labels for display
    const typeLabels = {
        chapel: 'Chapel',
        inn: 'Inn',
        farmhouse: 'Farmhouse',
        'cotter dwelling': 'Cotter Dwelling',
        "blacksmith's farm": "Blacksmith's Farm",
        "cotter's farm": "Cotter's Farm",
        "fisherman's farm": "Fisherman's Farm",
        'post windmill': 'Post Windmill',
        watermill: 'Watermill',
        'Dutch-type windmill': 'Dutch Windmill',
        school: 'School',
        'fire station': 'Fire Station',
        shop: 'Village Shop',
        'tenant farm': 'Tenant Farm',
        'prayer house': 'Prayer House',
        'fishing house': 'Fishing House',
        dwelling: 'Dwelling',
        'apartment building': 'Apartment Building',
        "soldier's homestead": "Soldier's Homestead"
    };

    // Load building data
    fetch('data/buildings.json')
        .then(response => response.json())
        .then(buildings => {
            buildings.forEach(building => {
                const typeLabel = typeLabels[building.type] || building.type;
                const popupContent = `
                    <div class="building-popup">
                        <h3>${building.name}</h3>
                        <div class="name-en">${building.nameEn}</div>
                        <div class="meta"><strong>Type:</strong> ${typeLabel}</div>
                        <div class="meta"><strong>Built:</strong> ${building.yearBuilt}</div>
                        <div class="meta"><strong>From:</strong> ${building.originalLocation}</div>
                        <div class="meta"><strong>County:</strong> ${building.county}</div>
                        <div class="description">${building.description}</div>
                        <a class="museum-link" href="${building.museumLink}" target="_blank" rel="noopener">
                            View on Museum Site &rarr;
                        </a>
                    </div>
                `;

                L.marker([building.lat, building.lng], { icon: houseIcon })
                    .addTo(map)
                    .bindPopup(popupContent, { maxWidth: 300 });
            });
        });

    // Museum location marker
    const museumIcon = L.divIcon({
        className: 'museum-marker',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 40" width="32" height="36">
            <rect x="4" y="16" width="28" height="22" fill="#2E4E2E" stroke="#1a301a" stroke-width="1.5"/>
            <polygon points="18,4 2,16 34,16" fill="#2E4E2E" stroke="#1a301a" stroke-width="1.5"/>
            <rect x="10" y="22" width="4" height="8" fill="#FFF8DC" stroke="#1a301a" stroke-width="0.8"/>
            <rect x="22" y="22" width="4" height="8" fill="#FFF8DC" stroke="#1a301a" stroke-width="0.8"/>
            <rect x="14" y="26" width="8" height="12" fill="#D2B48C" stroke="#1a301a" stroke-width="0.8"/>
        </svg>`,
        iconSize: [32, 36],
        iconAnchor: [16, 36],
        popupAnchor: [0, -36]
    });

    L.marker([59.4312, 24.6354], { icon: museumIcon })
        .addTo(map)
        .bindPopup(`
            <div class="building-popup">
                <h3>Eesti Vabaõhumuuseum</h3>
                <div class="name-en">Estonian Open Air Museum</div>
                <div class="description">Rocca al Mare, Tallinn — where all these buildings now stand together.</div>
                <a class="museum-link" href="https://evm.ee" target="_blank" rel="noopener">Visit Museum Website &rarr;</a>
            </div>
        `, { maxWidth: 300 });
});
