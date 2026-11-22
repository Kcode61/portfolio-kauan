"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";

type Project = {
  id: number;
  projectName: string;
  projectLink: string;
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
                {project.id === 1 && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,#26384B,#11151B_48%,#090A0D)] p-4 sm:p-7">
                    <div className="mx-auto h-full max-w-5xl overflow-hidden rounded-t-xl border border-white/10 bg-[#0B0D10] shadow-[0_25px_70px_rgba(0,0,0,.55)]">
                      <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#15181D] px-4">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#D7867A]" />
                          <span className="h-2 w-2 rounded-full bg-[#D9B66F]" />
                          <span className="h-2 w-2 rounded-full bg-[#83A88D]" />
                        </div>
                        <div className="h-5 w-28 rounded-sm bg-white/[0.055]" />
                        <div className="h-5 w-5 rounded-full bg-white/[0.08]" />
                      </div>
                      <div className="grid h-[calc(100%-36px)] grid-cols-[1fr_.72fr]">
                        <div className="flex flex-col justify-center px-7 sm:px-12">
                          <div className="mb-5 flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4F78A6] font-poppins text-[10px] font-bold text-white">TS</span>
                            <span className="font-poppins text-sm font-bold text-white">TechStore</span>
                          </div>
                          <span className="mb-3 font-brains text-[8px] uppercase tracking-[.22em] text-[#7AA2D3]">Curadoria 2026</span>
                          <div className="max-w-sm font-poppins text-[27px] font-bold leading-[1.05] text-white sm:text-[42px]">
                            Tecnologia que <span className="text-[#5680AD]">vale a pena.</span>
                          </div>
                          <div className="mt-4 h-1.5 w-[68%] rounded bg-white/18" />
                          <div className="mt-2 h-1.5 w-[52%] rounded bg-white/12" />
                          <div className="mt-5 flex gap-2">
                            <div className="h-8 w-24 rounded-full bg-[#5680AD]" />
                            <div className="h-8 w-20 rounded-full border border-white/15" />
                          </div>
                        </div>
                        <div className="relative overflow-hidden border-l border-white/[0.07] bg-[linear-gradient(145deg,#252E39,#151920)]">
                          <div className="absolute -right-14 -top-12 h-48 w-48 rounded-full border border-[#7AA2D3]/15" />
                          <div className="absolute bottom-0 left-[12%] h-[78%] w-[76%] rotate-3 rounded-t-[24px] border border-white/10 bg-[linear-gradient(145deg,#DDE8F2,#778DA5)] p-3 shadow-2xl">
                            <div className="h-full rounded-t-[16px] bg-[linear-gradient(155deg,#9FB5CB_0%,#586D82_55%,#242C35_56%,#151A20_100%)]">
                              <div className="ml-[18%] mt-[18%] h-[54%] w-[64%] rotate-[18deg] rounded-xl border border-white/20 bg-[linear-gradient(135deg,#ECF3FA,#6E8196)] shadow-xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {project.id === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_48%,#273550,#111827_55%,#090A0D)] p-5">
                    <div className="absolute left-5 top-5 h-20 w-20 rounded-full border border-white/[0.04]" />
                    <div className="flex h-full w-full max-w-lg flex-col rounded-xl border border-white/10 bg-[#10131A]/95 shadow-[0_22px_60px_rgba(0,0,0,.55)] backdrop-blur">
                      <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
                        <span className="font-poppins text-[11px] font-semibold text-white/90">PamoFocus</span>
                        <div className="flex items-center gap-3">
                          <span className="h-3 w-3 rounded-full border border-[#7AA2D3]/60" />
                          <span className="h-3 w-3 rounded-sm border border-white/15" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-center">
                        <div className="mb-4 flex rounded-full border border-white/[0.06] bg-black/10 p-1">
                          {["Focus", "Short Break", "Long Break"].map((tab) => (
                            <span key={tab} className={`px-3 py-1.5 font-brains text-[7px] sm:px-4 ${tab === "Focus" ? "rounded-full bg-[#557FAF] text-white shadow-[0_4px_18px_rgba(85,127,175,.35)]" : "text-white/25"}`}>{tab}</span>
                          ))}
                        </div>
                        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-[#2A3445] sm:h-40 sm:w-40">
                          <div className="absolute inset-[-6px] rounded-full border-[6px] border-transparent border-t-[#628EBB] border-r-[#628EBB] rotate-[35deg]" />
                          <div className="font-brains text-4xl font-semibold tracking-[.08em] text-white sm:text-5xl">25:00</div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="flex h-8 w-20 items-center justify-center rounded-full bg-[#557FAF] text-[8px] font-bold text-white">
                            <span className="mr-1.5 h-0 w-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-white" />
                            Start
                          </div>
                          <div className="h-8 w-8 rounded-full border border-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {project.id === 3 && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#242D38,#12161D_58%,#090A0D)] p-5 sm:p-8">
                    <div className="mx-auto flex h-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-[#171B22] shadow-[0_20px_55px_rgba(0,0,0,.45)]">
                      <div className="hidden w-14 shrink-0 flex-col items-center gap-5 border-r border-white/[0.07] bg-[#11141A] py-4 sm:flex">
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#557FAF] font-poppins text-[9px] font-bold text-white">F</span>
                        {[0, 1, 2].map((item) => (
                          <span key={item} className={`h-4 w-4 rounded ${item === 0 ? "bg-[#557FAF]/40" : "border border-white/10"}`} />
                        ))}
                      </div>
                      <div className="min-w-0 flex-1 p-3 sm:p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="h-2 w-16 rounded bg-[#557FAF]/70" />
                            <div className="mt-2 h-4 w-28 rounded bg-white/85" />
                          </div>
                          <div className="h-7 w-7 rounded-full border border-white/10" />
                        </div>
                        <div className="grid h-[calc(100%-47px)] grid-cols-3 gap-2">
                          {[
                            ["A fazer", ["Explorar", "Criar tarefas"], "#718DA9"],
                            ["Em progresso", ["Arrastar tarefas"], "#D4A960"],
                            ["Concluído", ["Planejar fluxo"], "#78A77D"],
                          ].map(([title, cards, color]) => (
                            <div key={title as string} className="rounded-md border border-white/[0.055] bg-[#11151B] p-2">
                              <div className="mb-2 flex items-center justify-between">
                                <span className="text-[7px] font-semibold text-white/55 sm:text-[9px]">{title}</span>
                                <span className="h-3 w-3 rounded-sm bg-white/[0.06]" />
                              </div>
                              {(cards as string[]).map((card) => (
                                <div key={card} className="mb-2 rounded-md border border-white/[0.07] bg-[#1E232B] p-2">
                                  <span className="mb-2 block h-1 w-3/4 rounded" style={{ backgroundColor: color as string }} />
                                  <span className="block text-[7px] text-white/70 sm:text-[8px]">{card}</span>
                                  <div className="mt-2 h-1 w-1/2 rounded bg-white/10" />
                                </div>
                              ))}
                              <div className="mt-1 text-[7px] text-white/20">+ adicionar tarefa</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {project.id === 4 && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#2A2718,#111318_62%,#090A0D)] p-5 sm:p-8">
                    <div className="mx-auto h-full max-w-3xl overflow-hidden rounded-lg border border-white/10 bg-[#121419] shadow-[0_22px_60px_rgba(0,0,0,.5)]">
                      <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
                        <div className="flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#E0B82F] font-poppins text-[9px] font-black text-[#111318]">F</span>
                          <span className="font-poppins text-[10px] font-bold text-white">FlowFin</span>
                        </div>
                        <div className="flex gap-2">
                          <span className="h-6 w-16 rounded-md border border-white/10" />
                          <span className="h-6 w-6 rounded-full bg-[#E0B82F]" />
                        </div>
                      </div>
                      <div className="grid h-[calc(100%-40px)] grid-cols-[.78fr_1.22fr] gap-4 p-4">
                        <div className="flex flex-col justify-center">
                          <span className="mb-3 h-5 w-24 rounded-full border border-[#E0B82F]/30 bg-[#E0B82F]/10" />
                          <div className="font-poppins text-2xl font-bold leading-tight text-white sm:text-[30px]">
                            Suas finanças, <span className="text-[#E0B82F]">sob controle.</span>
                          </div>
                          <div className="mt-4 h-1.5 w-[78%] rounded bg-white/15" />
                          <div className="mt-2 h-1.5 w-[58%] rounded bg-white/10" />
                          <div className="mt-5 h-8 w-28 rounded-md bg-[#E0B82F]" />
                        </div>
                        <div className="grid grid-cols-2 content-center gap-2">
                          {[
                            ["Receitas", "+ R$ 4.850"],
                            ["Despesas", "- R$ 1.920"],
                            ["Metas", "68%"],
                            ["Saldo", "R$ 2.930"],
                          ].map(([label, value]) => (
                            <div key={label} className="h-[58px] rounded-md border border-white/[0.07] bg-white/[0.035] p-3 shadow-[inset_0_1px_rgba(255,255,255,.03)]">
                              <div className="mb-2 h-1 w-8 rounded bg-[#E0B82F]/80" />
                              <span className="block text-[7px] text-white/35">{label}</span>
                              <span className="mt-1 block text-[9px] font-semibold text-white/85 sm:text-[11px]">{value}</span>
                            </div>
                          ))}
                        </div>
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
