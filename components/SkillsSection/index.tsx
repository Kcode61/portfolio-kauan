"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";

export function SkillsSection() {
  const { language } = useLanguageStore();
  const isPortuguese = language.portuguese === "Português";
  const skillGroups = [
    {
      number: "01",
      title: { portuguese: "Front-end", english: "Front-end" },
      description: {
        portuguese: "Interfaces responsivas e componentes para aplicações web.",
        english: "Responsive interfaces and components for web applications.",
      },
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind",
      ],
    },
    {
      number: "02",
      title: { portuguese: "Back-end", english: "Back-end" },
      description: {
        portuguese:
          "Desenvolvimento de APIs e lógica de sistemas usando Java e Spring Boot.",
        english: "API development and system logic using Java and Spring Boot.",
      },
      tags: [
        "Node.js",
        "Java",
        "Spring Boot",
        "Spring Security",
        "PostgreSQL",
        "Rest API",
        "JWT",
      ],
    },
    {
      number: "03",
      title: { portuguese: "Interface e qualidade", english: "UI and quality" },
      description: {
        portuguese:
          "Design systems, experiência de uso e atenção aos detalhes visuais.",
        english:
          "Design systems, user experience, and attention to visual detail.",
      },
      tags: [
        "Figma",
        "Design Systems",
        "UX/UI",
        "Acessibilidade",
        "Responsividade",
        "SEO",
      ],
    },
    {
      number: "04",
      title: { portuguese: "Estado e ferramentas", english: "State and tools" },
      description: {
        portuguese:
          "Gerenciamento de estado, versionamento e otimização da experiência.",
        english:
          "State management, version control, and experience optimization.",
      },
      tags: [
        "Zustand",
        "Performance",
        "Docker",
        "Git",
        "Github",
        "Vscode",
        "IntelliJ IDEA",
      ],
    },
  ];

  return (
    <section
      id="Habilidades"
      className="py-16 bg-[#FAFAFA] dark:bg-[#09090B] px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl flex flex-col gap-4 mx-auto text-center">
          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-brains text-sm text-[#5B84B1]">
              {isPortuguese ? "<Habilidades />" : "<Skills />"}
            </span>
          </motion.span>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold font-poppins text-[#17171c] dark:text-white">
              {isPortuguese ? "Habilidades" : "Skills"}
            </h2>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-inter text-[#888891]">
              {isPortuguese
                ? "Soluções front-end pensadas para experiência, clareza visual e desempenho."
                : "Front-end solutions designed for experience, visual clarity, and performance."}
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-5xl py-14">
          <div className="border-y border-[#DDE3E9] dark:border-[#26262B]">
            {skillGroups.map(({ number, title, description, tags }, index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="grid gap-5 border-b border-[#DDE3E9] py-7 last:border-b-0 dark:border-[#26262B] md:grid-cols-[minmax(220px,0.8fr)_1.5fr_auto] md:items-center md:gap-8 md:py-8"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 font-brains text-xs text-[#5B84B1]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-poppins text-lg font-semibold text-[#17171c] dark:text-white">
                      {isPortuguese ? title.portuguese : title.english}
                    </h3>
                    <p className="mt-1 max-w-xs font-inter text-sm leading-relaxed text-[#888891]">
                      {isPortuguese
                        ? description.portuguese
                        : description.english}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-2 md:pl-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#DDE3E9] bg-white/70 px-2.5 py-1 font-brains text-[11px] text-[#53687E] dark:border-[#30343B] dark:bg-[#101014] dark:text-[#A8BACD]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#Projetos"
                  className="inline-flex w-fit items-center gap-1 font-inter text-xs font-semibold text-[#3A5F84] transition-colors hover:text-[#1B2E4B] dark:text-[#9BB6D1] dark:hover:text-white"
                >
                  {isPortuguese ? "Ver projetos" : "View projects"}
                  <ArrowUpRight size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
