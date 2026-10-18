"use client";

import { useLanguageStore } from "@/store/languageStore";

export function Footer() {
  const { language } = useLanguageStore();
  const isPortuguese = language.portuguese === "Português";

  return (
    <footer className="py-10 px-4 border-t text-center border-[#F1F1F3] dark:border-[#17171B] bg-[#F8F7FA] dark:bg-[#09090B] ">
      <p className="text-sm font-brains text-[#888891]">
        {isPortuguese
          ? "< © 2025 Kauan Moura /> — Desenvolvedor Front-end especializado em Landing Pages."
          : "< © 2025 Kauan Moura /> — Front-end Developer specialized in Landing Pages."}
      </p>
    </footer>
  );
}
