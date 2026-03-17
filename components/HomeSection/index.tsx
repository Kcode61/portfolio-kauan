"use client";
import { Braces, Brackets, CodeXml, Parentheses } from "lucide-react";
import { HomeSpan } from "../HomeSpan";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HomeSection() {
  const text = "Kauan Moura";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

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
    <section className="py-32 px-4 relative bg-[#FAFAFA] dark:bg-[#09090B]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#EFEFF0_1px,transparent_1px)]     dark:bg-[radial-gradient(#111113_1px,transparent_1px)]   [background-size:22px_22px]" />

      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-20 text-[#2b1d49] opacity-20">
          <CodeXml size={90} />
        </span>

        <span className="absolute top-40 right-32 text-[#2b1d49] opacity-20">
          <Braces size={40} />
        </span>

        <span className="absolute bottom-32 left-40 text-[#2b1d49] opacity-20">
          <Brackets size={60} />
        </span>

        <span className="absolute bottom-20 right-20 text-[#2b1d49] opacity-20">
          <Parentheses size={70} />
        </span>
      </div>

      <div className=" relative z-10 max-w-7xl mx-auto ">
        <div className="max-w-3xl mx-auto flex flex-col  text-center">
          <HomeSpan />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl font-inter mt-8 mb-2 font-medium  text-[#888891] ">
              Olá, eu sou
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="md:text-8xl flex text-6xl mb-6 font-bold font-poppins bg-gradient-to-r from-[#8A4EEE] to-[#D35EED] bg-clip-text text-transparent">
              {displayText}{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className=" bg-gradient-to-r from-[#8A4EEE] to-[#D35EED] bg-clip-text text-transparent"
              >
                |
              </motion.span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6"
          >
            <span className=" text-[#894eef] font-brains ">
              // Especializado em Landing Pages
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-10"
          >
            <p className="md:text-lg text-[#888891] font-medium font-inter">
              Transformo ideias em landing pages funcionais e elegantes. Foco em
              código limpo, design minimalista e páginas que realmente
              convertem.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-6 items-center justify-center relative"
          >
            <button className="py-3 px-8 font-inter shadow-[0px_0px_17px_#894eef] cursor-pointer hover:bg-[#894eef]/90 hover:scale-95 transition ease duration-300 rounded-full bg-[#894eef] text-white font-inter text-sm font-bold">
              Entre em contato
            </button>
            <button className="py-3 font-inter px-8 hover:bg-[#894eef] hover:border-[#894eef]  cursor-pointer   transition ease duration-300 border border-[#E5E5E8] dark:border-[#26262b] rounded-full bg-[#FAFAFA] dark:bg-[#09090b] hover:text-white text-[#17171c] dark:text-white font-inter text-sm font-bold">
              Ver projetos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
