import { notFound } from 'next/navigation';
import { projects } from '../../work-data';
import CaseStudyClient from './CaseStudyClient';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = projects.some((project) => project.slug === slug);
  if (!exists) notFound();

  return <CaseStudyClient slug={slug} />;
}
