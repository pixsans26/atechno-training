import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navabr from "@/components/navabr";
import Footer from "@/components/footer";
import NavbarMobile from "@/components/navMobile";
import Whatsapp from "@/components/widgets/Whatsapp";
import PopupModal from "@/components/WelcomePopup";
import { getPopup } from "@/api/getData";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {

  title: "Atechno",
  description: "Unleash Atechno potential. Use the device to measure the accurate temperature & monitor through Mobile Apps",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: popupData } = await getPopup();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PopupModal popup={popupData} />
        <Navabr />
        <NavbarMobile />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
