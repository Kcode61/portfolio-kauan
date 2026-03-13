import { CodeXml, Gauge, Paintbrush } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      title: "Html",
    },
    {
      title: "Css",
    },
    {
      title: "Tailwind",
    },
    {
      title: "Javascript",
    },
    {
      title: "Typescript",
    },

    {
      title: "React.js",
    },
    {
      title: "Next.js",
    },
  ];
  return (
    <section id="Habilidades" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl flex flex-col gap-4 mx-auto text-center">
          <span className=" font-brains text-sm text-[#894eef] ">
            {"<Habilidades />"}
          </span>
          <h2 className="text-4xl font-bold font-poppins text-white">
            Habilidades
          </h2>
          <p className="font-inter  text-[#888891]">
            Combinação estratégica de design, código e foco em resultado
          </p>
        </div>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="px-4 py-10 rounded-2xl flex-col gap-2 bg-[#101014] border border-[#1B1B20] flex items-center group text-center hover:border-[#894eef]/30 transition ease duration-300">
            <div className="w-14 h-14 mb-2 flex mx-auto items-center justify-center rounded-xl bg-[#1C1629] group-hover:bg-[#894eef]/20 text-[#894eef]/80 ">
              <CodeXml size={28} />
            </div>

            <p className=" text-[#f2f2f2] text-lg font-brains text-medium">
              Desenvolvimento Web
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Código semântico, responsivo e otimizado para SEO e performance
            </p>
          </div>
          <div className="px-6 py-10 rounded-2xl flex-col gap-2 bg-[#101014] border border-[#1B1B20] flex items-center group text-center hover:border-[#894eef]/30 transition ease duration-300">
            <div className="w-14 mb-2 h-14 flex mx-auto items-center justify-center rounded-xl bg-[#1C1629] group-hover:bg-[#894eef]/20 text-[#894eef]/80 ">
              <Paintbrush size={28} />
            </div>

            <p className=" text-[#f2f2f2] text-lg font-brains text-medium">
              UI/UX Design
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Interfaces intuitivas que guiam o usuário naturalmente à conversão
            </p>
          </div>
          <div className="px-6 py-10 rounded-2xl flex-col gap-2 bg-[#101014] border border-[#1B1B20] flex items-center group text-center hover:border-[#894eef]/30 transition ease duration-300">
            <div className="w-14 mb-2  h-14 flex mx-auto items-center justify-center rounded-xl bg-[#1C1629] group-hover:bg-[#894eef]/20 text-[#894eef]/80 ">
              <Gauge size={28} />
            </div>

            <p className=" text-[#f2f2f2] text-lg font-brains text-medium">
              Performance & Conversão
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Otimização técnica focada em velocidade e taxa de conversão
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-sm text-[#888891] font-brains ">
            {"stack.current()"}
          </h2>

          <div className="flex gap-4 flex-wrap justify-center items-center">
            {skills.map((skill) => (
              <span
                key={skill.title}
                className="py-2  cursor-default px-4 rounded-full text-[#f2f2f2] font-brains text-sm bg-[#222226] hover:bg-[#50357f]/20 font-bold hover:text-[#9460ef]  transition ease duration-300"
              >
                {skill.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
