import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Candra Irawan — QA Manual Engineer",
  description: "QA Manual Engineer available for freelance projects. Experienced in functional, regression, and UI/UX testing across web and mobile platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
           {children}
        </main>
       
      </body>
    </html>
  );
}