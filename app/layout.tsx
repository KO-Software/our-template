import { Metadata } from 'next';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { PropsWithChildren } from 'react';
import './globals.css';

const title = 'probie.ai - hire smarter with zero risk';
const description = 'probie.ai is a platform that automates recruiting pipeline filtering using real tickets from your company';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
