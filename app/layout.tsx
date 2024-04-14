import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Variable } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
  icons:{
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {},
        }}
      >
        <body className={`${inter.className} bg-dark-2  `}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
