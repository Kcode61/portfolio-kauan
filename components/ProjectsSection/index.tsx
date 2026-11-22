"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";

type Project = {
  id: number;
  projectName: string;
  projectLink: string;
  screenshot?: string;
  description: { portuguese: string; english: string };
  challenge: { portuguese: string; english: string };
  solution: { portuguese: string; english: string };
  stack: string[];
};

const projects: Project[] = [
  {
    id: 1,
    projectName: "TechStore",
    projectLink: "https://tech-store-three-virid.vercel.app/",
    screenshot: "/projects/techstore.png",
    description: {
      portuguese:
        "Loja de tecnologia com catálogo, autenticação e jornada de compra completa.",
      english:
        "Technology store with catalog, authentication, and complete shopping journey.",
    },
    challenge: {
      portuguese:
        "Construir uma experiência de e-commerce clara em um catálogo amplo.",
      english:
        "Build a clear e-commerce experience across a broad catalog.",
    },
    solution: {
      portuguese:
        "Catálogo responsivo, área autenticada e integração entre front-end e API.",
      english:
        "Responsive catalog, authenticated area, and front-end/API integration.",
    },
    stack: ["React", "Next.js", "Spring Boot", "Java", "JWT", "Tailwind"],
  },
  {
    id: 2,
    projectName: "Pamofocus",
    projectLink: "https://pamofocus.pages.dev",
    description: {
      portuguese:
        "Ferramenta de foco baseada na técnica Pomodoro, com ciclos personalizáveis.",
      english:
        "Focus tool based on the Pomodoro technique, with customizable cycles.",
    },
    challenge: {
      portuguese:
        "Transformar sessões de estudo em ciclos claros, sem distrações.",
      english:
        "Turn study sessions into clear cycles without distractions.",
    },
    solution: {
      portuguese:
        "Timer interativo, estados de sessão e interface preparada para desktop e mobile.",
      english:
        "Interactive timer, session states, and an interface prepared for desktop and mobile.",
    },
    stack: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind"],
  },
  {
    id: 3,
    projectName: "FlowBoard",
    projectLink: "https://flowboard-kanban-board.pages.dev",
    screenshot: "/projects/flowboard.png",
    description: {
      portuguese:
        "Quadro Kanban interativo para organizar tarefas e acompanhar o progresso.",
      english:
        "Interactive Kanban board for organizing tasks and tracking progress.",
    },
    challenge: {
      portuguese:
        "Organizar tarefas com prioridades, múltiplos estados e uma experiência simples.",
      english:
        "Organize tasks with priorities, multiple states, and a simple experience.",
    },
    solution: {
      portuguese:
        "Interface responsiva com drag and drop, criação de colunas e persistência de estado.",
      english:
        "Responsive interface with drag and drop, column creation, and state persistence.",
    },
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Tailwind"],
  },
  {
    id: 4,
    projectName: "FlowFin",
    projectLink: "https://flowfin-financeiro.vercel.app/",
    screenshot: "/projects/flowfin.png",
    description: {
      portuguese:
        "Aplicação financeira para acompanhar entradas, despesas e visão geral do orçamento.",
      english:
        "Finance application for tracking income, expenses, and budget overview.",
    },
    challenge: {
      portuguese:
        "Apresentar dados financeiros de forma clara e segura.",
      english:
        "Present financial data clearly and securely.",
    },
    solution: {
      portuguese:
        "Dashboard com autenticação, API REST e organização de dados por categorias.",
      english:
        "Dashboard with authentication, REST API, and category-based data organization.",
    },
    stack: ["React", "Next.js", "Spring Boot", "Java", "JWT", "PostgreSQL"],
  },
];

export function ProjectsSection() {
  const { language } = useLanguageStore();
  const isPortuguese = language.portuguese === "Português";

  return (
    <section
      id="Projetos"
      className="bg-[#F8F7FA] px-4 py-20 dark:bg-[#09090B]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-brains text-sm text-[#5B84B1]">
              {isPortuguese ? "<Projetos />" : "<Projects />"}
            </span>
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-poppins text-4xl font-bold text-[#17171c] dark:text-white"
          >
            {isPortuguese ? "Projetos selecionados" : "Selected projects"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-[#888891]"
          >
            {isPortuguese
              ? "Produtos digitais construídos com atenção a produto, interface e engenharia."
              : "Digital products built with attention to product, interface, and engineering."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 py-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group flex h-full flex-col overflow-hidden border border-[#E6E7EB] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#5B84B1]/50 hover:shadow-[0_18px_45px_rgba(27,46,75,0.10)] dark:border-[#26262B] dark:bg-[#101014] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden border-b border-[#E6E7EB] bg-[#0D1014] dark:border-[#26262B] ${
                  index === 0 ? "h-72 sm:h-96" : "h-64"
                }`}
              >
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.projectName} - ${isPortuguese ? "tela do projeto" : "project screen"}`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_30%,#1D2B3A,#101014_55%,#09090B)]">
                    <div className="border border-white/10 bg-[#17171C] px-8 py-6 text-center shadow-2xl">
                      <span className="font-brains text-xs text-[#7AA2D3]">
                        // focus.timer
                      </span>
                      <div className="mt-3 font-poppins text-5xl font-bold text-white">
                        25:00
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/25 to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-brains text-[10px] uppercase tracking-[0.12em] text-[#7D8FA3]">
                      {isPortuguese ? "Projeto" : "Project"} 0{project.id}
                    </span>
                    <h3 className="mt-1 font-poppins text-2xl font-semibold text-[#17171c] dark:text-white">
                      {project.projectName}
                    </h3>
                  </div>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${isPortuguese ? "Abrir" : "Open"} ${project.projectName}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DCE3EA] text-[#3A5F84] transition hover:border-[#3A5F84] hover:bg-[#3A5F84] hover:text-white dark:border-[#343B45] dark:text-[#9BB6D1]"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>

                <p className="mt-4 max-w-2xl font-inter text-sm leading-relaxed text-[#747B85] dark:text-[#A1A1AA]">
                  {isPortuguese
                    ? project.description.portuguese
                    : project.description.english}
                </p>

                <dl
                  className={`mt-6 grid gap-5 border-t border-[#EEF0F3] pt-5 dark:border-[#26262B] ${
                    index === 0 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  <div>
                    <dt className="font-brains text-[10px] uppercase tracking-wider text-[#5B84B1]">
                      {isPortuguese ? "Desafio" : "Challenge"}
                    </dt>
                    <dd className="mt-1 font-inter text-sm leading-6 text-[#747B85] dark:text-[#A1A1AA]">
                      {isPortuguese
                        ? project.challenge.portuguese
                        : project.challenge.english}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-brains text-[10px] uppercase tracking-wider text-[#5B84B1]">
                      {isPortuguese ? "Minha solução" : "My solution"}
                    </dt>
                    <dd className="mt-1 font-inter text-sm leading-6 text-[#747B85] dark:text-[#A1A1AA]">
                      {isPortuguese
                        ? project.solution.portuguese
                        : project.solution.english}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-[#EEF0F3] pt-5 dark:border-[#26262B]">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-sm bg-[#F2F5F8] px-2 py-1 font-brains text-[10px] text-[#53687E] dark:bg-[#1B222A] dark:text-[#A8BACD]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
