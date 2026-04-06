document.addEventListener('DOMContentLoaded', function () {

    // ── i18n ──
    const translations = {
        en: {
            title: 'Estonian Open Air Museum',
            subtitle: 'Where the buildings came from',
            buildings: 'Buildings',
            legendFarm: 'Farm / dwelling',
            legendOther: 'Other building (mill, chapel, school...)',
            legendSub: 'Sub-building (linked to a farm)',
            legendLine: 'Buildings brought together to form one farm',
            legendMuseum: 'Open Air Museum (Tallinn)',
            type: 'Type',
            built: 'Built',
            from: 'From',
            county: 'County',
            viewMuseum: 'View on Museum Site',
            viewFarm: 'View Farm on Museum Site',
            visitMuseum: 'Visit Museum Website',
            partOf: 'Part of',
            relocatedTo: 'Originally stood here, then relocated to the museum to form the',
            exhibitAt: 'exhibit together with buildings from other villages.',
            museumDesc: 'Rocca al Mare, Tallinn — where all these buildings now stand together.',
            linked: 'linked',
            region: 'Region',
            regionNorthern: 'Northern Estonia', regionSouthern: 'Southern Estonia',
            regionWestern: 'Western Estonia', regionIslands: 'Islands', regionStandalone: 'Stand-alone',
            pageTitle: 'Estonian Open Air Museum — Where They Came From'
        },
        et: {
            title: 'Eesti Vabaõhumuuseum',
            subtitle: 'Kust hooned pärit on',
            buildings: 'Hooned',
            legendFarm: 'Talu / elamu',
            legendOther: 'Muu hoone (veski, kabel, kool...)',
            legendSub: 'Kõrvalhoone (seotud taluga)',
            legendLine: 'Eri küladest kokku toodud hooned',
            legendMuseum: 'Vabaõhumuuseum (Tallinn)',
            type: 'Tüüp',
            built: 'Ehitatud',
            from: 'Päritolu',
            county: 'Maakond',
            viewMuseum: 'Vaata muuseumi lehel',
            viewFarm: 'Vaata talu muuseumi lehel',
            visitMuseum: 'Külasta muuseumi veebilehte',
            partOf: 'Osa talust',
            relocatedTo: 'Asus algselt siin, seejärel viidi muuseumisse, et moodustada',
            exhibitAt: 'ekspositsiooni koos teiste külade hoonetega.',
            museumDesc: 'Rocca al Mare, Tallinn — kus kõik need hooned nüüd koos seisavad.',
            linked: 'seotud',
            pageTitle: 'Eesti Vabaõhumuuseum — Kust hooned pärit on'
        },
        de: {
            title: 'Estnisches Freilichtmuseum',
            subtitle: 'Woher die Gebäude stammen',
            buildings: 'Gebäude',
            legendFarm: 'Bauernhof / Wohnhaus',
            legendOther: 'Anderes Gebäude (Mühle, Kapelle, Schule...)',
            legendSub: 'Nebengebäude (zu einem Hof gehörend)',
            legendLine: 'Gebäude aus verschiedenen Dörfern zusammengeführt',
            legendMuseum: 'Freilichtmuseum (Tallinn)',
            type: 'Typ',
            built: 'Erbaut',
            from: 'Herkunft',
            county: 'Kreis',
            viewMuseum: 'Auf der Museumsseite ansehen',
            viewFarm: 'Hof auf der Museumsseite ansehen',
            visitMuseum: 'Museumswebseite besuchen',
            partOf: 'Teil von',
            relocatedTo: 'Stand ursprünglich hier und wurde ins Museum gebracht, um die',
            exhibitAt: 'Ausstellung mit Gebäuden aus anderen Dörfern zu bilden.',
            museumDesc: 'Rocca al Mare, Tallinn — wo alle diese Gebäude heute gemeinsam stehen.',
            linked: 'verbunden',
            pageTitle: 'Estnisches Freilichtmuseum — Woher die Gebäude stammen'
        }
    };

    const langFlags = {
        en: '🇬🇧',
        et: '🇪🇪',
        de: '🇩🇪'
    };

    const langNames = {
        en: 'English',
        et: 'Eesti',
        de: 'Deutsch'
    };

    // Type labels per language
    const typeLabelsI18n = {
        en: {
            chapel: 'Chapel', inn: 'Inn', farmhouse: 'Farmhouse',
            'cotter dwelling': 'Cotter Dwelling', "blacksmith's farm": "Blacksmith's Farm",
            "cotter's farm": "Cotter's Farm", "fisherman's farm": "Fisherman's Farm",
            'post windmill': 'Post Windmill', watermill: 'Watermill',
            'Dutch-type windmill': 'Dutch Windmill', school: 'School',
            'fire station': 'Fire Station', shop: 'Village Shop',
            'tenant farm': 'Tenant Farm', 'prayer house': 'Prayer House',
            'fishing house': 'Fishing House', dwelling: 'Dwelling',
            'apartment building': 'Apartment Building', "soldier's homestead": "Soldier's Homestead"
        },
        et: {
            chapel: 'Kabel', inn: 'Kõrts', farmhouse: 'Talumaja',
            'cotter dwelling': 'Vabadiku elamu', "blacksmith's farm": "Sepa talu",
            "cotter's farm": "Vabadiku talu", "fisherman's farm": "Kaluritalu",
            'post windmill': 'Pukktuulik', watermill: 'Vesiveski',
            'Dutch-type windmill': 'Hollandi tuulik', school: 'Kool',
            'fire station': 'Tuletõrjemaja', shop: 'Külapood',
            'tenant farm': 'Renditalu', 'prayer house': 'Palvemaja',
            'fishing house': 'Kalurielamu', dwelling: 'Elamu',
            'apartment building': 'Korterelamu', "soldier's homestead": "Soldatitalu"
        },
        de: {
            chapel: 'Kapelle', inn: 'Gasthof', farmhouse: 'Bauernhaus',
            'cotter dwelling': 'Häuslerwohnung', "blacksmith's farm": "Schmiedehof",
            "cotter's farm": "Häuslerhof", "fisherman's farm": "Fischerhof",
            'post windmill': 'Bockwindmühle', watermill: 'Wassermühle',
            'Dutch-type windmill': 'Holländerwindmühle', school: 'Schule',
            'fire station': 'Feuerwehrhaus', shop: 'Dorfladen',
            'tenant farm': 'Pachthof', 'prayer house': 'Bethaus',
            'fishing house': 'Fischerhaus', dwelling: 'Wohnhaus',
            'apartment building': 'Wohnblock', "soldier's homestead": "Soldatenhof"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    function t(key) { return translations[currentLang][key] || key; }
    function typeLabel(type) { return typeLabelsI18n[currentLang][type] || type; }

    function updateStaticUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = t(el.dataset.i18n);
        });
        document.getElementById('currentLang').textContent = langFlags[currentLang] + ' ' + langNames[currentLang];
        document.title = t('pageTitle');
        document.documentElement.lang = currentLang;

        // Update dropdown options
        const dropdown = document.getElementById('langDropdown');
        dropdown.innerHTML = '';
        Object.keys(translations).forEach(lang => {
            if (lang === currentLang) return;
            const option = document.createElement('button');
            option.className = 'lang-option';
            option.textContent = langFlags[lang] + ' ' + langNames[lang];
            option.addEventListener('click', function (e) {
                e.stopPropagation();
                currentLang = lang;
                localStorage.setItem('lang', currentLang);
                dropdown.classList.remove('open');
                updateStaticUI();
                if (buildingsData) renderBuildings();
            });
            dropdown.appendChild(option);
        });
    }
    const map = L.map('map', {
        center: [58.6, 25.0],
        zoom: 7,
        minZoom: 6,
        maxZoom: 15
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Region colors and data
    const regionColors = {
        northern: '#4A90D9',
        southern: '#E07B39',
        western: '#5BA55B',
        islands: '#9B59B6',
        standalone: '#8B7355'
    };

    // Region labels placed on map
    const regionLabelPositions = {
        northern: [59.35, 25.8],
        southern: [58.0, 26.5],
        western: [58.7, 24.0],
        islands: [58.4, 22.5]
    };

    const regionLabelNames = {
        en: { northern: 'Northern Estonia', southern: 'Southern Estonia', western: 'Western Estonia', islands: 'Islands' },
        et: { northern: 'Põhja-Eesti', southern: 'Lõuna-Eesti', western: 'Lääne-Eesti', islands: 'Saared' },
        de: { northern: 'Nordestland', southern: 'Südestland', western: 'Westestland', islands: 'Inseln' }
    };

    // Draw region labels (permanent, re-created on language switch)
    let regionLabelLayers = [];

    function renderRegionLabels() {
        regionLabelLayers.forEach(l => map.removeLayer(l));
        regionLabelLayers = [];

        Object.entries(regionLabelPositions).forEach(([region, pos]) => {
            const color = regionColors[region];
            const name = regionLabelNames[currentLang][region];
            const label = L.marker(pos, {
                icon: L.divIcon({
                    className: 'region-label',
                    html: `<span style="color: ${color}; border-color: ${color}">${name}</span>`,
                    iconSize: [120, 24],
                    iconAnchor: [60, 12]
                }),
                interactive: false
            }).addTo(map);
            regionLabelLayers.push(label);
        });
    }

    // Icon generators with region-colored borders
    function makeHouseIcon(regionColor) {
        return L.divIcon({
            className: 'house-marker',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 38" width="26" height="33">
                <defs>
                    <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0.5" dy="1" stdDeviation="1" flood-opacity="0.25"/>
                    </filter>
                </defs>
                <g filter="url(#s)">
                    <path d="M15 3 L3 14 L3 34 L27 34 L27 14 Z" fill="#F5E6D0" stroke="${regionColor}" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M15 3 L3 14 L27 14 Z" fill="${regionColor}" opacity="0.25"/>
                    <line x1="15" y1="3" x2="15" y2="14" stroke="${regionColor}" stroke-width="0.8" opacity="0.4"/>
                    <rect x="11" y="24" width="8" height="10" rx="0.5" fill="${regionColor}" opacity="0.3"/>
                </g>
            </svg>`,
            iconSize: [26, 33],
            iconAnchor: [13, 33],
            popupAnchor: [0, -33]
        });
    }

    function makeOtherIcon(regionColor) {
        return L.divIcon({
            className: 'other-marker',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 30" width="18" height="25">
                <defs>
                    <filter id="s2" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0.5" dy="1" stdDeviation="0.8" flood-opacity="0.2"/>
                    </filter>
                </defs>
                <g filter="url(#s2)">
                    <circle cx="11" cy="11" r="9" fill="#F5E6D0" stroke="${regionColor}" stroke-width="2"/>
                    <circle cx="11" cy="11" r="3.5" fill="${regionColor}" opacity="0.35"/>
                    <line x1="11" y1="20" x2="11" y2="28" stroke="${regionColor}" stroke-width="1.5" stroke-linecap="round"/>
                </g>
            </svg>`,
            iconSize: [18, 25],
            iconAnchor: [9, 25],
            popupAnchor: [0, -25]
        });
    }

    function makeSubIcon(regionColor) {
        return L.divIcon({
            className: 'sub-marker',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 22" width="13" height="18">
                <circle cx="8" cy="8" r="6" fill="#F5E6D0" stroke="${regionColor}" stroke-width="1.5"/>
                <circle cx="8" cy="8" r="2" fill="${regionColor}" opacity="0.35"/>
                <line x1="8" y1="14" x2="8" y2="20" stroke="${regionColor}" stroke-width="1.2" stroke-linecap="round"/>
            </svg>`,
            iconSize: [13, 18],
            iconAnchor: [6.5, 18],
            popupAnchor: [0, -18]
        });
    }

    // Types that are main buildings (farmer's house / dwelling)
    const mainBuildingTypes = new Set([
        'farmhouse', 'cotter dwelling', "blacksmith's farm", "cotter's farm",
        "fisherman's farm", 'tenant farm', "soldier's homestead", 'dwelling',
        'apartment building'
    ]);

    // Sidebar elements
    const sidebar = document.getElementById('sidebar');
    const sidebarList = document.getElementById('sidebarList');
    const listToggle = document.getElementById('listToggle');
    const sidebarClose = document.getElementById('sidebarClose');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        listToggle.classList.toggle('active');
    }

    listToggle.addEventListener('click', toggleSidebar);
    sidebarClose.addEventListener('click', toggleSidebar);

    // Museum location marker
    const museumIcon = L.divIcon({
        className: 'museum-marker',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 38" width="30" height="34">
            <defs>
                <filter id="sm" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0.5" dy="1" stdDeviation="1" flood-opacity="0.3"/>
                </filter>
            </defs>
            <g filter="url(#sm)">
                <rect x="5" y="14" width="24" height="20" rx="1" fill="#2E4E2E" stroke="#1a301a" stroke-width="1.5"/>
                <polygon points="17,3 3,14 31,14" fill="#3a6b3a" stroke="#1a301a" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="13" y="22" width="8" height="12" rx="0.5" fill="#FFF8DC" opacity="0.6"/>
                <line x1="17" y1="3" x2="17" y2="14" stroke="#FFF8DC" stroke-width="0.6" opacity="0.3"/>
            </g>
        </svg>`,
        iconSize: [30, 34],
        iconAnchor: [15, 34],
        popupAnchor: [0, -34]
    });

    // Track all map layers for re-rendering on language switch
    let mapLayers = [];
    let buildingsData = null;

    function clearMapLayers() {
        mapLayers.forEach(layer => map.removeLayer(layer));
        mapLayers = [];
    }

    function renderBuildings() {
        clearMapLayers();
        sidebarList.innerHTML = '';
        renderRegionLabels();

        // Museum marker
        const museumMarker = L.marker([59.4312, 24.6354], { icon: museumIcon })
            .addTo(map)
            .bindPopup(`
                <div class="building-popup">
                    <h3>Eesti Vabaõhumuuseum</h3>
                    <div class="name-en">Estonian Open Air Museum</div>
                    <div class="description">${t('museumDesc')}</div>
                    <a class="museum-link" href="https://evm.ee" target="_blank" rel="noopener">${t('visitMuseum')} &rarr;</a>
                </div>
            `, { maxWidth: 300, autoPanPaddingTopLeft: [50, 10], autoPanPaddingBottomRight: [50, 10] });
        mapLayers.push(museumMarker);

        buildingsData.forEach((building, index) => {
            const tl = typeLabel(building.type);
            const displayName = currentLang === 'et' ? building.name : building.nameEn;
            const secondaryName = currentLang === 'et' ? building.nameEn : building.name;

            const popupContent = `
                <div class="building-popup">
                    <h3>${displayName}</h3>
                    <div class="name-en">${secondaryName}</div>
                    <div class="meta"><strong>${t('type')}:</strong> ${tl}</div>
                    <div class="meta"><strong>${t('built')}:</strong> ${building.yearBuilt}</div>
                    <div class="meta"><strong>${t('from')}:</strong> ${building.originalLocation}</div>
                    <div class="meta"><strong>${t('county')}:</strong> ${building.county}</div>
                    <div class="description">${building.description}</div>
                    <a class="museum-link" href="${building.museumLink}" target="_blank" rel="noopener">
                        ${t('viewMuseum')} &rarr;
                    </a>
                </div>
            `;

            const isMain = mainBuildingTypes.has(building.type);
            const rColor = regionColors[building.region] || regionColors.standalone;
            const marker = L.marker([building.lat, building.lng], { icon: isMain ? makeHouseIcon(rColor) : makeOtherIcon(rColor) })
                .addTo(map)
                .bindPopup(popupContent, { maxWidth: 300, autoPanPaddingTopLeft: [50, 10], autoPanPaddingBottomRight: [50, 10] });
            mapLayers.push(marker);

            // Draw sub-buildings and connecting lines
            if (building.subBuildings && building.subBuildings.length > 0) {
                building.subBuildings.forEach(sub => {
                    const line = L.polyline(
                        [[building.lat, building.lng], [sub.lat, sub.lng]],
                        { color: rColor, weight: 2, opacity: 0.5, dashArray: '6, 8' }
                    ).addTo(map);
                    mapLayers.push(line);

                    const subPopup = `
                        <div class="building-popup">
                            <h3>${sub.name}</h3>
                            <div class="name-en">${t('partOf')} ${displayName}</div>
                            <div class="meta"><strong>${t('from')}:</strong> ${sub.originalLocation}</div>
                            <div class="description">${t('relocatedTo')} ${displayName} ${t('exhibitAt')}</div>
                            <a class="museum-link" href="${building.museumLink}" target="_blank" rel="noopener">
                                ${t('viewFarm')} &rarr;
                            </a>
                        </div>
                    `;

                    const subMarker = L.marker([sub.lat, sub.lng], { icon: makeSubIcon(rColor) })
                        .addTo(map)
                        .bindPopup(subPopup, { maxWidth: 280, autoPanPaddingTopLeft: [50, 10], autoPanPaddingBottomRight: [50, 10] });
                    mapLayers.push(subMarker);
                });
            }

            // Sidebar list item
            const subCount = building.subBuildings ? building.subBuildings.length : 0;
            const subLabel = subCount > 0 ? ` &middot; ${subCount} ${t('linked')}` : '';
            const item = document.createElement('div');
            item.className = 'sidebar-item';
            item.innerHTML = `
                <h4>${displayName}</h4>
                <p class="item-subtitle">${secondaryName}</p>
                <p class="item-meta">${tl} &middot; ${building.county}${subLabel}</p>
            `;
            item.addEventListener('click', function () {
                sidebarList.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                map.setView([building.lat, building.lng], 10, { animate: true });
                marker.openPopup();
                if (window.innerWidth <= 600) {
                    sidebar.classList.remove('open');
                    listToggle.classList.remove('active');
                }
            });
            sidebarList.appendChild(item);
        });
    }

    // Language dropdown toggle
    const langSelector = document.querySelector('.lang-selector');
    const langDropdown = document.getElementById('langDropdown');

    langSelector.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    document.getElementById('langToggle').addEventListener('click', function () {
        langDropdown.classList.toggle('open');
    });

    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function () {
        langDropdown.classList.remove('open');
    });

    // Initial UI
    updateStaticUI();

    // Load building data
    fetch('data/buildings.json')
        .then(response => response.json())
        .then(buildings => {
            buildingsData = buildings;
            renderBuildings();
        });
});
