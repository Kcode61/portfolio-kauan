"use client";
import { CodeXml, Gauge, LayoutTemplate, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export function SkillsSection() {
  const skillGroups = [
    {
      title: "Interfaces modernas",
      description:
        "Criação de layouts responsivos, claros e visualmente consistentes para interfaces digitais.",
      icon: CodeXml,
      tags: ["React", "Next.js", "Tailwind", "Responsividade"],
    },
    {
      title: "Componentização",
      description:
        "Estruturação de sistemas reutilizáveis, escaláveis e fáceis de manter em produção.",
      icon: LayoutTemplate,
      tags: ["Design Systems", "Componentes", "TypeScript", "Acessibilidade"],
    },
    {
      title: "Performance e entrega",
      description:
        "Otimização de experiência, velocidade e conversão com foco em resultado real.",
      icon: Rocket,
      tags: ["UX", "Performance", "SEO", "Conversão"],
    },
  ];

  const currentStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Zustand",
    "Git",
    "Figma",
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
              {"<Habilidades />"}
            </span>
          </motion.span>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold font-poppins text-[#17171c] dark:text-white">
              Habilidades
            </h2>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-inter text-[#888891]">
              Soluções front-end pensadas para experiência, clareza visual e
              desempenho.
            </p>
          </motion.div>
        </div>

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(
            ({ title, description, tags, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                className="px-5 py-8 rounded-2xl flex-col gap-4 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-start group hover:border-[#5B84B1]/30 transition ease duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#EAF2FB] dark:bg-[#162235] group-hover:bg-[#5B84B1]/20 text-[#5B84B1]">
                  <Icon size={28} />
                </div>

                <div className="space-y-2">
                  <p className="text-[#17171c] dark:text-[#f2f2f2] text-lg font-brains font-bold">
                    {title}
                  </p>
                  <p className="text-sm text-[#888891] font-inter leading-relaxed">
                    {description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[#EAEAEC] dark:bg-[#1A1A1F] text-[10px] font-brains text-[#17171c] dark:text-white font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h2 className="text-sm text-[#888891] font-brains">
              {"stack.current()"}
            </h2>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            <div className="flex gap-3 flex-wrap justify-center items-center">
              {currentStack.map((skill) => (
                <span
                  key={skill}
                  className="py-2 px-4 rounded-full text-[#17171c] dark:text-[#f2f2f2] font-brains text-sm bg-[#E2E8F0] dark:bg-[#0A0A0E] hover:bg-[#5B84B1]/10 dark:hover:bg-[#5B84B1]/20 font-bold hover:text-[#5B84B1] transition ease duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
