import type { Metadata } from "next";
import { Syne, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTopButton from "@/components/BackToTopButton";

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Group'innove - L'innovation au service de votre identité",
  description: "Agence de conseil en Marketing et Communication.",
  icons: {
    icon: '/favicon.ico', // Assuming favicon.ico is in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${syne.variable} ${workSans.variable} font-work-sans bg-white dark:bg-dark-bg`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.groupinnove.pro/#organization", // Replace with your actual domain
                "name": "Group'innove",
                "url": "https://www.groupinnove.pro/", // Replace with your actual domain
                "logo": "https://www.groupinnove.pro/logo.png", // Replace with your actual logo URL
                "sameAs": [
                  // Add social media links here if available
                  // "https://facebook.com/yourpage",
                  // "https://linkedin.com/company/yourcompany"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.groupinnove.pro/#website", // Replace with your actual domain
                "url": "https://www.groupinnove.pro/", // Replace with your actual domain
                "name": "Group'innove",
                "description": "Agence de conseil en Marketing et Communication.",
                "publisher": { "@id": "https://www.groupinnove.pro/#organization" },
                "inLanguage": "fr-FR"
              }
            ]
          })
        }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}