"use client";
import { FolderGit2, Gauge, Users } from "lucide-react";
import { motion } from "framer-motion";
export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-[#F8F7FA] dark:bg-[#09090B]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-6 rounded-2xl flex-col gap-2 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-center group text-center hover:border-[#894eef]/30 transition ease duration-300"
          >
            <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl bg-[#F2EBFD]  dark:bg-[#1C1629] group-hover:bg-[#894eef]/20 text-[#894eef]/80 ">
              <FolderGit2 />
            </div>
            <h2 className="bg-gradient-to-r mt-2 font-poppins font-bold from-[#8A4EEE] to-[#D35EED] bg-clip-text text-transparent text-5xl">
              8+
            </h2>
            <p className=" text-[#17171c] dark:text-[#f2f2f2] font-brains text-medium">
              Projetos Entregues
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Landing pages modernas e responsivas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className="p-6 rounded-2xl flex-col gap-2 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-center group text-center hover:border-[#894eef]/30 transition ease duration-300"
          >
            <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl  bg-[#F2EBFD]  dark:bg-[#1C1629] group-hover:bg-[#894eef]/20 text-[#894eef]/80 ">
              <Users />
            </div>
            <h2 className="bg-gradient-to-r mt-2 font-poppins font-bold from-[#8A4EEE] to-[#D35EED] bg-clip-text text-transparent text-5xl">
              5+
            </h2>
            <p className=" text-[#17171c] dark:text-[#f2f2f2] font-brains text-medium">
              Clientes Satisfeitos
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Projetos focados em resultado
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            className="p-6 rounded-2xl flex-col gap-2 bg-[#FFFFFF] dark:bg-[#101014] border border-[#F1F1F3] dark:border-[#1B1B20] flex items-center group text-center hover:border-[#894eef]/30 transition ease duration-300"
          >
            <div className="w-12 h-12 flex mx-auto items-center justify-center rounded-xl bg-[#F2EBFD]  dark:bg-[#1C1629] group-hover:bg-[#894eef]/20 text-[#894eef]/80 ">
              <Gauge />
            </div>
            <h2 className="bg-gradient-to-r mt-2 font-poppins font-bold from-[#8A4EEE] to-[#D35EED] bg-clip-text text-transparent text-5xl">
              100%
            </h2>
            <p className=" text-[#17171c] dark:text-[#f2f2f2] font-brains text-medium">
              Foco em Performance
            </p>
            <p className="text-sm text-[#888891] font-inter">
              Sites rápidos que convertem
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
