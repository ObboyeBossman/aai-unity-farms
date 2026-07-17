import type {Metadata} from 'next';
import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { ModernBackground } from '@/components/ModernBackground';
import { ThemeProvider } from '@/components/ThemeProvider';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AAI Unity Farms — Premium Poultry & Ghanaian Agricultural Products',
  description: 'Fresh eggs, poultry, and premium Ghanaian foods from AAI Unity Farms, Dormaa Ahenkro, Ghana. Local supply and international export to UK & EU.',
  icons: {
    icon: '/logo.png?v=2',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body bg-farm-surface text-farm-text antialiased transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen relative">
              <ModernBackground />
              <AnnouncementBar />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <WhatsAppButton />
            </div>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
