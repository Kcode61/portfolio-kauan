"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
type Project = {
  id: number;
  projectname: string;
  projectLink: string;
  projectDescription: string;
  projectStack: string[];
};

export function ProjectsSection() {
  const ProjectList: Project[] = [
    {
      id: 1,
      projectname: "FlowBoard",
      projectDescription:
        "Um quadro Kanban focado em organização e interatividade.",
      projectLink: "https://flowboard-kanban-board.pages.dev",
      projectStack: ["Next.js", "React", "Tailwind", "TypeScript", "Zustand"],
    },
    {
      id: 2,
      projectname: "Pamofocus",
      projectDescription: "Uma ferramenta de foco baseada na técnica Pomodoro.",
      projectLink: "https://pamofocus.pages.dev",
      projectStack: [
        "HTML",
        "React",
        "Tailwind",
        "TypeScript",
        "Zustand",
        "Next.js",
      ],
    },
    {
      id: 3,
      projectname: "FlowFin",
      projectDescription:
        "Um dashboard para acompanhar e organizar suas finanças.",
      projectLink: "https://flowfin-financeiro.vercel.app/",
      projectStack: [
        "React",
        "Spring Boot",
        "Java",
        "JWT",
        "Tailwind",
        "TypeScript",
        "Zustand",
        "Next.js",
      ],
    },
    {
      id: 4,
      projectname: "TechStore",
      projectDescription:
        "Uma loja de tecnologia com foco em navegação e experiência de compra.",
      projectLink: "https://tech-store-three-virid.vercel.app/",
      projectStack: [
        "React",
        "Spring Boot",
        "Java",
        "JWT",
        "Tailwind",
        "TypeScript",
        "Zustand",
        "Next.js",
      ],
    },
  ];
  return (
    <section
      id="Projetos"
      className="py-16 px-4 bg-[#F8F7FA] bg-[url('/backgroundbranco.png')] dark:bg-[#09090B] dark:bg-none"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl flex flex-col gap-4 mx-auto text-center">
          <motion.span
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <span className=" font-brains text-sm text-[#5B84B1] ">
              {"<Projetos />"}
            </span>
          </motion.span>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold font-poppins text-[#17171c] dark:text-white">
              Projetos
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="font-inter  text-[#888891]">
              Projetos focados em experiência e design moderno e limpo.
            </p>
          </motion.div>
        </div>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ProjectList.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E6E7EB] bg-white transition duration-300 ease-in-out hover:-translate-y-1 hover:border-[#5B84B1]/50 hover:shadow-[0_18px_45px_rgba(27,46,75,0.10)] dark:border-[#26262B] dark:bg-[#101014] dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-56 overflow-hidden border-b border-[#E6E7EB] bg-[#EEF3F8] p-5 dark:border-[#26262B] dark:bg-[#15191F] sm:h-64 sm:p-7">
                <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full bg-[#DCE8F4] dark:bg-[#1D2B3A]" />
                <div className="absolute -bottom-24 left-8 h-48 w-48 rounded-full bg-[#E4ECF4] dark:bg-[#1A242E]" />
                <div className="relative mx-auto flex h-full max-w-md flex-col overflow-hidden rounded-lg border border-[#D8E0E8] bg-white shadow-[0_12px_30px_rgba(27,46,75,0.12)] transition duration-500 group-hover:scale-[1.02] dark:border-[#343B45] dark:bg-[#0D1014]">
                  <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-[#E6E7EB] px-3 dark:border-[#26262B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D7867A]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D9B66F]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#83A88D]" />
                    <span className="ml-2 h-3 w-2/5 rounded-sm bg-[#F1F3F6] dark:bg-[#20252C]" />
                  </div>
                  <div className="flex min-h-0 flex-1">
                    <div className="hidden w-12 shrink-0 flex-col items-center gap-3 border-r border-[#E6E7EB] py-3 dark:border-[#26262B] sm:flex">
                      <span className="h-5 w-5 rounded-md bg-[#3A5F84]" />
                      <span className="h-4 w-4 rounded bg-[#E7EBF0] dark:bg-[#262C34]" />
                      <span className="h-4 w-4 rounded bg-[#E7EBF0] dark:bg-[#262C34]" />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-3 p-3 sm:p-4">
                      {project.id === 1 && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="h-3 w-24 rounded-sm bg-[#253B54] dark:bg-[#DDE6EF]" />
                            <span className="h-5 w-14 rounded bg-[#E8F0F8] dark:bg-[#23384D]" />
                          </div>
                          <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
                            {["A fazer", "Em progresso", "Concluído"].map(
                              (column, columnIndex) => (
                                <div
                                  key={column}
                                  className="rounded bg-[#F5F7F9] p-1.5 dark:bg-[#171C22] sm:p-2"
                                >
                                  <span className="block truncate text-[7px] font-semibold text-[#75808D] sm:text-[8px]">
                                    {column}
                                  </span>
                                  <div className="mt-2 space-y-1.5">
                                    {[0, 1].map((card) => (
                                      <div
                                        key={card}
                                        className="rounded border border-[#E6EAF0] bg-white p-1.5 dark:border-[#2B333D] dark:bg-[#20262E]"
                                      >
                                        <span
                                          className={`mb-1 block h-1 w-4 rounded ${columnIndex === 1 ? "bg-[#D6A75D]" : columnIndex === 2 ? "bg-[#78A68A]" : "bg-[#6F91B5]"}`}
                                        />
                                        <span className="block h-1 w-4/5 rounded bg-[#DDE2E8] dark:bg-[#414A55]" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </>
                      )}
                      {project.id === 2 && (
                        <div className="flex flex-1 items-center justify-center gap-5">
                          <div className="relative flex aspect-square h-28 items-center justify-center rounded-full border-[7px] border-[#E6EDF4] dark:border-[#263442] sm:h-32">
                            <div className="absolute inset-0 rounded-full border-[7px] border-[#5B84B1] [clip-path:polygon(0_0,100%_0,100%_76%,0_76%)]" />
                            <div className="text-center">
                              <span className="block font-brains text-2xl font-semibold text-[#253B54] dark:text-white sm:text-3xl">
                                24:18
                              </span>
                              <span className="mt-1 block text-[8px] uppercase tracking-[0.12em] text-[#828B96]">
                                foco
                              </span>
                            </div>
                          </div>
                          <div className="hidden min-w-24 space-y-2 sm:block">
                            <span className="block h-2 w-16 rounded bg-[#253B54] dark:bg-[#DDE6EF]" />
                            <span className="block h-1.5 w-24 rounded bg-[#DDE3E9] dark:bg-[#343B45]" />
                            <span className="block h-1.5 w-20 rounded bg-[#DDE3E9] dark:bg-[#343B45]" />
                            <span className="mt-4 block h-7 w-20 rounded bg-[#3A5F84]" />
                          </div>
                        </div>
                      )}
                      {project.id === 3 && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="h-3 w-20 rounded-sm bg-[#253B54] dark:bg-[#DDE6EF]" />
                            <span className="h-5 w-12 rounded bg-[#E8F0F8] dark:bg-[#23384D]" />
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {["Saldo", "Entradas", "Saídas"].map(
                              (label, item) => (
                                <div
                                  key={label}
                                  className="rounded border border-[#E6EAF0] p-2 dark:border-[#2B333D]"
                                >
                                  <span className="block text-[7px] text-[#87919C] sm:text-[8px]">
                                    {label}
                                  </span>
                                  <span className="mt-1 block h-1.5 w-4/5 rounded bg-[#405F7E] dark:bg-[#8EAAC6]" />
                                </div>
                              ),
                            )}
                          </div>
                          <div className="flex min-h-0 flex-1 items-end gap-1 border-b border-l border-[#E6EAF0] px-2 dark:border-[#2B333D]">
                            {[
                              35, 52, 42, 72, 58, 86, 66, 96, 78, 100, 72, 90,
                            ].map((height, bar) => (
                              <span
                                key={bar}
                                className="flex-1 rounded-t-sm bg-[#7D9DBD] dark:bg-[#52799F]"
                                style={{ height: `${height}%` }}
                              />
                            ))}
                          </div>
                        </>
                      )}
                      {project.id === 4 && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="font-poppins text-[10px] font-bold text-[#253B54] dark:text-white sm:text-xs">
                              tech<span className="text-[#5B84B1]">store</span>
                            </span>
                            <div className="flex gap-2">
                              <span className="h-3 w-8 rounded-sm bg-[#E7EBF0] dark:bg-[#262C34]" />
                              <span className="h-3 w-3 rounded-full bg-[#E7EBF0] dark:bg-[#262C34]" />
                            </div>
                          </div>
                          <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
                            {[0, 1, 2].map((item) => (
                              <div
                                key={item}
                                className="flex flex-col rounded border border-[#E6EAF0] p-1.5 dark:border-[#2B333D] sm:p-2"
                              >
                                <div className="flex flex-1 items-center justify-center rounded bg-[#F0F4F8] dark:bg-[#1A222B]">
                                  <div
                                    className={`h-9 w-9 rounded-xl border-2 ${item === 1 ? "border-[#A5B9CC] bg-[#DCE6EF]" : "border-[#BBC9D6] bg-white dark:bg-[#2B333D]"}`}
                                  />
                                </div>
                                <span className="mt-1.5 block h-1 w-4/5 rounded bg-[#DDE2E8] dark:bg-[#414A55]" />
                                <span className="mt-1 block h-1 w-2/5 rounded bg-[#7894B0]" />
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-3 right-4 font-brains text-[10px] text-[#8190A0] dark:text-[#778797]">
                  0{project.id} / 04
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-1 block font-brains text-[10px] uppercase tracking-[0.12em] text-[#7D8FA3]">
                      Projeto 0{project.id}
                    </span>
                    <h3 className="font-poppins text-xl font-semibold text-[#17171c] dark:text-white">
                      {project.projectname}
                    </h3>
                  </div>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir ${project.projectname}`}
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE3EA] text-[#3A5F84] transition hover:border-[#3A5F84] hover:bg-[#3A5F84] hover:text-white dark:border-[#343B45] dark:text-[#9BB6D1] dark:hover:border-[#5B84B1]"
                  >
                    <ArrowUpRight size={17} />
                  </a>
                </div>
                <p className="mb-5 max-w-lg font-inter text-sm leading-relaxed text-[#747B85] dark:text-[#A1A1AA]">
                  {project.projectDescription}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 border-t border-[#EEF0F3] pt-4 dark:border-[#26262B]">
                  {project.projectStack.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-sm bg-[#F2F5F8] px-2 py-1 font-brains text-[10px] text-[#53687E] dark:bg-[#1B222A] dark:text-[#A8BACD]"
                    >
                      {technology}
                    </span>
                  ))}
                  {project.projectStack.length > 4 && (
                    <span className="px-1 py-1 font-brains text-[10px] text-[#8B929B]">
                      +{project.projectStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
