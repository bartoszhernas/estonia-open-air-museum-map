# Estonian Open Air Museum — Origins Map

## Overview

A single-page static website showing an interactive map of Estonia with markers indicating where each historic building in the Estonian Open Air Museum (Eesti Vabaõhumuuseum) originally stood before being relocated to the museum in Tallinn.

## Architecture

- **Static site** — HTML, CSS, JS. No framework, no build tools.
- **Leaflet.js** — open-source map library for the interactive map.
- **OpenStreetMap tiles** — free, no API key required.
- **Data** — `data/buildings.json` containing 27 buildings with names, types, coordinates, descriptions, and museum links.

```
project/
├── index.html
├── css/style.css
├── js/app.js
├── data/buildings.json
└── images/
```

## Layout

- **Header** — site title with warm wood-grain background, rustic serif typography.
- **Full-width map** — centered on Estonia (~58.5N, 25E), zoom level showing the whole country.
- **Custom markers** — house/barn-style icons in earthy tones.
- **Popup on click** — styled panel showing:
  - Building name (Estonian + English)
  - Type and year built
  - Original location and county
  - Short description
  - Link to museum page

## Visual Style

- **Palette:** browns (#8B4513, #D2B48C), creams (#FFF8DC), forest greens (#2E4E2E), amber (#FFBF00)
- **Typography:** Playfair Display (headings), Source Sans Pro (body) via Google Fonts
- **Map tiles:** Stamen Watercolor or warm-filtered OSM tiles for rustic feel
- **Markers:** Custom SVG house icons in earthy brown

## Data

27 buildings sourced from the museum website and Wikipedia, including:
- Farms (14): Sassi-Jaani, Kostriaseme, Nuki, Harjapea, Pulga, Aarte, Sepa, Ritsu, Rusi, Setu, Roosta, Juri-Jaagu, Kolga, Jaagu
- Mills (3): Natsi windmill, Kahala watermill, Kalma windmill
- Religious (2): Sutlepa Chapel, Moravian Prayer House
- Public (4): Kolu Inn, Kuie School, Orgmetsa Fire Station, Lau Village Shop
- Other (4): Fishing House, Russian House, Kolkhoz Apartment, net sheds

Each entry has: name, nameEn, type, originalLocation, county, lat, lng, yearBuilt, description, museumLink.

## Interactions

- Pan and zoom the map freely
- Click marker to open popup with building details
- Popup includes link to museum's page for that building
- Map bounded to Estonia's extent to prevent wandering

## Hosting

Static files — deployable to GitHub Pages, Netlify, or any static host.
