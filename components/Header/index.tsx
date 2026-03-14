"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export function Header() {
  const [isopen, setisopen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <>
      {isopen && (
        <div
          onClick={() => setisopen(false)}
          className="bg-black/50 inset-0 fixed z-40 w-full h-screen"
        ></div>
      )}
      <header className="dark:bg-[#09090B] bg-[#FAFAFA] sticky top-0 z-50  py-5 md:px-4 border-b  border-[#EFEFF1] dark:border-[#17171B]">
        <div className="max-w-6xl px-4 md:px-0 mx-auto flex justify-between items-center">
          <div className="flex">
            <span className="text-[#894EEF] text-lg font-bold">&lt;</span>
            <span className="text-xl text-black dark:text-white font-bold">
              K
            </span>
            <span className="text-[#894EEF] text-lg font-bold">/&gt;</span>
          </div>

          <nav className="md:flex hidden gap-8 items-center">
            <a
              href="#Sobre"
              className="relative font-medium text-sm font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]   transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Sobre
            </a>
            <a
              href="#Habilidades"
              className="relative  font-medium text-sm font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Habilidades
            </a>
            <a
              href="#Projetos"
              className="relative text-sm font-medium font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Projetos
            </a>
            <a
              href="#Contato"
              className="relative  font-medium text-sm font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors  after:content-[''] after:absolute after:left-0 after:-bottom-1   after:h-[2px] after:w-0 after:bg-[#8A4EEE]  after:transition-all after:duration-300  hover:after:w-full"
            >
              Contato
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="dark:text-white text-[#17171c]  p-2 rounded-full cursor-pointer transition ease-duration-300 hover:scale-95 duration-300  hover:bg-[#eaeaec] dark:hover:bg-[#222226] "
            >
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </nav>

          <button
            onClick={() => setisopen(!isopen)}
            className="dark:text-white text-[#17171c] flex md:hidden p-2 rounded-full cursor-pointer transition-all ease-duration-300 hover:scale-95 duration-300  hover:bg-[#222226] "
          >
            {isopen ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          className={`${
            isopen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden absolute bg-white dark:bg-[#09090B] p-5 top-full left-0 w-full z-50 transition-all duration-300 ease flex border-t border-[#F1F1F3] dark:border-[#17171B] flex-col gap-6`}
        >
          <a
            href="#Sobre"
            className=" font-medium text-sm font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors  "
          >
            Sobre
          </a>
          <a
            href="#Habilidades"
            className="  font-medium text-sm font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors  "
          >
            Habilidades
          </a>
          <a
            href="#Projetos"
            className=" text-sm font-medium font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors "
          >
            Projetos
          </a>
          <a
            href="#Contato"
            className="  font-medium text-sm font-poppins text-[#888891] dark:hover:text-[#f2f2f2] hover:text-[#17171c]  transition-colors  "
          >
            Contato
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-[#888891]"
          >
            {theme === "dark" ? (
              <div className="flex gap-2  font-poppins text-sm font-medium  items-center">
                <Moon size={18} className="text-[#17171c] dark:text-white" />
                Modo Dark
              </div>
            ) : (
              <div className="flex gap-2  font-poppins text-sm  font-medium items-center">
                <Sun size={18} className="text-[#17171c] dark:text-white" />
                Modo claro
              </div>
            )}
          </button>
        </nav>
      </header>
    </>
  );
}
