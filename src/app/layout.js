import { Inter } from "next/font/google";
import "@/styles/font-awesome.scss";
import "@/styles/bootstrap.scss";
import "@/styles/style.scss";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Script from "@/components/Script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Site",
  description: "A template site for company websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        {children}
        </div>
        <BootstrapClient />
        <Script />
        </body>
    </html>
  );
}
