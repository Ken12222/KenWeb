import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({
  //variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Kenneth Ashartey",
  description:
    "A portfolio website to show case design and web development through my lens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className} antialiased`}>
        <header className="w-5/6 mx-auto">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
