import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/data";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${portfolioData.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
