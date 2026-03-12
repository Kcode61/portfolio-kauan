import { Menu, Sun } from "lucide-react";

export function Header() {
  return (
    <>
      <header className="bg-[#09090B] py-5 px-4 border-b border-[#17171B]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex">
            <span className="text-[#894EEF] text-lg font-bold">&lt;</span>
            <span className="text-xl text-white font-bold">K</span>
            <span className="text-[#894EEF] text-lg font-bold">/&gt;</span>
          </div>

          <nav className="md:flex hidden gap-8 items-center">
            <a
              href="#Sobre"
              className="relative font-medium text-sm font-poppins text-[#888891] hover:text-[#f2f2f2] transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Sobre
            </a>
            <a
              href="#Habilidades"
              className="relative  font-medium text-sm font-poppins text-[#888891] hover:text-[#f2f2f2] transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Habilidades
            </a>
            <a
              href="#Projetos"
              className="relative text-sm font-medium font-poppins text-[#888891] hover:text-[#f2f2f2] transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Projetos
            </a>
            <a
              href="#Contato"
              className="relative  font-medium text-sm font-poppins text-[#888891] hover:text-[#f2f2f2] transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Contato
            </a>

            <button className="text-white p-2 rounded-full cursor-pointer transition ease-duration-300 hover:scale-95 duration-300  hover:bg-[#222226] ">
              <Sun size={18} />
            </button>
          </nav>
          <button className="text-white flex md:hidden p-2 rounded-full cursor-pointer transition ease-duration-300 hover:scale-95 duration-300  hover:bg-[#222226] ">
            <Menu />
          </button>
        </div>
      </header>
    </>
  );
}
