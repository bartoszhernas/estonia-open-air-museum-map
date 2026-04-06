# Estonian Open Air Museum Origins Map — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static website with an interactive Leaflet map of Estonia showing where each Open Air Museum building originally stood.

**Architecture:** Single HTML page loading Leaflet.js from CDN, styled with custom CSS, fetching building data from a local JSON file. No build tools or frameworks.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Leaflet.js (CDN), Google Fonts (Playfair Display, Source Sans Pro)

---

### Task 1: Create base HTML with Leaflet map

**Files:**
- Create: `index.html`

**Step 1: Create index.html with Leaflet boilerplate**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estonian Open Air Museum — Where They Came From</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header class="site-header">
        <h1>Estonian Open Air Museum</h1>
        <p class="subtitle">Where the buildings came from</p>
    </header>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

**Step 2: Open in browser to verify blank page with header loads**

Run: `open index.html`
Expected: Page loads, header text visible, no console errors

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add base HTML with Leaflet and font imports"
```

---

### Task 2: Add base CSS styling

**Files:**
- Create: `css/style.css`

**Step 1: Create style.css with header and map layout**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Source Sans 3', sans-serif;
    background-color: #FFF8DC;
    color: #3B2F1E;
}

.site-header {
    background-color: #5C3D2E;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="200" height="200" filter="url(%23n)" opacity="0.08"/></svg>');
    padding: 1.2rem 2rem;
    text-align: center;
    border-bottom: 4px solid #8B4513;
}

.site-header h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: #FFF8DC;
    letter-spacing: 0.02em;
}

.site-header .subtitle {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: #D2B48C;
    font-style: italic;
    margin-top: 0.3rem;
}

#map {
    width: 100%;
    height: calc(100vh - 90px);
}

/* Popup styling */
.leaflet-popup-content-wrapper {
    border-radius: 6px;
    font-family: 'Source Sans 3', sans-serif;
    box-shadow: 0 3px 14px rgba(59, 47, 30, 0.3);
    border: 2px solid #8B4513;
}

.leaflet-popup-tip {
    border-top-color: #8B4513;
}

.building-popup {
    max-width: 280px;
    line-height: 1.5;
}

.building-popup h3 {
    font-family: 'Playfair Display', serif;
    color: #5C3D2E;
    font-size: 1.15rem;
    margin-bottom: 0.15rem;
}

.building-popup .name-en {
    font-size: 0.9rem;
    color: #8B7355;
    margin-bottom: 0.5rem;
}

.building-popup .meta {
    font-size: 0.85rem;
    color: #6B5744;
    margin-bottom: 0.4rem;
}

.building-popup .meta strong {
    color: #5C3D2E;
}

.building-popup .description {
    font-size: 0.9rem;
    margin: 0.5rem 0;
    color: #3B2F1E;
}

.building-popup .museum-link {
    display: inline-block;
    margin-top: 0.4rem;
    padding: 0.35rem 0.8rem;
    background-color: #5C3D2E;
    color: #FFF8DC;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: background-color 0.2s;
}

.building-popup .museum-link:hover {
    background-color: #8B4513;
}
```

**Step 2: Open in browser to verify header styling**

Run: `open index.html`
Expected: Brown header with cream text, rustic feel, map area fills viewport

**Step 3: Commit**

```bash
git add css/style.css
git commit -m "feat: add rustic CSS styling for header, map, and popups"
```

---

### Task 3: Initialize map with Estonia view

**Files:**
- Create: `js/app.js`

**Step 1: Create app.js with map initialization and tile layer**

```javascript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize map centered on Estonia
    const map = L.map('map', {
        center: [58.6, 25.0],
        zoom: 7,
        minZoom: 6,
        maxZoom: 15,
        maxBounds: [
            [56.5, 20.5],  // Southwest corner
            [60.0, 29.0]   // Northeast corner
        ],
        maxBoundsViscosity: 1.0
    });

    // Warm-toned tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);
});
```

**Step 2: Open in browser to verify map renders**

Run: `open index.html`
Expected: Interactive map of Estonia visible, bounded so you can't scroll away

**Step 3: Commit**

```bash
git add js/app.js
git commit -m "feat: initialize Leaflet map centered on Estonia with bounds"
```

---

### Task 4: Create custom house marker icon

**Files:**
- Modify: `js/app.js`

**Step 1: Add custom SVG marker icon after map initialization**

Add after the tile layer block in `app.js`:

```javascript
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
```

**Step 2: Add marker CSS to style.css**

Append to `css/style.css`:

```css
.house-marker {
    background: none;
    border: none;
}

.house-marker svg {
    filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.3));
    transition: transform 0.2s ease;
}

.house-marker:hover svg {
    transform: scale(1.15);
}
```

**Step 3: Open in browser — no visible change yet (no markers placed)**

**Step 4: Commit**

```bash
git add js/app.js css/style.css
git commit -m "feat: add custom SVG house marker icon"
```

---

### Task 5: Load building data and place markers with popups

**Files:**
- Modify: `js/app.js`

**Step 1: Add data loading and marker placement**

Add after the `houseIcon` definition in `app.js`:

```javascript
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
```

**Step 2: Open in browser — should see 27 house markers across Estonia**

Run: `open index.html`
Expected: House-shaped markers across Estonia. Clicking one opens a styled popup with building details and a museum link button.

**Step 3: Commit**

```bash
git add js/app.js
git commit -m "feat: load building data and display markers with rich popups"
```

---

### Task 6: Add museum location marker and legend

**Files:**
- Modify: `js/app.js`
- Modify: `css/style.css`

**Step 1: Add museum marker in app.js**

Add after the `fetch` block in `app.js`:

```javascript
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
                <div class="description">Rocca al Mare, Tallinn — where all 27 buildings now stand together.</div>
                <a class="museum-link" href="https://evm.ee" target="_blank" rel="noopener">Visit Museum Website &rarr;</a>
            </div>
        `, { maxWidth: 300 });
```

**Step 2: Add legend HTML to index.html**

Add before `</body>` in `index.html`:

```html
    <div class="legend">
        <div class="legend-item">
            <svg width="18" height="22" viewBox="0 0 32 40"><path d="M16 2 L2 16 L6 16 L6 36 L26 36 L26 16 L30 16 Z" fill="#8B4513" stroke="#5C3D2E" stroke-width="2"/></svg>
            <span>Original building location</span>
        </div>
        <div class="legend-item">
            <svg width="18" height="20" viewBox="0 0 36 40"><rect x="4" y="16" width="28" height="22" fill="#2E4E2E" stroke="#1a301a" stroke-width="2"/><polygon points="18,4 2,16 34,16" fill="#2E4E2E" stroke="#1a301a" stroke-width="2"/></svg>
            <span>Open Air Museum (Tallinn)</span>
        </div>
    </div>
```

**Step 3: Add legend CSS to style.css**

```css
.legend {
    position: fixed;
    bottom: 1.5rem;
    left: 1.5rem;
    background: rgba(255, 248, 220, 0.95);
    border: 2px solid #8B4513;
    border-radius: 6px;
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(59, 47, 30, 0.2);
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
}

.legend-item:last-child {
    margin-bottom: 0;
}

.museum-marker {
    background: none;
    border: none;
}

.museum-marker svg {
    filter: drop-shadow(1px 2px 2px rgba(0,0,0,0.3));
}
```

**Step 4: Verify in browser**

Expected: Green museum icon in Tallinn, legend in bottom-left corner

**Step 5: Commit**

```bash
git add index.html js/app.js css/style.css
git commit -m "feat: add museum location marker and map legend"
```

---

### Task 7: Add responsive design and polish

**Files:**
- Modify: `css/style.css`
- Modify: `index.html`

**Step 1: Add responsive CSS and warm map filter**

Append to `css/style.css`:

```css
/* Warm filter on map tiles */
.leaflet-tile-pane {
    filter: sepia(15%) saturate(90%) brightness(102%);
}

/* Responsive */
@media (max-width: 600px) {
    .site-header h1 {
        font-size: 1.3rem;
    }

    .site-header .subtitle {
        font-size: 0.9rem;
    }

    .site-header {
        padding: 0.8rem 1rem;
    }

    #map {
        height: calc(100vh - 70px);
    }

    .legend {
        bottom: 0.8rem;
        left: 0.8rem;
        font-size: 0.75rem;
        padding: 0.5rem 0.7rem;
    }

    .building-popup {
        max-width: 220px;
    }

    .building-popup h3 {
        font-size: 1rem;
    }
}
```

**Step 2: Add favicon (inline SVG) to index.html head**

Add in `<head>`:

```html
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 40'><path d='M16 2 L2 16 L6 16 L6 36 L26 36 L26 16 L30 16 Z' fill='%238B4513'/></svg>">
```

**Step 3: Verify on mobile and desktop**

Expected: Header shrinks on mobile, map fills remaining space, legend stays readable

**Step 4: Commit**

```bash
git add css/style.css index.html
git commit -m "feat: add responsive design, warm map filter, and favicon"
```

---

### Task 8: Final verification and cleanup

**Step 1: Open site and verify all functionality**

- Header displays correctly with rustic styling
- Map shows Estonia with warm-toned tiles
- 27 brown house markers visible across the country
- 1 green museum marker in Tallinn
- Clicking any marker opens popup with full details
- Museum link button works (opens in new tab)
- Map bounded to Estonia
- Legend visible in bottom-left
- Mobile responsive

**Step 2: Commit any final fixes**

```bash
git add -A
git commit -m "chore: final polish and verification"
```
