# Chat NE

A starter Next.js + TypeScript + Tailwind CSS project scaffolded for realtime chat with Firebase.

## Features

- Next.js app router structure
- TypeScript configuration
- Tailwind CSS styling
- Firebase initialization helper
- Chat layout ready for realtime messaging logic

## Setup

1. Install dependencies:

```bash
cd chat-ne
npm install
```

2. Add Firebase environment variables to `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

3. Run dev server:

```bash
npm run dev
```

## Next steps

- Add Firebase authentication or Firestore listeners
- Replace the dummy messages area in `components/ChatLayout.tsx`
- Implement send and receive logic in the chat UI
