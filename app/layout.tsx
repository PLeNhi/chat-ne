import type { Metadata } from 'next';
import { ProvideSocketIoClient } from '../providers/socket-client';

import './globals.css';

export const metadata: Metadata = {
  title: 'Chat NE',
  description: 'Real-time chat layout with Next.js, TypeScript, Tailwind, and Firebase.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProvideSocketIoClient>
          {children}
        </ProvideSocketIoClient>
        </body>
    </html>
  );
}
