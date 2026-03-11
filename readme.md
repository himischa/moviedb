# Movie Catalogue

Movie data is sourced from the [TMDB API](https://www.themoviedb.org/). The app shell loads instantly from cache after the first visit. Previously browsed movies and detail pages are also cached, so they remain accessible without an internet connection. A fresh visit with no prior cache still requires internet to fetch movie data.

## Features

- **Now Playing** — browse movies currently showing in cinemas
- **Upcoming** — see what's coming soon
- **Movie Detail** — full detail view with overview, rating, and backdrop
- **Like / Favourites** — save movies locally using IndexedDB; liked movies are available offline regardless of cache
- **Real-time feed** — WebSocket server pushes random movie updates every 5 seconds

## Tech Stack

- Vanilla JavaScript (ES Modules)
- Webpack 5 + webpack-dev-server
- Workbox (service worker / offline caching)
- IndexedDB via `idb`
- TMDB API
- WebSocket (`ws`)
- CodeceptJS + Puppeteer (end-to-end tests)

## Getting Started

### Prerequisites

- Node.js v18 or higher
- A free [TMDB API key](https://www.themoviedb.org/settings/api)
- You must login to the TMDB to get the API key yourself

### Install

```bash
npm install
```

### Run locally

```bash
# Start the app (http://localhost:3000)
npm start

# In a separate terminal — start the WebSocket server
node src/_ws/server.js
```

