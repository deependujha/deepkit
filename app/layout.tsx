import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeepKit',
  description: 'Lightweight developer utilities with no backend, no tracking, and no nonsense.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
