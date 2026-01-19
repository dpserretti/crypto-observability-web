# Crypto Observability Web

A frontend dashboard built with React and TypeScript to visualize crypto market data and API observability metrics provided by the backend service.

This application focuses on:
- Data visualization
- Secure authentication
- Clean component architecture
- Production-ready frontend patterns

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query (React Query)
- Axios
- JWT-based authentication

---

## Project Structure

The frontend is organized by responsibility and feature, not by file type:

src/
- components/     # Reusable UI and layout components
- features/       # Feature-based modules (auth, dashboard, metrics)
- hooks/          # Shared custom hooks
- services/       # API clients and HTTP configuration
- routes/         # Route definitions and protected routes
- styles/         # Global styles and Tailwind config
- main.tsx        # Application entry point

---

## Features

- JWT authentication with protected routes
- Token refresh handling
- Responsive dashboard layout
- Charts and metrics visualization
- Error and loading state handling
- API-driven state management

---

## Getting Started

### Requirements

- Node.js 18+
- npm or yarn

### Setup

npm install

### Run the application

npm run dev

The app will be available at:
http://localhost:5173

---

## Environment Variables

VITE_API_BASE_URL=http://localhost:8000

---

## Commit Convention

This repository follows the Conventional Commits specification:

- feat: New feature
- fix: Bug fix
- chore: Maintenance tasks
- docs: Documentation changes
- refactor: Code refactoring
- test: Adding or fixing tests

---

## License

MIT