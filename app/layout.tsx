import { Footer, Layout, Navbar } from "nextra-theme-docs";
import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata: Metadata = {
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  description: "Fancy notes about all kinds of interesting topics.",
  metadataBase: new URL("https://fancy-notes.vercel.app"),
  generator: "Next.js",
  applicationName: "Fancy Notes",
  appleWebApp: {
    title: "Fancy Notes",
  },
  title: {
    default: "Fancy Notes - All kinds of interesting topics.",
    template: "%s | Fancy Notes",
  },
  openGraph: {
    url: "./",
    siteName: "Fancy Notes",
    locale: "en_US",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://fancy-notes.vercel.app",
  },
  alternates: {
    canonical: "./",
  },
};

const logo = (
  <span className="hidden font-bold sm:inline-block">Fancy Notes</span>
);

const footer = <Footer>MIT {new Date().getFullYear()} © AREA44.</Footer>;

const navbar = <Navbar logo={logo} />;

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/AREA44/fancy-notes/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
