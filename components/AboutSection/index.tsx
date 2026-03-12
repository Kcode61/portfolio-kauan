import { Palette, Target, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 px-4 bg-[#09090B] ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="flex flex-col">
            <span className=" font-brains text-sm text-[#894eef] ">
              {"<Sobre />"}
            </span>
            <h2 className="font-poppins mt-4 mb-6 font-bold text-white text-4xl ">
              Sobre mim
            </h2>
            <div className="space-y-5">
              <p className="text-md max-w-lg text-[#888891] font-inter ">
                Sou desenvolvedor front-end apaixonado por criar landing pages
                que não só ficam bonitas, mas que realmente funcionam. Acredito
                que simplicidade e funcionalidade andam juntas.
              </p>
              <p className="text-md max-w-lg text-[#888891] font-inter ">
                Meu foco está em desenvolver páginas que carregam rápido, são
                fáceis de navegar e convertem visitantes em clientes.
              </p>
              <p className="text-md max-w-lg  text-[#888891] font-inter ">
                Trabalho com HTML, CSS, Tailwind, JavaScript, TypeScript, React
                e Next.js. O importante é entregar resultado.
              </p>
              <div className="p-3 rounded-xl mt-4 bg-[#101014] border border-[#1B1B20] flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#EF4343]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FACC14]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#21C45D]"></div>
                </div>
                <div className="font-brains">
                  <span className="text-[12px] text-[#894eef]">const </span>
                  <span className="text-[12px] text-[#a87ef1]">developer </span>
                  <span className="text-[12px] text-[#f2f2f2]">{"= {"}</span>
                  <div className="pl-4 text-[#f2f2f2]">
                    <span className="text-[12px] text-[#888891] ">Nome:</span>{" "}
                    <span className="text-[12px] text-[#21c45d]">
                      "Kauan Moura"
                    </span>
                    ,
                    <br />
                    <span className="text-[12px] text-[#888891] ">
                      foco:
                    </span>{" "}
                    <span className="text-[12px] text-[#21c45d]">
                      "Landing Pages"
                    </span>
                    ,
                    <br />
                    <span className="text-[12px] text-[#888891] ">
                      Objetivo:
                    </span>{" "}
                    <span className="text-[12px] text-[#21c45d]">
                      "Converter visitantes"
                    </span>
                    ,
                  </div>
                  <span className="text-[12px] text-[#f2f2f2]">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="p-6 rounded-xl  bg-[#101014] border border-[#1B1B20] hover:border-[#894eef]/20 hover:scale-95 transition ease duration-300 group flex gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#894eef] group-hover:bg-[#894eef]/20 bg-[#1C1629] ">
                <Target />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#f2f2f2] font-brains font-bold ">
                  Foco em resultado
                </h2>
                <p className="text-[#888891] fontt-inter text-sm ">
                  Páginas pensadas para conversão, não apenas para estética
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl  bg-[#101014] border border-[#1B1B20] hover:border-[#894eef]/20 hover:scale-95 transition ease duration-300 group flex gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#894eef] group-hover:bg-[#894eef]/20 bg-[#1C1629] ">
                <Zap />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#f2f2f2] font-brains font-bold ">
                  Performance otimizada
                </h2>
                <p className="text-[#888891] fontt-inter text-sm ">
                  Carregamento rápido que mantém seus visitantes engajados
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl  bg-[#101014] border border-[#1B1B20] hover:border-[#894eef]/20 hover:scale-95 transition ease duration-300 group flex gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#894eef] group-hover:bg-[#894eef]/20 bg-[#1C1629] ">
                <Palette />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#f2f2f2] font-brains font-bold ">
                  Design estratégico
                </h2>
                <p className="text-[#888891] fontt-inter text-sm ">
                  Cada elemento existe para guiar o usuário à ação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
