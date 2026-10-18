"use client";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";

const milestones = [
  {
    date: { portuguese: "Setembro 2024", english: "September 2024" },
    title: { portuguese: "Primeiros passos", english: "First steps" },
    description: {
      portuguese: "Comecei a estudar programação e construir minha base.",
      english: "I started studying programming and building my foundation.",
    },
  },
  {
    date: { portuguese: "Maio 2025", english: "May 2025" },
    title: { portuguese: "Projetos reais", english: "Real-world projects" },
    description: {
      portuguese:
        "Comecei a desenvolver projetos para resolver problemas reais.",
      english: "I started building projects to solve real-world problems.",
    },
  },
  {
    date: { portuguese: "Setembro 2025", english: "September 2025" },
    title: { portuguese: "Estudos em back-end", english: "Back-end studies" },
    description: {
      portuguese:
        "Passei a estudar e me aprofundar no desenvolvimento back-end.",
      english:
        "I began studying and deepening my knowledge of back-end development.",
    },
  },
  {
    date: { portuguese: "Maio 2026", english: "May 2026" },
    title: {
      portuguese: "Projetos para empresas",
      english: "Projects for businesses",
    },
    description: {
      portuguese:
        "Comecei a prospectar clientes e desenvolver projetos para empresas reais.",
      english:
        "I started reaching out to clients and building projects for real businesses.",
    },
  },
];

export function AboutSection() {
  const { language } = useLanguageStore();
  const isPortuguese = language.portuguese === "Português";

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
                {isPortuguese ? "<Sobre />" : "<About />"}
              </span>
            </motion.span>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-poppins mt-4 mb-6 font-bold text-black dark:text-white text-4xl ">
                {isPortuguese ? "Sobre mim" : "About me"}
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
                  {isPortuguese
                    ? "Sou desenvolvedor front-end focado em criar interfaces modernas, responsivas e intuitivas. Busco unir design limpo, performance e experiência do usuário em cada projeto."
                    : "I'm a front-end developer focused on creating modern, responsive, and intuitive interfaces. I bring clean design, performance, and user experience together in every project."}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="text-md max-w-lg text-[#888891] font-inter ">
                  {isPortuguese
                    ? "Tenho experiência no desenvolvimento de aplicações web modernas, com atenção à responsividade, componentização e boas práticas de desenvolvimento."
                    : "I have experience building modern web applications, with a focus on responsiveness, componentization, and development best practices."}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-md max-w-lg  text-[#888891] font-inter ">
                  {isPortuguese
                    ? "Trabalho principalmente com React, Next.js, TypeScript e Tailwind CSS, criando interfaces modernas e escaláveis para web."
                    : "I mainly work with React, Next.js, TypeScript, and Tailwind CSS, building modern and scalable web interfaces."}
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
                          <span className="text-[#888891]">
                            {isPortuguese ? "Nome:" : "Name:"}
                          </span>{" "}
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
                          <span className="text-[#888891]">
                            {isPortuguese ? "Especialidade:" : "Specialty:"}
                          </span>{" "}
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
              {isPortuguese ? "Minha trajetória" : "My journey"}
            </h3>
            <ol className="ml-2 border-l border-[#5B84B1]/40">
              {milestones.map((milestone, index) => (
                <motion.li
                  key={milestone.date.english}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative pb-9 pl-7 last:pb-0"
                >
                  <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[#5B84B1] ring-4 ring-[#F3F6FA] dark:ring-[#09090B]" />
                  <time className="font-brains text-xs text-[#5B84B1]">
                    {isPortuguese
                      ? milestone.date.portuguese
                      : milestone.date.english}
                  </time>
                  <h4 className="mt-1 font-poppins text-lg font-semibold text-[#17171c] dark:text-[#f2f2f2]">
                    {isPortuguese
                      ? milestone.title.portuguese
                      : milestone.title.english}
                  </h4>

                  <p className="mt-1 max-w-md font-inter text-sm leading-6 text-[#888891]">
                    {isPortuguese
                      ? milestone.description.portuguese
                      : milestone.description.english}
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
