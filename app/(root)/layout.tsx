import React from "react";
import { Mulish } from "next/font/google";
import "../globals.css";

// Load Mulish from Google Fonts
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // choose weights you need
  variable: "--font-mulish",    // register as CSS variable
});

export const meta = {
  title: "My Second Project",
  description: "Another landing page to build my knowledge in NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
