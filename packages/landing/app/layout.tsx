import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Labware.icu - AI Agent Management Platform',
  description: 'Your AI Organization, Ready to Serve. 64 specialized AI agents with dignity through utility for schools and hospitals.',
  keywords: ['AI agents', 'agent management', 'AI platform', 'healthcare AI', 'education AI', 'HIPAA compliant', 'FERPA compliant'],
  authors: [{ name: 'Labware.icu' }],
  openGraph: {
    title: 'Labware.icu - AI Agent Management Platform',
    description: '64 specialized AI agents ready to serve schools and hospitals with dignity through utility',
    type: 'website',
    url: 'https://www.labware.icu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Labware.icu - AI Agent Management Platform',
    description: '64 specialized AI agents ready to serve schools and hospitals',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
