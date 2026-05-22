"use client";
import { Palette, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
export function AboutSection() {
  return (
    <section id="Sobre" className="py-16 px-4 bg-[#F3F6FA] dark:bg-[#09090B] ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="flex flex-col">
            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <span className=" font-brains text-sm text-[#5B84B1] ">
                {"<Sobre />"}
              </span>
            </motion.span>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="font-poppins mt-4 mb-6 font-bold text-black dark:text-white text-4xl ">
                Sobre mim
              </h2>
            </motion.div>

            <div className="space-y-5">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <p className="text-md max-w-lg text-[#888891] font-inter ">
                  Sou desenvolvedor front-end focado em criar interfaces
                  modernas, responsivas e intuitivas. Busco unir design limpo,
                  performance e experiência do usuário em cada projeto.
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="text-md max-w-lg text-[#888891] font-inter ">
                  Tenho experiência no desenvolvimento de aplicações web
                  modernas, com atenção à responsividade, componentização e boas
                  práticas de desenvolvimento.
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <p className="text-md max-w-lg  text-[#888891] font-inter ">
                  Trabalho principalmente com React, Next.js, TypeScript e
                  Tailwind CSS, criando interfaces modernas e escaláveis para
                  web.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="p-3 rounded-xl mt-4 bg-[#FFFFFF] dark:bg-[#101014] border border-[#e4e4e7] dark:border-[#1B1B20] flex flex-col gap-2"
              >
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-[#EF4343]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FACC14]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#21C45D]"></div>
                </div>

                <div className="font-brains">
                  <span className="text-[12px] text-[#5B84B1]">const </span>
                  <span className="text-[12px] text-[#7AA2D3]">developer </span>
                  <span className="text-[12px] text-[#17171c] dark:text-[#f2f2f2]">
                    {"= {"}
                  </span>
                  <div className="pl-4 text-[#17171c] dark:text-[#f2f2f2]">
                    <span className="text-[12px] text-[#888891] ">Nome:</span>{" "}
                    <span className="text-[12px] text-[#21c45d]">
                      "Kauan Moura"
                    </span>
                    ,
                    <br />
                    <span className="text-[12px] text-[#888891] ">
                      Stack:
                    </span>{" "}
                    <span className="text-[12px] text-[#21c45d]">
                      "React & Next.js"
                    </span>
                    ,
                    <br />
                    <span className="text-[12px] text-[#888891] ">
                      Especialidade:
                    </span>{" "}
                    <span className="text-[12px] text-[#21c45d]">
                      "Front-end Moderno"
                    </span>
                  </div>
                  <span className="text-[12px] text-[#17171c] dark:text-[#f2f2f2]">
                    {"}"}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 1 }}
            >
              <div className="p-6 rounded-xl  bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] hover:border-[#5B84B1]/30 hover:scale-95 transition ease duration-300 group flex gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#5B84B1] group-hover:bg-[#5B84B1]/20 bg-[#EAF2FB]  dark:bg-[#162235] ">
                  <Target />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#17171c] dark:text-[#f2f2f2] font-brains font-bold ">
                    Interfaces modernas{" "}
                  </h2>
                  <p className="text-[#888891] fontt-inter text-sm ">
                    Interfaces intuitivas com foco em usabilidade e experiência
                    do usuário
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="p-6 rounded-xl   bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] hover:border-[#5B84B1]/30 hover:scale-95 transition ease duration-300 group flex gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#5B84B1] group-hover:bg-[#5B84B1]/20 bg-[#EAF2FB]  dark:bg-[#162235] ">
                  <Zap />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#17171c] dark:text-[#f2f2f2] font-brains font-bold ">
                    Código performático
                  </h2>
                  <p className="text-[#888891] fontt-inter text-sm ">
                    Aplicações rápidas, responsivas e construídas com boas
                    práticas modernas
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="p-6 rounded-xl  bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] hover:border-[#5B84B1]/30 hover:scale-95 transition ease duration-300 group flex gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#5B84B1] group-hover:bg-[#5B84B1]/20 bg-[#EAF2FB]  dark:bg-[#162235] ">
                  <Palette />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#17171c] dark:text-[#f2f2f2] font-brains font-bold ">
                    UI & Experiência
                  </h2>
                  <p className="text-[#888891] fontt-inter text-sm ">
                    Design limpo e consistente pensado para aplicações modernas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
