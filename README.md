# Page Turner 📚

A library loan web app where users browse a catalog, add books to a borrow
basket, check out with pickup details, and track or extend their loans.

Built as a hands-on practice project to solidify React fundamentals.

## Features

- Browse the catalog (data loaded via React Router loaders)
- Borrow basket with a per-loan book limit
- Checkout form with server-style validation (React Router actions)
- Loan status page with lazily loaded book details
- Extend a loan without leaving the page (fetchers + PATCH)
- Auto-fill pickup address using the browser Geolocation API
- Basket and username persisted across refreshes

## Tech Stack

React · Vite · React Router (data router) · Redux Toolkit · Tailwind CSS ·
json-server

## Getting Started

npm install
npm run server # starts json-server on :3000
npm run dev # starts the app
