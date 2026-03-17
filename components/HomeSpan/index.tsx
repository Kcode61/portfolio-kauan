import { motion } from "framer-motion";
export function HomeSpan() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <span className="dark:bg-[#1D1D20] bg-[#EDEDEF]  border border-[#EBEBEE] dark:border-[#1D1D22] mx-auto w-fit py-2 px-5 rounded-full flex gap-3 items-center">
        <span className="w-2 h-2 rounded-full bg-[#21c45d] animate-pulse "></span>

        <span className="text-[#888891] font-brains text-[14px]">
          ~/portfolio <span className="text-[#894eef]">$</span> hello --world
        </span>
      </span>
    </motion.div>
  );
}
