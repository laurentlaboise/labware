import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labware.icu - AI Agent Management',
  description: '64 specialized AI agents for schools and hospitals',
  metadataBase: new URL('https://app.labware.icu'),
  openGraph: {
    title: 'Labware.icu - AI Agent Management',
    description: '64 specialized AI agents for schools and hospitals',
    url: 'https://app.labware.icu',
    siteName: 'Labware.icu',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Labware.icu - AI Agent Management',
    description: '64 specialized AI agents for schools and hospitals',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
