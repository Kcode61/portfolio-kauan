// @ts-ignore: Ignore missing type declarations for global CSS import
import "./globals.css";
import type { Metadata } from "next";
import { Poppins, JetBrains_Mono, Inter, Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import CustomCursor from "@/components/CustomCursor";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-kauan-beta.vercel.app"),
  title: {
    default: "Kauan Moura | Desenvolvedor Front-end",
    template: "%s | Kauan Moura",
  },
  description:
    "Portfólio de Kauan Moura, desenvolvedor front-end especializado em landing pages, interfaces modernas e experiências digitais.",
  keywords: [
    "Kauan Moura",
    "Programador front-end",
    "Programador backend",
    "Programador fullstack",
    "desenvolvedor front-end",
    "desenvolvedor web",
    "landing pages",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Kauan Moura", url: "https://github.com/Kcode61" }],
  creator: "Kauan Moura",
  publisher: "Kauan Moura",
  applicationName: "Portfólio Kauan Moura",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Portfólio - Kauan Moura",
    title: "Kauan Moura | Desenvolvedor Front-end",
    description:
      "Conheça meus projetos e habilidades em desenvolvimento front-end.",
  },
  twitter: {
    card: "summary",
    title: "Kauan Moura | Desenvolvedor Front-end",
    description: "Portfólio com projetos e habilidades de Kauan Moura.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`scroll-smooth font-sans ${geist.variable}`}
      suppressHydrationWarning
    >
      <body
        cz-shortcut-listen="true"
        className={`antialiased  ${inter.variable} ${jetbrains.variable} ${poppins.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
