export function HomeSpan() {
  return (
    <span className="bg-[#1D1D20] mx-auto w-fit py-2 px-5 rounded-full flex gap-3 items-center">
      <span className="w-2 h-2 rounded-full bg-[#21c45d] animate-pulse "></span>
      <span className="text-[#888891] font-brains text-[14px]">
        ~/portfolio <span className="text-[#894eef]">$</span> hello --world
      </span>
    </span>
  );
}
