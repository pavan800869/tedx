import localFont from "next/font/local";
import "./globals.css";
import BlurFade from "./_components/blur-fade";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TedX AnuragU",
  description:
    "TEDxAnuragU is a platform for ideas worth spreading. It is a local, self-organized event that brings people together to share a TED-like experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
