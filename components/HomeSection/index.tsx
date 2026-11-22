"use client";

import { ArrowUpRight, CodeXml, Link2 } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";
import { HomeSpan } from "../HomeSpan";
import { useLanguageStore } from "@/store/languageStore";
import DotGrid from "@/components/DotGrid";
import GlareHover from "@/components/GlareHover/GlareHover";
import Magnet from "@/components/Magnet/Magnet";
import TechText from "@/components/TechText/TechText";

export function HomeSection() {
  const { language } = useLanguageStore();
  const sectionLinks = [
    { label: { portuguese: "Sobre", english: "About" }, href: "#Sobre" },
    {
      label: { portuguese: "Habilidades", english: "Skills" },
      href: "#Habilidades",
    },
    {
      label: { portuguese: "Projetos", english: "Projects" },
      href: "#Projetos",
    },
    { label: { portuguese: "Contato", english: "Contact" }, href: "#Contato" },
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
  const [activeTab, setActiveTab] = useState<"code" | "links">("code");

  const techStack = ["React", "Next.js", "TypeScript", "Tailwind", "UX/UI"];
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="Inicio"
        className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden bg-[#F2F6FA] px-6 py-16 text-[#17171c] dark:bg-[#09090B] dark:text-[#f2f2f4] sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="relative z-20 mx-auto flex max-w-4xl flex-col text-center lg:mx-0 lg:text-left">
            <HomeSpan />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <p className="text-xl font-inter mt-8 mb-2 font-medium text-[#626773] dark:text-[#a1a1aa]">
                {language.portuguese === "Português"
                  ? "Olá, eu sou"
                  : "Hello, i am"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="relative z-30 mb-2"
            >
              <h1 className="sr-only text-left">Kauan</h1>
              <div
                aria-hidden="true"
                className="mx-auto h-18 w-60 sm:w-70 md:h-25 md:w-85 lg:mx-0 lg:w-full lg:max-w-107.5"
              >
                <TechText
                  text="Kauan"
                  fontFamily="monospace"
                  fontWeight={700}
                  fontSize={140}
                  letterSpacing={-0.05}
                  color="#5B84B1"
                  accentColor="#7AA2D3"
                  align="left"
                  reach={110}
                  softness={0.8}
                  reveal="letter"
                  dashLength={4}
                  dashGap={2}
                  specks={15}
                  selection
                  labels={true}
                  draggable={false}
                  sweep={true}
                  clickKick
                  intro="none"
                  introDuration={2}
                  guides={false}
                  className="h-full w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.68 }}
              className="mb-5"
            >
              <span className="text-[#5B84B1] font-brains text-sm md:text-base">
                // Front-end Developer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.8 }}
              className="mb-8"
            >
              <p className="md:text-lg max-w-xl mx-auto lg:mx-0 text-[#626773] dark:text-[#a1a1aa] font-medium font-inter leading-relaxed">
                {language.portuguese === "Português"
                  ? "Construo interfaces modernas e performáticas que transformam ideias em produtos digitais claros e fáceis de usar."
                  : "I build modern, high-performance interfaces that turn ideas into clear, easy-to-use digital products."}
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              {techStack.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  transition={{
                    duration: 0.35,
                    delay: 0.88 + index * 0.065,
                  }}
                  className="border border-[#E6E7EB] dark:border-[#26262b] bg-white/80 dark:bg-[#111317] text-[#1B2E4B] dark:text-white/90 rounded-full px-3 py-1.5 text-xs font-brains font-semibold"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start"
            >
              <Magnet
                padding={28}
                magnetStrength={1.4}
                maxOffset={5}
                tilt={0}
                scale={1.015}
                wrapperClassName="w-full sm:w-auto"
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/5577999772234?text=gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                  className="w-full sm:w-auto py-3 px-7 font-inter shadow-[0px_0px_25px_rgba(58,95,132,0.18)] hover:bg-[#2D4F73] hover:scale-[0.98] transition ease duration-300 rounded-full bg-[#3A5F84] text-white font-inter text-sm font-bold flex items-center justify-center gap-2"
                >
                  {language.portuguese === "Português"
                    ? "Fale comigo"
                    : "Contact me"}
                  <ArrowUpRight size={16} />
                </a>
              </Magnet>
              <motion.a
                href="#Projetos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto py-3 font-inter px-7 hover:bg-[#3A5F84] hover:border-[#3A5F84] transition ease duration-300 border border-[#E5E5E8] dark:border-[#26262b] rounded-full bg-[#FAFAFA] dark:bg-[#09090b] hover:text-white text-[#17171c] dark:text-white font-inter text-sm font-bold"
              >
                {language.portuguese === "Português"
                  ? "Ver projetos"
                  : "See projects"}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative mx-auto w-full max-w-155"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-y-16 -left-12 -right-12 z-0 hidden lg:block"
            >
              <DotGrid
                baseColor="#5B84B1"
                activeColor="#7AA2D3"
                shape="circle"
                dotSize={3}
                gap={22}
                proximity={130}
                strength={0.8}
                bounce={0.35}
                tension={0.3}
                returnDuration={0.7}
                shockRadius={220}
                shockStrength={3}
                swell={0.35}
                stretch={0.25}
                glow={0.25}
                fade={0.16}
                opacity={0.32}
                intro
                mouseInteraction
                clickShock
              />
            </div>
            <div className="absolute left-[12%] top-[12%] aspect-square w-[54%] rounded-full bg-[#3A5F84]" />
            <GlareHover
              width="92%"
              height="auto"
              background="#101014"
              borderRadius="0px"
              borderColor="rgba(255,255,255,0.15)"
              glareColor="#7AA2D3"
              glareOpacity={0.14}
              glareSize={24}
              softness={0.85}
              variant="sheen"
              rimGlint={false}
              mode="hover"
              transitionDuration={650}
              intro={false}
              className="relative ml-[8%] mt-[8%] overflow-hidden border border-white/15 shadow-[18px_22px_0_rgba(0,0,0,0.28)] transform-[rotate(-4deg)]"
            >
              <div className="flex min-h-11 w-full items-center gap-2 border-b border-white/10 bg-[#22222a] px-3 sm:px-4">
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
                    className={`flex items-center gap-1.5 px-2 py-1 font-brains text-[10px] transition-colors focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#7AA2D3] ${
                      activeTab === "code"
                        ? "bg-[#5B84B1] text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <CodeXml size={12} />{" "}
                    {language.portuguese === "Português" ? "Código" : "Code"}
                  </button>
                  <button
                    id="home-links-tab"
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "links"}
                    aria-controls="home-preview-panel"
                    onClick={() => setActiveTab("links")}
                    className={`flex items-center gap-1.5 px-2 py-1 font-brains text-[10px] transition-colors focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#7AA2D3] ${
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
                className="grid min-h-67.5 w-full grid-cols-[42px_1fr] sm:min-h-82.5"
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
                        className="group flex min-h-12 items-center justify-between border-b border-white/10 font-brains text-xs text-[#d9d7dc] transition-colors last:border-0 hover:text-[#7AA2D3] focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-[#7AA2D3] sm:text-sm"
                      >
                        <span>
                          {language.portuguese === "Português"
                            ? link.label.portuguese
                            : link.label.english}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-[#5B84B1] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </nav>
                )}
              </div>
            </GlareHover>
            <div className="absolute -bottom-3 right-[4%] -z-10 h-10 w-[42%] skew-x-[-24deg] bg-[#737b8a]" />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
