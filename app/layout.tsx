import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { AUTHOR, GITHUB, SITE_NAME, SITE_URL, jsonLd } from "./_components/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Free, open-source voice typing for Mac. Hold fn, speak in any app, get clean punctuated text. On-device speech-to-text. No account, no subscription.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FreeFlow — Free Voice Typing & Dictation for Mac (Open Source)",
    template: "%s | FreeFlow",
  },
  description,
  applicationName: SITE_NAME,
  authors: [AUTHOR],
  creator: AUTHOR.name,
  publisher: SITE_NAME,
  category: "productivity",
  keywords: [
    "voice typing Mac",
    "dictation app Mac",
    "speech to text Mac",
    "voice to text Mac",
    "free dictation software",
    "Wispr Flow alternative",
    "free Wispr Flow",
    "open source Wispr Flow",
    "Whisper dictation Mac",
    "offline speech to text",
    "on-device dictation",
    "FreeFlow",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: "FreeFlow — Free, open-source voice typing for Mac",
    description: "Hold a key, speak in any app, let go. Clean text, 100% on-device. No account, no subscription, no cloud.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeFlow — Free, open-source voice typing for Mac",
    description: "Hold a key, speak in any app, let go. Clean text, 100% on-device. Free forever.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    // Paste the tokens from Google Search Console / Bing Webmaster Tools into these env vars.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a0f" },
  ],
};

/** Site-wide entities: who publishes the site and what the site is. */
const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png`, width: 512, height: 512 },
      sameAs: [GITHUB],
      founder: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: ["FreeFlow voice typing", "FreeFlow for Mac"],
      url: SITE_URL,
      description,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteGraph)} />
        {children}
      </body>
    </html>
  );
}
