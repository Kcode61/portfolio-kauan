"use client";
import { ExternalLink } from "lucide-react";
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
              className="group flex h-full flex-col items-start gap-4 rounded-xl border border-[#F1F1F3] bg-white px-5 py-8 transition duration-300 ease-in-out hover:border-[#5B84B1]/30 dark:border-[#1B1B20] dark:bg-[#101014]"
            >
              <div className="flex w-full items-center justify-between gap-4">
                <span className="font-brains text-xs text-[#5B84B1]">
                  projeto.0{project.id}
                </span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={project.projectLink}
                  aria-label={`Acessar projeto ${project.projectname}`}
                  className="inline-flex font-brains items-center gap-2 text-xs text-[#888891] transition hover:text-[#5B84B1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5B84B1] dark:text-[#a1a1aa]"
                >
                  Ver projeto
                  <ExternalLink aria-hidden="true" size={16} />
                </a>
              </div>

              <div className="space-y-2">
                <h3 className="font-brains text-lg font-bold text-[#17171c] transition group-hover:text-[#5B84B1] dark:text-[#f2f2f2]">
                  {project.projectname}
                </h3>
                <p className="font-inter text-sm leading-relaxed text-[#888891]">
                  {project.projectDescription}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.projectStack.slice(0, 4).map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full bg-[#EAEAEC] px-2.5 py-1 font-brains text-[10px] font-bold text-[#17171c] dark:bg-[#1A1A1F] dark:text-white"
                  >
                    {stack}
                  </span>
                ))}
                {project.projectStack.length > 4 && (
                  <span className="self-center font-brains text-xs text-[#888891]">
                    +{project.projectStack.length - 4}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
