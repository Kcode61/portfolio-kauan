"use client";
import { motion } from "framer-motion";

const milestones = [
  {
    date: "Setembro 2024",
    title: "Primeiros passos",
    description: "Comecei a estudar programação e construir minha base.",
  },
  {
    date: "Maio 2025",
    title: "Projetos reais",
    description:
      "Comecei a desenvolver projetos para resolver problemas reais.",
  },
  {
    date: "Setembro 2025",
    title: "Estudos em back-end",
    description:
      "Passei a estudar e me aprofundar no desenvolvimento back-end.",
  },
  {
    date: "Maio 2026",
    title: "Projetos para empresas",
    description:
      "Comecei a prospectar clientes e desenvolver projetos para empresas reais.",
  },
];

export function AboutSection() {
  return (
    <section id="Sobre" className="py-16 px-4 bg-[#F3F6FA] dark:bg-[#09090B] ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="flex flex-col">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className=" font-brains text-sm text-[#5B84B1] ">
                {"<Sobre />"}
              </span>
            </motion.span>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-poppins mt-4 mb-6 font-bold text-black dark:text-white text-4xl ">
                Sobre mim
              </h2>
            </motion.div>

            <div className="space-y-5">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <p className="text-md max-w-lg text-[#888891] font-inter ">
                  Sou desenvolvedor front-end focado em criar interfaces
                  modernas, responsivas e intuitivas. Busco unir design limpo,
                  performance e experiência do usuário em cada projeto.
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="text-md max-w-lg text-[#888891] font-inter ">
                  Tenho experiência no desenvolvimento de aplicações web
                  modernas, com atenção à responsividade, componentização e boas
                  práticas de desenvolvimento.
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-md max-w-lg  text-[#888891] font-inter ">
                  Trabalho principalmente com React, Next.js, TypeScript e
                  Tailwind CSS, criando interfaces modernas e escaláveis para
                  web.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 overflow-hidden border border-white/15 bg-[#101014] shadow-[18px_22px_0_rgba(0,0,0,0.28)]"
              >
                <div className="flex min-h-11 items-center gap-2 border-b border-white/10 bg-[#22222a] px-3 sm:px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ee6a6a]" />
                    <span className="h-2 w-2 rounded-full bg-[#e5c15c]" />
                    <span className="h-2 w-2 rounded-full bg-[#7dc879]" />
                  </div>
                  <span className="ml-1 font-brains text-[10px] text-white/55">
                    About.tsx
                  </span>
                </div>
                <div className="  font-brains text-[12px] leading-6 ">
                  <div className="grid min-h-[192px] grid-cols-[42px_1fr]">
                    <div className="flex flex-col items-center gap-4 border-r border-white/10 bg-[#17171c] py-1 font-brains text-[10px] text-white/30">
                      {[1, 2, 3, 4, 5, 6].map((line) => (
                        <span key={line}>{String(line).padStart(2, "0")}</span>
                      ))}
                    </div>
                    <div className="overflow-hidden py-5 px-6">
                      <div>
                        <span className="text-[#5B84B1]">const </span>
                        <span className="text-[#7AA2D3]">developer </span>
                        <span className="text-[#f2f2f4]">{"= {"}</span>
                      </div>
                      <div className="pl-4 text-[#f2f2f4]">
                        <div>
                          <span className="text-[#888891]">Nome:</span>{" "}
                          <span className="text-[#21c45d]">"Kauan Moura"</span>,
                        </div>
                        <div>
                          <span className="text-[#888891]">Stack:</span>{" "}
                          <span className="text-[#21c45d]">
                            "React & Next.js"
                          </span>
                          ,
                        </div>
                        <div>
                          <span className="text-[#888891]">Especialidade:</span>{" "}
                          <span className="text-[#21c45d]">
                            "Front-end Moderno"
                          </span>
                        </div>
                      </div>
                      <span className="text-[#f2f2f4]">{"}"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-8 font-poppins text-2xl font-bold text-[#17171c] dark:text-[#f2f2f2]">
              Minha trajetória
            </h3>
            <ol className="ml-2 border-l border-[#5B84B1]/40">
              {milestones.map((milestone, index) => (
                <motion.li
                  key={milestone.date}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative pb-9 pl-7 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[#5B84B1] ring-4 ring-[#F3F6FA] dark:ring-[#09090B]" />
                  <time className="font-brains text-xs text-[#5B84B1]">
                    {milestone.date}
                  </time>
                  <h4 className="mt-1 font-poppins text-lg font-semibold text-[#17171c] dark:text-[#f2f2f2]">
                    {milestone.title}
                  </h4>

                  <p className="mt-1 max-w-md font-inter text-sm leading-6 text-[#888891]">
                    {milestone.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
