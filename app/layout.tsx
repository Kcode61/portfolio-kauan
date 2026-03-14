import { Metadata } from "next";
import "./globals.css";
import { Poppins, JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Portfólio - Kauan Moura",
  description:
    "Meu Portfólio pessoal onde mostro meus projetos e minha carreira",
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
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={`antialiased bg-[#09090B] ${inter.variable} ${jetbrains.variable} ${poppins.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
