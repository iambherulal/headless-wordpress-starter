import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { findMenuByLocation, getAllMenus } from "@/lib/menus";
import { getSiteMetadata } from "@/lib/site";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/providers/theme-provider";
import { Inter as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = async () => {
  const seoData = await getSiteMetadata();
  return {
    title: {
      template: `%s | ${seoData?.title}`,
      default: seoData?.title, // a default is required when creating a template
    },
  };
};

export default async function RootLayout({ children }) {
  const { menus = [] } = await getAllMenus();

  const headerMenu = findMenuByLocation(menus, "HEADER");
  const companyMenu = findMenuByLocation(menus, "COMPANY");
  const storesMenu = findMenuByLocation(menus, "STORES");
  const socialLinks = findMenuByLocation(menus, "SOCIAL_LINKS");
  const legalMenu = findMenuByLocation(menus, "LEGAL");
  const servicesMenu = findMenuByLocation(menus, "SERVICES");

  const metadata = await getSiteMetadata();

  const footerMenu = {
    companyMenu,
    storesMenu,
    socialLinks,
    legalMenu,
    servicesMenu,
  };
  const site = { metadata, headerMenu, footerMenu };
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader
          color="#cc3333"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
        />
        <ThemeProvider site={site}>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
