"use client";

import { ArrowUpRight, CodeXml, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HomeSpan } from "../HomeSpan";

const sectionLinks = [
  { label: "Sobre", href: "#Sobre" },
  { label: "Habilidades", href: "#Habilidades" },
  { label: "Projetos", href: "#Projetos" },
  { label: "Contato", href: "#Contato" },
];

const codeRows = [
  {
    start: "const ",
    startColor: "text-[#5B84B1]",
    middle: "page",
    middleColor: "text-[#7AA2D3]",
    end: " = () => {",
  },
  {
    start: "  return",
    startColor: "text-[#5B84B1]",
    middle: "",
    middleColor: "",
    end: " (",
  },
  {
    start: "    <main ",
    startColor: "text-[#7AA2D3]",
    middle: '"portfolio"',
    middleColor: "text-[#21c45d]",
    end: ">",
  },
  {
    start: "      <h1>",
    startColor: "text-[#7AA2D3]",
    middle: "Kauan Moura",
    middleColor: "text-[#21c45d]",
    end: "</h1>",
  },
  {
    start: "      <",
    startColor: "text-[#d9d7dc]",
    middle: "Work",
    middleColor: "text-[#7AA2D3]",
    end: " />",
  },
  {
    start: "    </main>",
    startColor: "text-[#7AA2D3]",
    middle: "",
    middleColor: "",
    end: "",
  },
  {
    start: "  );",
    startColor: "text-[#5B84B1]",
    middle: "",
    middleColor: "",
    end: "",
  },
  {
    start: "};",
    startColor: "text-[#d9d7dc]",
    middle: "",
    middleColor: "",
    end: "",
  },
];

export function HomeSection() {
  const [activeTab, setActiveTab] = useState<"code" | "links">("code");
  const text = "Kauan";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "UX/UI"];

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <section
      id="Inicio"
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#09090B] px-6 py-16 text-[#f2f2f4] sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="max-w-4xl mx-auto lg:mx-0 flex flex-col text-center lg:text-left">
          <HomeSpan />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl font-inter mt-8 mb-2 font-medium text-[#888891]">
              Olá, eu sou
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="md:text-7xl flex justify-center lg:justify-start text-5xl mb-5 font-bold font-poppins bg-gradient-to-r from-[#5B84B1] to-[#1B2E4B] bg-clip-text text-transparent">
              {displayText}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="bg-gradient-to-r from-[#5B84B1] to-[#1B2E4B] bg-clip-text text-transparent"
              >
                |
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="mb-6"
          >
            <span className="text-[#5B84B1] font-brains text-sm md:text-base">
              // Front-end Developer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <p className="md:text-lg max-w-xl mx-auto lg:mx-0 text-[#888891] font-medium font-inter leading-relaxed">
              Desenvolvedor front-end especializado em interfaces modernas,
              responsivas e performáticas com React, Next.js e TypeScript.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-wrap gap-3 items-center justify-center lg:justify-start"
          >
            {techStack.map((item) => (
              <span
                key={item}
                className="border border-[#E6E7EB] dark:border-[#26262b] bg-white/80 dark:bg-[#111317] text-[#1B2E4B] dark:text-white/90 rounded-full px-3 py-1.5 text-xs font-brains font-semibold"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start"
          >
            <a
              target="_blank"
              href="https://wa.me/5577999772234?text=gostaria%20de%20solicitar%20um%20or%C3%A7amento"
              className="w-full sm:w-auto py-3 px-7 font-inter shadow-[0px_0px_25px_rgba(58,95,132,0.18)] hover:bg-[#2D4F73] hover:scale-[0.98] transition ease duration-300 rounded-full bg-[#3A5F84] text-white font-inter text-sm font-bold flex items-center justify-center gap-2"
            >
              Fale comigo
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#Projetos"
              className="w-full sm:w-auto py-3 font-inter px-7 hover:bg-[#3A5F84] hover:border-[#3A5F84] transition ease duration-300 border border-[#E5E5E8] dark:border-[#26262b] rounded-full bg-[#FAFAFA] dark:bg-[#09090b] hover:text-white text-[#17171c] dark:text-white font-inter text-sm font-bold"
            >
              Ver projetos
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute left-[12%] top-[12%] aspect-square w-[54%] rounded-full bg-[#3A5F84]" />
          <div className="relative ml-[8%] mt-[8%] overflow-hidden border border-white/15 bg-[#101014] shadow-[18px_22px_0_rgba(0,0,0,0.28)] [transform:rotate(-4deg)]">
            <div className="flex min-h-11 items-center gap-2 border-b border-white/10 bg-[#22222a] px-3 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-[#ee6a6a]" />
              <span className="h-2 w-2 rounded-full bg-[#e5c15c]" />
              <span className="h-2 w-2 rounded-full bg-[#7dc879]" />
              <span className="ml-1 hidden font-brains text-[10px] text-white/55 sm:block">
                {activeTab === "code" ? "portfolio.tsx" : "sections.tsx"}
              </span>
              <div
                role="tablist"
                aria-label="Conteúdo do painel"
                className="ml-auto flex items-center gap-1"
              >
                <button
                  id="home-code-tab"
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "code"}
                  aria-controls="home-preview-panel"
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center gap-1.5 px-2 py-1 font-brains text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7AA2D3] ${
                    activeTab === "code"
                      ? "bg-[#5B84B1] text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <CodeXml size={12} /> Código
                </button>
                <button
                  id="home-links-tab"
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "links"}
                  aria-controls="home-preview-panel"
                  onClick={() => setActiveTab("links")}
                  className={`flex items-center gap-1.5 px-2 py-1 font-brains text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7AA2D3] ${
                    activeTab === "links"
                      ? "bg-[#5B84B1] text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Link2 size={12} /> Links
                </button>
              </div>
            </div>
            <div
              id="home-preview-panel"
              role="tabpanel"
              aria-labelledby={
                activeTab === "code" ? "home-code-tab" : "home-links-tab"
              }
              className="grid min-h-[270px] grid-cols-[42px_1fr] sm:min-h-[330px]"
            >
              <div className="flex flex-col items-center gap-4 border-r border-white/10 bg-[#17171c] py-5 font-brains text-[10px] text-white/30">
                {(activeTab === "code" ? codeRows : sectionLinks).map(
                  (_, index) => (
                    <span key={index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  ),
                )}
              </div>
              {activeTab === "code" ? (
                <div className="space-y-3 overflow-hidden px-5 py-5 font-brains text-[10px] sm:px-7 sm:py-7 sm:text-xs">
                  {codeRows.map((row, index) => (
                    <div key={index} className="whitespace-nowrap">
                      <span className={row.startColor}>{row.start}</span>
                      <span className={row.middleColor}>{row.middle}</span>
                      <span className="text-[#d9d7dc]">{row.end}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-6 text-white/55">
                    <CodeXml size={16} className="text-[#5B84B1]" />
                    <span>Thoughtfully built for the web.</span>
                  </div>
                </div>
              ) : (
                <nav
                  aria-label="Seções do portfólio"
                  className="flex flex-col px-5 py-4 sm:px-7 sm:py-5"
                >
                  {sectionLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="group flex min-h-12 items-center justify-between border-b border-white/10 font-brains text-xs text-[#d9d7dc] transition-colors last:border-0 hover:text-[#7AA2D3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7AA2D3] sm:text-sm"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={14}
                        className="text-[#5B84B1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>
          <div className="absolute -bottom-3 right-[4%] -z-10 h-10 w-[42%] skew-x-[-24deg] bg-[#737b8a]" />
        </motion.div>
      </div>
    </section>
  );
}
