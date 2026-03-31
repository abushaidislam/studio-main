import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects-data";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import StylizedImage from "@/components/StylizedImage";
import { StatList, StatListItem } from "@/components/StatList";
import Button from "@/components/Button";
import clsx from "clsx";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} | Work`,
    description: project.description,
  };
}

const StatusBadge = ({ status }) => {
  const styles = {
    completed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    "in-progress": "bg-blue-100 text-blue-700 border-blue-200",
    planning: "bg-amber-100 text-amber-700 border-amber-200",
  };
  const labels = { completed: "Completed", "in-progress": "In Progress", planning: "Planning" };
  return (
    <span className={clsx("px-3 py-1 rounded-full text-xs font-semibold border", styles[status])}>
      {labels[status]}
    </span>
  );
};

const MetricCard = ({ label, value, change }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
    <p className="text-sm text-neutral-500 mb-1">{label}</p>
    <p className="text-3xl font-display font-semibold text-neutral-950">{value}</p>
    {change && (
      <p className="text-sm text-emerald-600 font-medium mt-1">{change}</p>
    )}
  </div>
);

const ProcessPhase = ({ phase, duration, details, index }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-neutral-200 last:border-l-0 last:pb-0">
    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-950" />
    <div className="bg-neutral-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm font-semibold text-neutral-500">Phase {index + 1}</span>
        <span className="text-xs px-2 py-1 bg-neutral-200 text-neutral-700 rounded-full">{duration}</span>
      </div>
      <h4 className="text-lg font-semibold text-neutral-950 mb-2">{phase}</h4>
      <p className="text-sm text-neutral-600">{details}</p>
    </div>
  </div>
);

const ProjectDetailPage = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <PageIntro eyebrow="Case Study" title={project.title}>
        <p>{project.shortDescription || project.description}</p>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[16/9]">
            <StylizedImage
              src={project.image}
              sizes="100vw"
              className="object-cover w-full h-full"
            />
          </div>
        </FadeIn>
      </Container>

      {/* Key Metrics */}
      {project.keyMetrics && (
        <Container className="mt-16">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {(project.keyMetrics ?? []).map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
          </FadeIn>
        </Container>
      )}

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <Container className="mt-24">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {project.challenge && (
                <div className="bg-red-50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-neutral-950">The Challenge</h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className="bg-emerald-50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-neutral-950">The Solution</h2>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          </FadeIn>
        </Container>
      )}

      <Container className="mt-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">Project Overview</h2>
                <p className="text-neutral-600 leading-relaxed text-lg">{project.description}</p>
              </div>

              {/* Process */}
              {project.process && (
                <div>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-8">Our Process</h2>
                  <div className="space-y-0">
                    {(project.process ?? []).map((phase, index) => (
                      <ProcessPhase key={phase.phase} {...phase} index={index} />
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              <div>
                <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">Key Results</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {(project.results ?? []).map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-neutral-50 rounded-xl"
                    >
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-neutral-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              {project.technologies && (
                <div>
                  <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-4">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {(project.technologies ?? []).map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-neutral-950 rounded-2xl p-8 sm:p-12 text-white">
                  <svg className="w-10 h-10 text-neutral-600 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-700 flex items-center justify-center text-lg font-semibold">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{project.testimonial.author}</p>
                      <p className="text-sm text-neutral-400">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-neutral-950 mb-4">
                  Project Details
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-neutral-500">Client</dt>
                    <dd className="font-medium text-neutral-950">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500">Industry</dt>
                    <dd className="font-medium text-neutral-950">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500">Status</dt>
                    <dd>
                      <StatusBadge status={project.status} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500">Duration</dt>
                    <dd className="font-medium text-neutral-950">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500">Year</dt>
                    <dd className="font-medium text-neutral-950">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-neutral-500">Project ID</dt>
                    <dd className="font-medium text-neutral-950">{project.id}</dd>
                  </div>
                </dl>
              </div>

              {/* Team */}
              {project.team && (
                <div className="bg-neutral-50 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-4">
                    Team
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(project.team ?? []).map((member) => (
                      <span
                        key={member}
                        className="px-3 py-1 bg-white text-neutral-700 rounded-full text-sm border border-neutral-200"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards */}
              {project.awards && (
                <div className="bg-amber-50 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-4">
                    Awards
                  </h3>
                  <ul className="space-y-2">
                    {(project.awards ?? []).map((award) => (
                      <li key={award} className="flex items-center gap-2 text-sm text-neutral-700">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Navigation */}
      <Container className="mt-24">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-12 border-t border-neutral-200">
            <div>
              {prevProject && (
                <Link
                  href={`/work/${prevProject.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-700 rounded-full font-medium hover:bg-neutral-200 transition"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Previous Project</span>
                </Link>
              )}
            </div>
            <Button href="/work" invert>
              View All Projects
            </Button>
            <div>
              {nextProject && (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition"
                >
                  <span>Next Project</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default ProjectDetailPage;
