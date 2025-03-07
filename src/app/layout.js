import { Inter } from "next/font/google";

import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "Atman", 
  description:
    "Atman", 

  alternates: {
    canonical: "",
  },
  openGraph: {
    images:
      "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
