import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 text-sm text-[#717171] hover:text-[#ededed] transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Volver a proyectos
        </Link>

        <div className="mb-8">
          <p className="text-xs text-[#ef4444] font-mono uppercase tracking-widest mb-2">
            {project.category} · {project.year}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-[#717171] text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 bg-[#111111] border border-[#1f1f1f] rounded-full text-[#717171]"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.behanceUrl || project.liveUrl) && (
          <div className="flex gap-4 mb-12">
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#1f1f1f] text-sm rounded-full hover:border-[#ef4444] hover:text-[#ef4444] transition-colors"
              >
                <ExternalLink size={14} />
                Ver en Behance
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#ef4444] text-white text-sm rounded-full hover:bg-[#dc2626] transition-colors"
              >
                <ExternalLink size={14} />
                Ver proyecto
              </a>
            )}
          </div>
        )}

        <div className="aspect-video bg-[#111111] rounded-2xl border border-[#1f1f1f] flex items-center justify-center mb-6">
          <span className="text-[#1f1f1f] text-8xl font-bold select-none">
            {project.title.charAt(0)}
          </span>
        </div>
      </div>
    </div>
  );
}
