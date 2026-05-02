import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Candra Irawan — QA Engineer",
  description: "QA Engineer dengan pengalaman manual testing, test planning, dan bug reporting di produk digital.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Navbar />
        {children}
      </body>
    </html>
  );
}