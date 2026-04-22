"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, categories, type ProjectCategory } from "@/data/projects";

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "Todos"
  >("Todos");

  const filtered =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>

          <div className="flex flex-wrap gap-2">
            {(["Todos", ...categories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as ProjectCategory | "Todos")}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  activeCategory === cat
                    ? "border-[#ef4444] text-[#ef4444]"
                    : "border-[#1f1f1f] text-[#717171] hover:border-[#404040] hover:text-[#ededed]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-[#404040] text-sm py-20 text-center">
            Proyectos próximamente.
          </p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="group block border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#404040] transition-colors"
                  >
                    <div className="aspect-video bg-[#111111] relative">
                      {project.coverImage && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#1f1f1f] text-5xl font-bold select-none">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs text-[#ef4444] font-mono mb-1">
                            {project.category} · {project.year}
                          </p>
                          <h3 className="font-semibold text-lg leading-tight group-hover:text-[#ededed] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-[#717171] mt-2 line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="shrink-0 mt-1 text-[#404040] group-hover:text-[#ef4444] transition-colors"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-[#111111] rounded-md text-[#717171]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
