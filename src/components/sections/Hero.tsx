"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fade: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-sm text-[#ef4444] font-mono mb-4 tracking-widest uppercase"
        >
          Product Designer — Chile
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl font-bold tracking-tight leading-none mb-6"
        >
          Bryan
          <br />
          Estrada
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-[#717171] max-w-xl leading-relaxed mb-12"
        >
          Transformo desafíos complejos en experiencias claras, funcionales y
          significativas. Especializado en Design Systems, UX/UI y productos
          digitales.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center gap-6"
        >
          <a
            href="#proyectos"
            className="px-6 py-3 bg-[#ef4444] text-white text-sm font-medium rounded-full hover:bg-[#dc2626] transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="/cv"
            className="px-6 py-3 border border-[#1f1f1f] text-sm font-medium rounded-full hover:border-[#404040] transition-colors"
          >
            Mi CV
          </a>
        </motion.div>

        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-20 flex items-center gap-3 text-[#404040] text-sm"
        >
          <ArrowDown size={16} className="animate-bounce" />
          <span>Scroll para ver proyectos</span>
        </motion.div>
      </div>
    </section>
  );
}
