import { ExternalLink } from "lucide-react";
type project = {
  id: number;
  projectname: string;
  projectLink: string;
  projectImage?: string;
  projectDescription: string;
  projectStack: string[];
};
export function ProjectsSection() {
  const ProjectList: project[] = [
    {
      id: 1,
      projectname: "Landing Page Tailwind",
      projectDescription:
        "Landing page moderna focada em Responsividade feita usando TailwindCSS",
      projectLink: "https://tailwind-landing-page-4fe.pages.dev",
      projectStack: ["Html", "Css", "Tailwind"],
    },
    {
      id: 2,
      projectname: "FlowBoard - KabanBoard",
      projectDescription: "Um Kaban Board focado em conversão e interatividade",
      projectLink: "https://flowboard-kanban-board.pages.dev",
      projectStack: ["Next.js", "React", "Tailwind", "Typescript", "Zustand"],
    },
    {
      id: 3,
      projectname: "E-commerce: TechStore",
      projectDescription: "E-commerce de acessórios e produtos tecnológicos",
      projectLink: "https://e-commerce-tech-store.pages.dev",
      projectStack: [
        "Html",
        "React",
        "Tailwind",
        "Typescript",
        "Zustand",
        "React-Router",
      ],
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl flex flex-col gap-4 mx-auto text-center">
          <span className=" font-brains text-sm text-[#894eef] ">
            {"<Projetos />"}
          </span>
          <h2 className="text-4xl font-bold font-poppins text-white">
            Projetos
          </h2>
          <p className="font-inter  text-[#888891]">
            Projetos focados em experiência e design moderno e limpo.
          </p>
        </div>
        <div className="py-16  grid grid-cols-1 md:grid-cols-2  gap-6">
          {ProjectList.map((project) => (
            <div
              key={project.id}
              className="border group  h-full hover:border-[#894eef]/50   border-[#26262b] rounded-xl flex flex-col "
            >
              <div className="px-4 py-3 border-b border-[#1B1B20] flex bg-[#101014] justify-between rounded-t-xl  items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#EF4343]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FACC14]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#21C45D]"></div>
                </div>
                <a
                  target="_blank"
                  href={project.projectLink}
                  className=" hover:text-[#894eef] transition text-[#f2f2f2] cursor-pointer"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="p-6 flex flex-col gap-4 bg-linear-to-br from-[#151519]  to-[#101014]">
                <span className="text-xs text-[#888891]/70 font-brains">
                  <span className="text-[#894eef]/50">{project.id}</span> //{" "}
                  {project.projectname}
                </span>
                <div className="px-4 py-5 rounded-xl bg-[#18181B] text-center ">
                  {project.projectImage ? (
                    <img
                      src={project.projectImage}
                      alt={project.projectname}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-[#888891]/40  font-brains">
                      {"<Preview />"}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 h-full flex flex-col gap-4 rounded-b-xl bg-[#101014]">
                <h2 className="text-lg transition text-[#f2f2f2] group-hover:text-[#894eef] font-brains font-bold ">
                  {project.projectname}
                </h2>
                <p className="text-sm text-[#888891] font-inter max-w-md">
                  {project.projectDescription}
                </p>

                <div className="flex flex-wrap gap-2 items-center ">
                  {project.projectStack.map((stack) => (
                    <span className="text-[#f2f2f2] hover:bg-[#222226]/40 transition py-1.5 px-4 rounded-full bg-[#222226] text-xs cursor-default font-brains font-bold">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
