import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark antialiased">
      <head>
        {/* Premium font stack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-text-primary noise-overlay">
        {children}
      </body>
    </html>
  );
}