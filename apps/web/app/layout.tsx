import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruca",
  description: "A model built for how research is actually written",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
