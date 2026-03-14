import { Github } from "lucide-react";

export function ContactPage() {
  return (
    <section id="Contato" className="py-16 px-4 bg-[#F8F7FA] dark:bg-[#09090B]">
      <div className="max-w-6xl mx-auto">
        <div className="border max-w-2xl mx-auto group  h-full  border-[#F1F1F3] dark:border-[#26262b] rounded-xl flex flex-col ">
          <div className="px-4 py-3 border-b border-[#F1F1F3] dark:border-[#26262b] flex bg-[#FFFFFF] dark:bg-[#101014]  gap-4 rounded-t-xl  items-center">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#EF4343]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FACC14]"></div>
              <div className="w-3 h-3 rounded-full bg-[#21C45D]"></div>
            </div>
            <p className="text-xs text-[#888891] font-brains">contato.tsx</p>
          </div>
          <div className="px-8 py-10 rounded-b-xl flex bg-[#FFFFFF] dark:bg-[#101014] flex-col gap-4  items-center">
            <span className=" font-brains text-sm text-[#894eef] ">
              {"<Contato />"}
            </span>

            <h2 className="text-3xl dark:text-white  text-[#17171c] font-bold font-poppins">
              Vamos Conversar?
            </h2>
            <p className="text-[16px] mb-4 font-inter text-[#888891] text-center max-w-md">
              Estou disponível para novos projetos. Se você precisa de uma
              landing page que converte, vamos bater um papo.
            </p>
            <div className="rounded-xl  w-full max-w-[320px] mb-4 border p-4 bg-[#F9F9FA] dark:bg-[#17171A] text-sm border-[#EEEEF0] dark:border-[#1E1E23] ">
              <span className="font-brains text-[#894eef] ">$ </span>
              <span className="text-[#888891] font-brains ">echo </span>
              <span className="text-[#21c45d] font-brains">
                "Vamos trabalhar juntos!"
              </span>
            </div>

            <a
              href="https://github.com/Kcode61"
              className="py-3 px-6 cursor-pointer hover:bg-[#894eef]/80 hover:scale-95 transition ease duration-300 text-sm rounded-full text-white   font-inter flex gap-3 items-center bg-[#894eef]"
            >
              <Github size={20} /> Ver Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
