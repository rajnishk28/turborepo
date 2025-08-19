import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "pycray Tech",
  description: "Simple homepage using Next.js & Tailwind",
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
