"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/lib/language";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContact />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
