import type { Metadata } from "next";
import { Sarabun } from "next/font/google";
import "../globals.css";
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Homepage",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={sarabun.className}>
        <MantineProvider>
          <Container size="xl">{children}</Container>
        </MantineProvider>
      </body>
    </html>
  );
}
