"use client";
import { FolderGit2, Gauge, Users } from "lucide-react";
import { motion } from "framer-motion";
export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-[#F3F6FA] dark:bg-[#09090B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-6 rounded-2xl flex-col gap-2 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-center group text-center hover:border-[#5B84B1]/30 transition ease duration-300"
          >
            <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl bg-[#EAF2FB]  dark:bg-[#162235] group-hover:bg-[#5B84B1]/20 text-[#5B84B1] ">
              <FolderGit2 />
            </div>
            <h2 className="bg-gradient-to-r mt-2 font-poppins font-bold from-[#7AA2D3] to-[#1B2E4B] bg-clip-text text-transparent text-4xl">
              8+
            </h2>
            <p className=" text-[#17171c] dark:text-[#f2f2f2] font-brains text-medium">
              Projetos Desenvolvidos
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Aplicações modernas com foco em interface e experiência do usuário
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="p-6 rounded-2xl flex-col gap-2 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-center group text-center hover:border-[#5B84B1]/30 transition ease duration-300"
          >
            <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl  bg-[#EAF2FB]  dark:bg-[#162235] group-hover:bg-[#5B84B1]/20 text-[#5B84B1] ">
              <Users />
            </div>
            <h2 className="bg-gradient-to-r mt-2 font-poppins font-bold from-[#7AA2D3] to-[#1B2E4B] bg-clip-text text-transparent text-4xl">
              Next.js
            </h2>
            <p className=" text-[#17171c] dark:text-[#f2f2f2] font-brains text-medium">
              Stack Principal
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Desenvolvimento utilizando React, Next.js e TypeScript
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            className="p-6 rounded-2xl flex-col gap-2 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-center group text-center hover:border-[#5B84B1]/30 transition ease duration-300"
          >
            <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl bg-[#EAF2FB]  dark:bg-[#162235] group-hover:bg-[#5B84B1]/20 text-[#5B84B1] ">
              <Gauge />
            </div>
            <h2 className="bg-gradient-to-r mt-2 font-poppins font-bold from-[#7AA2D3] to-[#1B2E4B] bg-clip-text text-transparent text-4xl">
              UI
            </h2>
            <p className=" text-[#17171c] dark:text-[#f2f2f2] font-brains text-medium">
              Interfaces Responsivas
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Layouts modernos adaptados para desktop e mobile
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
