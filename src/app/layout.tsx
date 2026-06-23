import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saksham Mishra | Senior Backend Engineer & Enterprise Architect",
  description:
    "Senior Backend Engineer with 5+ years of experience architecting enterprise-grade applications, cloud-native microservices, and AI-powered automation. Java, Spring Boot, Azure, System Design.",
  keywords: [
    "backend engineer",
    "java developer",
    "spring boot",
    "microservices",
    "azure",
    "enterprise architecture",
    "system design",
    "software engineer",
    "saksham mishra",
    "cloud architecture",
    "rest apis",
    "distributed systems",
  ],
  authors: [{ name: "Saksham Mishra" }],
  openGraph: {
    title: "Saksham Mishra | Senior Backend Engineer",
    description:
      "Senior Backend Engineer specializing in enterprise-grade backend systems, cloud-native microservices architecture, and modern API platforms.",
    type: "website",
    locale: "en_US",
    siteName: "Saksham Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saksham Mishra | Senior Backend Engineer",
    description:
      "Senior Backend Engineer specializing in enterprise-grade backend systems, cloud-native microservices architecture, and modern API platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${jetBrainsMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background font-sans text-text-primary noise-overlay">
        {children}
      </body>
    </html>
  );
}
