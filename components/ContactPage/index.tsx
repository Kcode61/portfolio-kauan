"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";

export function ContactPage() {
  const { language } = useLanguageStore();
  const isPortuguese = language.portuguese === "Português";

  return (
    <section
      id="Contato"
      className="bg-[#F3F6FA] px-4 py-16 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-brains text-sm text-[#5B84B1]">
              {isPortuguese ? "<Contato />" : "<Contact />"}
            </span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-poppins text-4xl font-bold text-[#17171C] dark:text-white"
          >
            {isPortuguese ? "Vamos conversar?" : "Let's talk?"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-inter text-[#888891]"
          >
            {isPortuguese
              ? "Estou disponível para novos projetos. Me conta o que você está pensando."
              : "I'm available for new projects. Tell me what you have in mind."}
          </motion.p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mx-auto mt-12 grid max-w-5xl overflow-hidden border border-[#DDE3E9] bg-white shadow-[0_18px_45px_rgba(27,46,75,0.08)] dark:border-[#26262B] dark:bg-[#101014] dark:shadow-[0_18px_45px_rgba(0,0,0,0.2)] md:grid-cols-[1fr_1.1fr]"
        >
          <div className="flex min-h-64 flex-col border-b border-[#DDE3E9] bg-[#EEF3F8] p-5 dark:border-[#26262B] dark:bg-[#15191F] sm:p-7 md:border-b-0 md:border-r">
            <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-[#D8E0E8] bg-[#101014] shadow-[0_12px_30px_rgba(27,46,75,0.12)] dark:border-[#343B45]">
              <div className="flex h-10 shrink-0 items-center gap-2 border-b border-white/10 bg-[#22222A] px-3">
                <span className="h-2 w-2 rounded-full bg-[#D7867A]" />
                <span className="h-2 w-2 rounded-full bg-[#D9B66F]" />
                <span className="h-2 w-2 rounded-full bg-[#83A88D]" />
                <span className="ml-2 font-brains text-[10px] text-white/55">
                  contato.tsx
                </span>
              </div>
              <div className="grid flex-1 grid-cols-[36px_1fr] font-brains text-[11px] leading-7 sm:grid-cols-[44px_1fr] sm:text-xs">
                <div className="flex flex-col items-center border-r border-white/10 bg-[#17171C] py-4 text-white/30">
                  {[1, 2, 3, 4, 5].map((line) => (
                    <span key={line}>{String(line).padStart(2, "0")}</span>
                  ))}
                </div>
                <div className="overflow-hidden px-3 py-4 sm:px-5">
                  <div className="whitespace-nowrap">
                    <span className="text-[#5B84B1]">const </span>
                    <span className="text-[#7AA2D3]">ideia </span>
                    <span className="text-[#D9D7DC]">= {"{"}</span>
                  </div>
                  <div className="whitespace-nowrap pl-4">
                    <span className="text-[#888891]">objetivo: </span>
                    <span className="text-[#21C45D]">
                      {isPortuguese ? '"tirar do papel"' : '"make it real"'}
                    </span>
                    <span className="text-[#D9D7DC]">,</span>
                  </div>
                  <div className="whitespace-nowrap pl-4">
                    <span className="text-[#888891]">parceria: </span>
                    <span className="text-[#21C45D]">true</span>
                  </div>
                  <span className="text-[#D9D7DC]">{"};"}</span>
                  <span className="ml-2 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-[#7AA2D3]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
            <span className="font-brains text-xs text-[#5B84B1]">
              {isPortuguese ? "// próximo passo" : "// next step"}
            </span>
            <h3 className="mt-3 font-poppins text-2xl font-semibold text-[#17171C] dark:text-white sm:text-3xl">
              {isPortuguese
                ? "Tem um projeto em mente?"
                : "Have a project in mind?"}
            </h3>
            <p className="mt-3 max-w-md font-inter text-sm leading-relaxed text-[#737B87] dark:text-[#A1A1AA] sm:text-base">
              {isPortuguese
                ? "Pode me chamar direto. Vamos conversar sobre sua ideia, sem compromisso."
                : "Reach out directly. We can talk through your idea, no pressure."}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="https://wa.me/5577999772234?text=gostaria%20de%20solicitar%20um%20or%C3%A7amento"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#3A5F84] px-5 py-3 font-inter text-sm font-semibold text-white transition-colors hover:bg-[#2D4F73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B84B1]"
              >
                {isPortuguese ? "Me chama no WhatsApp" : "Message me"}
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/Kcode61"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-inter text-sm text-[#53687E] transition-colors hover:text-[#3A5F84] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B84B1] dark:text-[#A8BACD] dark:hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
