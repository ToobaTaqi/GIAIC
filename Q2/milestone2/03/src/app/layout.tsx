import Footer from "@/components/footer";
import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="children">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}