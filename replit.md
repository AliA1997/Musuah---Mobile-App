# Musuah (mūsūʾah) - The Free Encyclopedia

## Overview
A React Native / Expo app for a free Islamic encyclopedia with web support. Built with Expo Router, NativeWind (Tailwind CSS for RN), MobX state management, and i18n multi-language support.

## Tech Stack
- **Framework**: Expo (v54) with Expo Router (v6)
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS) + class-variance-authority
- **State Management**: MobX + Zustand
- **Bundler**: Metro (via Expo)
- **i18n**: i18next + react-i18next
- **HTTP Client**: Axios

## Project Structure
- `app/` - Expo Router screens (file-based routing)
- `api/` - API client functions (Wikipedia, Wikibooks, search, agent, dashboard, payment)
- `components/` - Reusable UI components
  - `nativewindui/` - Platform-aware NativeWind components
- `store/` - MobX/Zustand stores
- `models/` - TypeScript type definitions
- `hooks/` - Custom React hooks
- `theme/` - Color and theme definitions
- `app/i18n/` - Internationalization setup and locale files

## Running the App
- **Web dev**: `npm run web` (runs on port 5000 via `RCT_METRO_PORT=5000`)
- **iOS**: `npm run ios`
- **Android**: `npm run android`

## Key Configuration
- Port: 5000 (set via `RCT_METRO_PORT=5000` env var)
- Web platform uses `components/nativewindui/Text.web.tsx` instead of `react-native-uitextview` (native-only module incompatible with web)

## Deployment
- Target: Static site
- Build command: `RCT_METRO_PORT=5000 npx expo export --platform web`
- Output directory: `dist/`
