"use client";
import {
  ArrowUpRight,
  Braces,
  Brackets,
  Code2,
  CodeXml,
  MonitorSmartphone,
  Parentheses,
  Sparkles,
} from "lucide-react";
import { HomeSpan } from "../HomeSpan";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HomeSection() {
  const text = "Kauan Moura";
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
    <section className="py-28 px-4 relative bg-[#FAFAFA] dark:bg-[#09090B]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#EFEFF0_1px,transparent_1px)] dark:bg-[radial-gradient(#111113_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-20 text-[#2D4F73] opacity-20">
          <CodeXml size={90} />
        </span>
        <span className="absolute top-40 right-32 text-[#2D4F73] opacity-20">
          <Braces size={40} />
        </span>
        <span className="absolute bottom-32 left-10 text-[#2D4F73] opacity-20">
          <Brackets size={60} />
        </span>
        <span className="absolute bottom-20 right-20 text-[#2D4F73] opacity-20">
          <Parentheses size={70} />
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid items-center gap-16 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto lg:mx-0 flex flex-col text-center lg:text-left">
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
                className="w-full sm:w-auto py-3 px-7 font-inter shadow-[0px_0px_25px_rgba(58,95,132,0.18)] cursor-pointer hover:bg-[#2D4F73] hover:scale-[0.98] transition ease duration-300 rounded-full bg-[#3A5F84] text-white font-inter text-sm font-bold flex items-center justify-center gap-2"
              >
                Fale comigo
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#Projetos"
                className="w-full sm:w-auto py-3 font-inter px-7 hover:bg-[#3A5F84] hover:border-[#3A5F84] cursor-pointer transition ease duration-300 border border-[#E5E5E8] dark:border-[#26262b] rounded-full bg-[#FAFAFA] dark:bg-[#09090b] hover:text-white text-[#17171c] dark:text-white font-inter text-sm font-bold"
              >
                Ver projetos
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl border border-[#E7E7EB] dark:border-[#1D1D22] bg-white/90 dark:bg-[#111317]/90 backdrop-blur-sm shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#F1F1F3] dark:border-[#1B1B20] flex justify-between items-center bg-[#FFFFFF] dark:bg-[#101014]">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#EF4343]" />
                  <div className="w-3 h-3 rounded-full bg-[#FACC14]" />
                  <div className="w-3 h-3 rounded-full bg-[#21C45D]" />
                </div>
                <span className="text-[10px] uppercase text-[#888891] font-brains">
                  status.tsx
                </span>
              </div>

              <div className="p-5 space-y-4 bg-[#FFFFFF] dark:bg-[#101014]">
                <div className="flex items-center justify-between rounded-xl bg-[#EAF2FB] dark:bg-[#17171A] p-3">
                  <div className="flex items-center gap-2 text-[#1B2E4B] dark:text-white">
                    <span className="w-2 h-2 rounded-full bg-[#21c45d] animate-pulse" />
                    <span className="text-sm font-medium font-inter">
                      Disponível
                    </span>
                  </div>
                  <span className="text-[10px] font-brains text-[#5B84B1] uppercase">
                    open to work
                  </span>
                </div>

                <div className="rounded-xl border border-[#F0F1F5] dark:border-[#1E1E23] bg-[#F9FAFB] dark:bg-[#131318] p-4">
                  <div className="flex items-center gap-2 text-[#5B84B1] mb-3">
                    <Code2 size={16} />
                    <span className="text-xs font-brains uppercase">
                      Especialização
                    </span>
                  </div>
                  <p className="text-sm text-[#17171c] dark:text-white font-inter leading-relaxed">
                    Interfaces modernas, responsivas e focadas em experiência e
                    conversão.
                  </p>
                </div>

                <div className="rounded-xl border border-[#F0F1F5] dark:border-[#1E1E23] bg-[#F9FAFB] dark:bg-[#131318] p-4">
                  <div className="flex items-center gap-2 text-[#5B84B1] mb-3">
                    <MonitorSmartphone size={16} />
                    <span className="text-xs font-brains uppercase">Foco</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["UX", "Performance", "Responsividade", "Conversão"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#EAEAEC] dark:bg-[#222226] px-2.5 py-1 text-[10px] font-brains text-[#17171c] dark:text-white"
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-[#F0F1F5] dark:border-[#1E1E23] bg-[#F9FAFB] dark:bg-[#131318] p-4">
                  <div className="flex items-center gap-2 text-[#5B84B1] mb-3">
                    <Sparkles size={16} />
                    <span className="text-xs font-brains uppercase">Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#EAF2FB] dark:bg-[#1A1B21] px-2.5 py-1 text-[10px] font-brains text-[#1B2E4B] dark:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
