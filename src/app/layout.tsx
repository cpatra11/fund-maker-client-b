import { scan } from "react-scan";
import type { Metadata } from "next";
import RootLayoutProvider from "@/provider/RootLayoutProvider";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { WalletProvider } from "@/provider/WalletProvider";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/modules/nav-bar";
import { getSession } from "@/lib/auth";

const mFont = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mooner Money",
  description: "Pool Money; Trade Whatever",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mFont.className} antialiased overflow-x-hidden`}>
        <WalletProvider>
          <RootLayoutProvider session={session}>
            <NavBar />
            <div className="w-full bg-background px-1 mt-6">{children}</div>
            <Toaster />
          </RootLayoutProvider>
        </WalletProvider>
      </body>
    </html>
  );
}
