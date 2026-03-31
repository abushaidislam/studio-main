"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projects, categories } from "@/lib/projects-data";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import SectionIntro from "@/components/SectionIntro";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import StylizedImage from "@/components/StylizedImage";
import clsx from "clsx";
import imageMeeting from "@/images/meeting.jpg";
import imageWhiteboard from "@/images/whiteboard.jpg";
import imageLaptop from "@/images/laptop.jpg";

const WorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 5);
  const otherProjects = projects.filter((p) => !p.featured);
  const allFilteredProjects = selectedCategory === "All"
    ? otherProjects
    : otherProjects.filter((p) => p.category === selectedCategory);
  const displayedOtherProjects = allFilteredProjects.slice(0, visibleCount);

  const hasMoreProjects = visibleCount < allFilteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const completedProjects = projects.filter((p) => p.status === "completed").length;
  const inProgressProjects = projects.filter((p) => p.status === "in-progress").length;

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

  const getCategoryCount = (category) => {
    if (category === "All") return otherProjects.length;
    return otherProjects.filter((p) => p.category === category).length;
  };

  return (
    <>
      <PageIntro eyebrow="Our work" title="Proven solutions for real-world problems">
        <p>
          We partner with ambitious companies to build digital products that drive growth,
          improve operations, and delight users. Every project is a collaboration focused on outcomes.
        </p>
      </PageIntro>

      {/* Hero Stats */}
      <Container className="mt-16">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "25+", label: "Projects Delivered", desc: "Across 8 industries" },
              { value: `${completedProjects}`, label: "Completed", desc: "Successfully shipped" },
              { value: `${inProgressProjects}`, label: "Active", desc: "Currently building" },
              { value: "100%", label: "Satisfaction", desc: "Client retention rate" },
            ].map((stat) => (
              <div key={stat.label} className="bg-neutral-50 rounded-2xl p-6 lg:p-8">
                <p className="text-4xl lg:text-5xl font-display font-semibold text-neutral-950">{stat.value}</p>
                <p className="mt-2 font-medium text-neutral-950">{stat.label}</p>
                <p className="text-sm text-neutral-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* Featured Case Studies */}
      <Container className="mt-24 sm:mt-32">
        <SectionIntro eyebrow="Featured work" title="Deep-dive case studies">
          <p>
            Explore our most impactful projects with detailed breakdowns of the challenges,
            solutions, and results we delivered for industry-leading clients.
          </p>
        </SectionIntro>

        <div className="mt-16 space-y-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id}>
              <div className={clsx(
                "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
                index % 2 === 1 && "lg:grid-flow-dense"
              )}>
                {/* Image */}
                <div className={clsx("relative", index % 2 === 1 && "lg:col-start-2")}>
                  <Link href={`/work/${project.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-3xl bg-neutral-100 aspect-[16/10]">
                      <StylizedImage
                        src={project.image}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={clsx(index % 2 === 1 && "lg:col-start-1 lg:row-start-1")}>
                  <div className="flex items-center gap-3 mb-4">
                    <StatusBadge status={project.status} />
                    <span className="text-sm text-neutral-500">{project.year}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-neutral-950 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-4">{project.client}</p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Button href={`/work/${project.slug}`}>
                      View Case Study
                    </Button>
                    <span className="text-sm text-neutral-500">{project.duration}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* More Projects Grid */}
      <Container className="mt-24 sm:mt-32">
        <SectionIntro eyebrow="More work" title="Additional projects">
          <p>
            A selection of other projects we have delivered across various industries and platforms.
          </p>
        </SectionIntro>

        {/* Filter Tabs */}
        <FadeIn className="mt-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const count = getCategoryCount(category);
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisibleCount(6);
                  }}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2",
                    isActive
                      ? "bg-neutral-950 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  )}
                >
                  {category}
                  <span className={clsx(
                    "px-2 py-0.5 rounded-full text-xs",
                    isActive ? "bg-neutral-700 text-neutral-300" : "bg-neutral-200 text-neutral-600"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <FadeInStagger className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedOtherProjects.map((project) => (
              <FadeIn key={project.id}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3]">
                    <StylizedImage
                      src={project.image}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <StatusBadge status={project.status} />
                        <span className="text-xs text-neutral-300">{project.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white line-clamp-1">{project.title}</h3>
                      <p className="text-sm text-neutral-300">{project.client}</p>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-neutral-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium flex items-center gap-2">
                        View Project
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-neutral-600 line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Load More */}
        {hasMoreProjects && (
          <FadeIn>
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-950 text-white rounded-full font-medium hover:bg-neutral-800 transition"
              >
                <span>Load More Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p className="mt-3 text-sm text-neutral-500">
                Showing {displayedOtherProjects.length} of {allFilteredProjects.length} projects
              </p>
            </div>
          </FadeIn>
        )}
      </Container>

      {/* Services Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="rounded-3xl bg-neutral-50 px-6 py-16 sm:p-16 lg:p-20">
          <SectionIntro eyebrow="Services" title="End-to-end capabilities for every stage">
            <p className="mt-6">
              From initial strategy through launch and beyond, we provide the expertise
              you need to build products that succeed in the market.
            </p>
          </SectionIntro>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: "Discovery & Strategy", 
                desc: "Deep-dive research, competitive analysis, and roadmap planning.", 
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: "UX/UI Design", 
                desc: "User-centered design that balances aesthetics with functionality.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              { 
                title: "Web Development", 
                desc: "Modern, scalable web applications built with cutting-edge technologies.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              { 
                title: "Mobile Development", 
                desc: "Native and cross-platform mobile apps for every device.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                title: "Brand & Identity", 
                desc: "Comprehensive brand systems that communicate your unique value.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                )
              },
              { 
                title: "Growth & Optimization", 
                desc: "Data-driven improvements to increase conversion and retention.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
            ].map((service) => (
              <FadeIn key={service.title}>
                <div className="bg-white rounded-2xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-700 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-950 mb-2">{service.title}</h3>
                  <p className="text-neutral-600 text-sm">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>

      {/* Process Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro eyebrow="Our process" title="How we work from start to finish">
          <p>
            Our proven five-phase approach ensures every project stays on track,
            on budget, and aligned with your business goals.
          </p>
        </SectionIntro>

        <div className="mt-16">
          <div className="grid gap-6 lg:grid-cols-5">
            {[
              { num: "01", title: "Discover", desc: "Research and stakeholder interviews.", time: "1-2 weeks" },
              { num: "02", title: "Define", desc: "Strategy and success metrics.", time: "1-2 weeks" },
              { num: "03", title: "Design", desc: "Prototyping and testing.", time: "3-6 weeks" },
              { num: "04", title: "Develop", desc: "Build with clean code and QA.", time: "4-12 weeks" },
              { num: "05", title: "Deliver", desc: "Launch support and handoff.", time: "1-2 weeks" },
            ].map((step, index) => (
              <FadeIn key={step.num}>
                <div className="relative h-full">
                  <div className="bg-neutral-950 rounded-2xl p-6 h-full text-white">
                    <span className="text-4xl font-display font-bold text-neutral-700">{step.num}</span>
                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-neutral-400">{step.desc}</p>
                    <p className="mt-4 text-xs text-neutral-500">{step.time}</p>
                  </div>
                  {index < 4 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-neutral-300" />}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-6 py-16 sm:px-12 sm:py-24 lg:py-32">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                Ready to build something great?
              </h2>
              <p className="mt-6 text-lg text-neutral-400">
                Let us discuss how we can help you transform your ideas into reality.
                Every successful project starts with a conversation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/contact">Start a project</Button>
                <Button href="/process" invert>View our process</Button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </>
  );
};

export default WorkPage;
