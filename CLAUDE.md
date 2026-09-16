# Roov — handoff for Claude Code

Roov is a group road-trip app: host or join a ride, live convoy tracking with a moving geofence,
RoovMates (auto-follow after a shared ride), a Strava-style ride feed, medals with physical bike
stickers, Roov Points and referrals. Tagline: "Your People, Your Roads, and Your Chaos."

## Source of truth

- `docs/roov-prd-v1.1.html` — full PRD. Requirement IDs (HR-, JR-, LR-, ER-, RM-, MD-, PT-, RF-) are
  referenced in code comments and tickets.
- `prototype/index.html` — clickable UI spec for every MVP screen (open in a browser; the left panel
  jumps between screens). Match its layout, copy, colours and interactions. Mock data lives in `MOCK`;
  every real integration point is marked `TODO(API)`.
- `.env.example` — every API key, marked [PUBLIC] or [SECRET].

## Rules

- Secrets only in the backend `.env`. The app gets only [PUBLIC] keys, restricted by bundle ID/domain.
- Location is shared only while a ride leg is live; tracking must stop on every device when a leg ends.
- Roov Points have no cash value: no top-ups, transfers or withdrawals (keeps us out of RBI PPI rules).
- Top speed is only ever visible to the rider themself. No speed leaderboards.
- Posts publish only after the ride ends, only by user action, with privacy zones applied.

## Suggested stack (confirm before starting)

- App: Flutter (or React Native). Background location via a foreground service on Android.
- Maps: MapLibre + MapTiler tiles; hand off navigation to Google/Apple Maps.
- Backend: Node (NestJS) or Go; PostgreSQL + PostGIS; Redis (GEO + streams); WebSocket gateway.
- Push: FCM (APNs through Firebase). OTP: Firebase Phone Auth or MSG91.
- Payments: Razorpay (order on server, verify signature on server).
- Media: S3 or Cloudflare R2 + CDN, presigned uploads, moderation before a photo is visible.

## Suggested first tasks

1. Scaffold the app and port the prototype screens with the mock data (UI first, no backend).
2. Design tokens from the prototype `:root` (light and dark).
3. Background-location spike on real Android devices (battery target < 6%/hour).
4. Backend: auth, rides, legs, join by code, start/end leg, positions over WebSocket.
5. Geofence engine (lead-anchored first), alerts, SOS.
6. Ride summary -> RoovMates -> ride posts -> feed.
7. Points ledger, referrals, medals, sticker claims, Razorpay passes.
