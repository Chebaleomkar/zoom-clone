import { Metadata } from "next";
import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StreamVideoProvider from "@/providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "ZOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
  icons:{
    icon : '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <StreamVideoProvider>
      <main className="relative">
        <Navbar />

        <div className="flex">
          <Sidebar />

          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </main>
    </StreamVideoProvider>
  );
};

export default RootLayout;
