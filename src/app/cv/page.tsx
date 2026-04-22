import { Download, ExternalLink, Mail, Phone } from "lucide-react";

const experience = [
  {
    role: "Product Designer",
    company: "Sherut",
    period: "May. 2025 — Presente",
    items: [
      "Lideré el diseño de producto implementando el primer Design System para asegurar escalabilidad y consistencia visual.",
      "Optimicé la navegación de la app (UX) y diseñé la funcionalidad core 'Agenda Digital' junto con su plataforma web responsive.",
    ],
  },
  {
    role: "Product Designer",
    company: "Freelance",
    period: "Nov. 2021 — Ene. 2025",
    items: [
      "Diseño y rediseño de interfaces de usuario (UI) centradas en la usabilidad.",
      "Desarrollo de prototipos interactivos de alta fidelidad y wireframes para proyectos digitales de diversos clientes.",
    ],
  },
  {
    role: "Designer Intern",
    company: "Agencia Cataclismo",
    period: "Nov. 2020 — Ene. 2021",
    items: [
      "Responsable del desarrollo gráfico para marcas: creación de Branding, gráficas publicitarias y Motion Graphics.",
    ],
  },
];

const education = [
  {
    title: "Carrera de Diseño UX/UI",
    institution: "CoderHouse",
    period: "Ago. 2023 — Ago. 2024",
  },
  {
    title: "Publicidad Profesional",
    institution: "Duoc UC",
    period: "Mar. 2018 — Mar. 2022",
  },
];

const courses = [
  { name: "UX Research", school: "Coderhouse", period: "Jun. 2024 — Ago. 2024" },
  { name: "UX Writing", school: "Coderhouse", period: "Mar. 2024 — May. 2024" },
  { name: "Diseño UX/UI Avanzado", school: "Coderhouse", period: "Dic. 2023 — Feb. 2024" },
  { name: "Diseño UX/UI", school: "Coderhouse", period: "Ago. 2023 — Dic. 2023" },
];

const skills = [
  "UI Design", "Wireframes", "Prototipado", "Design Systems",
  "Accesibilidad", "Auto layout", "User Research",
];

const tools = [
  "Figma (avanzado)", "Illustrator", "Photoshop",
  "Premiere Pro", "Blender", "Rotato",
];

export default function CVPage() {
  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Bryan Estrada</h1>
            <p className="text-[#ef4444] mt-1">Product Designer — Chile</p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-[#717171]">
              <a href="mailto:w4z.bryan@gmail.com" className="flex items-center gap-1.5 hover:text-[#ededed] transition-colors">
                <Mail size={14} /> w4z.bryan@gmail.com
              </a>
              <a href="tel:+56971628874" className="flex items-center gap-1.5 hover:text-[#ededed] transition-colors">
                <Phone size={14} /> +56 9 7162 8874
              </a>
              <a href="https://behance.net/bryanestrada1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#ededed] transition-colors">
                <ExternalLink size={14} /> behance.net/bryanestrada1
              </a>
            </div>
          </div>

          <a
            href="/cv/CV_Bryan_Estrada.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ef4444] text-white text-sm font-medium rounded-full hover:bg-[#dc2626] transition-colors shrink-0"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>

        <div className="prose-section mb-10 pb-10 border-b border-[#1f1f1f]">
          <p className="text-[#717171] leading-relaxed max-w-2xl">
            Como Product Designer en la startup Sherut, lidero la creación del Design System,
            el diseño de MVPs y la validación continua con usuarios. Soy una persona autodidacta,
            curiosa y orientada a resolver problemas, transformando desafíos complejos en
            experiencias claras, funcionales y significativas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-6">
                Experiencia
              </h2>
              <div className="space-y-8">
                {experience.map((exp) => (
                  <div key={exp.company}>
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3 className="font-semibold">
                        {exp.role}{" "}
                        <span className="text-[#717171] font-normal">/ {exp.company}</span>
                      </h3>
                      <span className="text-xs text-[#404040] shrink-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.items.map((item, i) => (
                        <li key={i} className="text-sm text-[#717171] leading-relaxed flex gap-2">
                          <span className="text-[#ef4444] mt-1.5 shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-6">
                Educación
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.title} className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-sm">{edu.title}</h3>
                      <p className="text-xs text-[#717171]">{edu.institution}</p>
                    </div>
                    <span className="text-xs text-[#404040] shrink-0">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-6">
                Cursos
              </h2>
              <div className="space-y-3">
                {courses.map((c) => (
                  <div key={c.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-sm">{c.name}</h3>
                      <p className="text-xs text-[#717171]">{c.school}</p>
                    </div>
                    <span className="text-xs text-[#404040] shrink-0">{c.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-4">
                Habilidades
              </h2>
              <ul className="space-y-2">
                {skills.map((s) => (
                  <li key={s} className="text-sm text-[#717171]">{s}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-4">
                Herramientas
              </h2>
              <ul className="space-y-2">
                {tools.map((t) => (
                  <li key={t} className="text-sm text-[#717171]">{t}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#ef4444] mb-4">
                Idiomas
              </h2>
              <ul className="space-y-2">
                <li className="text-sm text-[#717171]">Español — Nativo</li>
                <li className="text-sm text-[#717171]">Inglés — A2</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
