import type {Metadata} from 'next';
import './globals.css';
import { Playfair_Display, Inter, DM_Sans } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AnnouncementBar } from '@/components/AnnouncementBar';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: 'AAI Unity Farms — Premium Poultry & Ghanaian Agricultural Products',
  description: 'Fresh eggs, poultry, and premium Ghanaian foods from AAI Unity Farms, Dormaa Ahenkro, Ghana. Local supply and international export to UK & EU.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-[#FAFAFA] text-[#212121] antialiased" suppressHydrationWarning>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <AnnouncementBar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
