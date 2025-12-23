import type { Metadata } from "next";
import "./globals.css";
import Providers from "./(componts)/Rudex/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Trendline | E-Commerce Platform",
    template: "%s | Trendline",
  },
  description:
    "Trendline is a modern e-commerce platform built with Next.js, offering a seamless shopping experience with secure authentication, product management, and user dashboards.",
  keywords: [
    "Trendline",
    "E-commerce",
    "Online Shopping",
    "Next.js",
    "React",
    "Frontend Task",
    "Web Application",
  ],
  authors: [{ name: "Ahmed Mohamed" }],
  creator: "Ahmed Mohamed",
  publisher: "Trendline",

  openGraph: {
    title: "Trendline | E-Commerce Platform",
    description:
      "A modern e-commerce web application built as a frontend task for Trendline using Next.js, Redux Toolkit, and Tailwind CSS.",
    url: "https://trendline.com",
    siteName: "Trendline",
    images: [
      {
        url: "/assets/og-image.png", // لو عندك صورة، غيرها
        width: 1200,
        height: 630,
        alt: "Trendline E-Commerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Trendline | E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js as a frontend task for Trendline.",
    images: ["/assets/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                fontSize: "14px",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
