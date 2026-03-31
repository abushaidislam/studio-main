import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import Values from "@/components/Values";
import SectionIntro from "@/components/SectionIntro";
import FadeIn from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import StylizedImage from "@/components/StylizedImage";
import imageMeeting from "@/images/meeting.jpg";
import imageWhiteboard from "@/images/whiteboard.jpg";
import imageLaptop from "@/images/laptop.jpg";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="About us"
        title="A focused team built for modern delivery"
      >
        <p>
          Flinkeo partners with growing companies that need sharper positioning,
          stronger digital execution, and a team that can move from idea to
          launch without losing momentum.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We bring strategy, design, engineering, and content together early
            so the final product feels consistent from the first headline to the
            final interaction.
          </p>
          <p>
            Our process is collaborative, direct, and lightweight. We stay close
            to decision makers, keep feedback loops short, and build systems your
            team can maintain after launch.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="25+" label="Projects delivered" />
          <StatListItem value="12" label="Core collaborators" />
          <StatListItem value="48 hrs" label="Typical feedback turnaround" />
        </StatList>
      </Container>

      {/* Our Story Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <FadeIn>
              <StylizedImage
                src={imageMeeting}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="justify-center"
              />
            </FadeIn>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <SectionIntro
              eyebrow="Our story"
              title="From small beginnings to impactful partnerships"
            >
              <p className="mt-6">
                Flinkeo started with a simple belief: that great digital work comes from
                teams who listen closely, think critically, and build with intention.
                Founded in 2020, we have grown from a solo practice into a collaborative
                collective of strategists, designers, and developers.
              </p>
              <p className="mt-4">
                Every project we take on is an opportunity to help a team clarify their
                message, improve their customer experience, and launch something they
                are proud of. We have worked with startups finding their footing and
                established companies reinventing their digital presence.
              </p>
              <p className="mt-4">
                Our approach has always been relationship-first. We prefer long-term
                partnerships over one-off transactions because the best work happens
                when we truly understand the people and problems we are solving for.
              </p>
            </SectionIntro>
          </div>
        </div>
      </Container>

      <Values />
      <Cultures />

      {/* Industries We Serve - Grid Line Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow="Industries"
          title="Solving problems across diverse sectors"
        >
          <p>
            We bring cross-industry insights to every engagement. Our experience
            spans from emerging startups to established enterprises across multiple
            verticals.
          </p>
        </SectionIntro>
        <div className="mt-16">
          <GridList>
            <GridListItem title="Technology & SaaS">
              Building product experiences for software companies, from onboarding
              flows to enterprise dashboards and API documentation.
            </GridListItem>
            <GridListItem title="E-commerce & Retail">
              Creating conversion-focused storefronts, inventory systems, and
              seamless checkout experiences that drive sales.
            </GridListItem>
            <GridListItem title="Healthcare & Wellness">
              Designing patient-centered interfaces, telehealth platforms, and
              health data visualization with compliance in mind.
            </GridListItem>
            <GridListItem title="Finance & Fintech">
              Developing secure, user-friendly banking apps, trading platforms,
              and financial tools that build trust.
            </GridListItem>
            <GridListItem title="Education & Learning">
              Crafting engaging learning management systems, course platforms,
              and interactive educational content.
            </GridListItem>
            <GridListItem title="Media & Publishing">
              Building content-rich platforms, editorial workflows, and
              subscription experiences for modern publishers.
            </GridListItem>
          </GridList>
        </div>
      </Container>

      {/* Our Process - Grid Line Section with Image */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="lg:w-1/2">
            <SectionIntro
              eyebrow="Our process"
              title="How we turn ideas into outcomes"
            >
              <p className="mt-6">
                Every project follows a proven framework that balances structure
                with flexibility. We adapt the details to your needs while keeping
                the destination clear.
              </p>
            </SectionIntro>
            <div className="mt-10">
              <GridList className="lg:grid-cols-2">
                <GridListItem title="Discover">
                  Deep research into your users, market, and constraints. We
                  interview stakeholders, analyze competitors, and map the
                  problem space before committing to solutions.
                </GridListItem>
                <GridListItem title="Define">
                  Synthesize findings into clear strategies and requirements.
                  We establish success metrics, prioritize features, and create
                  a shared vision everyone can reference.
                </GridListItem>
                <GridListItem title="Design">
                  Iterate on interfaces and experiences through prototyping
                  and feedback. We test assumptions early and refine until
                  the solution feels inevitable.
                </GridListItem>
                <GridListItem title="Deliver">
                  Build with clean code, thorough QA, and careful launch planning.
                  We support the transition and ensure your team is ready
                  to take the reins.
                </GridListItem>
              </GridList>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <FadeIn>
              <StylizedImage
                src={imageWhiteboard}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="justify-center"
              />
            </FadeIn>
          </div>
        </div>
      </Container>

      {/* Services Grid Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="rounded-4xl bg-neutral-50 px-6 py-20 sm:p-20">
          <SectionIntro
            eyebrow="Services"
            title="Everything you need to launch and grow"
          >
            <p className="mt-6">
              We offer end-to-end capabilities that cover the full product lifecycle.
              Each service integrates seamlessly with the others.
            </p>
          </SectionIntro>
          <div className="mt-16">
            <GridList>
              <GridListItem title="Product Strategy">
                Market research, competitive analysis, roadmap planning, and
                feature prioritization to set your product up for success.
              </GridListItem>
              <GridListItem title="Brand Identity">
                Visual systems, messaging frameworks, and brand guidelines that
                communicate who you are and why you matter.
              </GridListItem>
              <GridListItem title="UX/UI Design">
                User flows, wireframes, high-fidelity mockups, and interactive
                prototypes that bring your vision to life.
              </GridListItem>
              <GridListItem title="Web Development">
                Frontend and backend engineering using modern frameworks,
                optimized for performance and scalability.
              </GridListItem>
              <GridListItem title="Mobile Apps">
                Native and cross-platform applications for iOS and Android
                that feel at home on every device.
              </GridListItem>
              <GridListItem title="Content Strategy">
                Information architecture, copywriting, and content systems
                that tell your story and drive engagement.
              </GridListItem>
            </GridList>
          </div>
        </div>
      </Container>

      {/* Milestones - Grid Line Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow="Milestones"
          title="Key moments in our journey"
        >
          <p>
            Our path has been marked by steady growth, meaningful client relationships,
            and a relentless focus on delivering value.
          </p>
        </SectionIntro>
        <div className="mt-16">
          <GridList>
            <GridListItem title="2020">
              Flinkeo founded as a solo consultancy, landing first three clients
              through referrals and reputation alone.
            </GridListItem>
            <GridListItem title="2021">
              Expanded to a team of five, moved into our first shared workspace,
              and launched our first major SaaS product redesign.
            </GridListItem>
            <GridListItem title="2022">
              Opened second location, crossed 50 projects completed, and established
              partnerships with three technology vendors.
            </GridListItem>
            <GridListItem title="2023">
              Introduced our own design system framework, grew to 12 core team members,
              and won first industry recognition award.
            </GridListItem>
            <GridListItem title="2024">
              Launched internal R&D lab, expanded service offerings to include
              AI-powered solutions, and doubled recurring client base.
            </GridListItem>
            <GridListItem title="2025">
              Today we continue to grow, partnering with ambitious teams who value
              quality, collaboration, and measurable results.
            </GridListItem>
          </GridList>
        </div>
      </Container>

      {/* Client Outcomes - Dark Grid Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="rounded-4xl bg-neutral-950 px-6 py-20 sm:p-20">
          <SectionIntro
            eyebrow="Results"
            title="Outcomes that speak for themselves"
            invert
          >
            <p className="mt-6">
              Our clients do not just get deliverables, they get results. Here is
              what we have helped teams achieve.
            </p>
          </SectionIntro>
          <div className="mt-16">
            <GridList>
              <GridListItem title="40% faster launches" invert>
                By streamlining decision-making and reducing rework, we helped a
                fintech startup cut their time-to-market nearly in half.
              </GridListItem>
              <GridListItem title="3x conversion increase" invert>
                A redesigned e-commerce flow and clearer messaging helped an
                online retailer triple their checkout completion rate.
              </GridListItem>
              <GridListItem title="60% cost reduction" invert>
                Replacing legacy systems with maintainable architecture saved
                a healthcare platform significant ongoing development costs.
              </GridListItem>
              <GridListItem title="Zero downtime launches" invert>
                Careful planning and phased rollouts have delivered multiple
                major releases without service interruption.
              </GridListItem>
              <GridListItem title="50+ product iterations" invert>
                Our ongoing partnership with a SaaS company has delivered continuous
                improvements based on user feedback and analytics.
              </GridListItem>
              <GridListItem title="100% client retention" invert>
                Every client from the past two years has returned for additional
                work or referred us to their network.
              </GridListItem>
            </GridList>
          </div>
        </div>
      </Container>

      {/* Team Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <SectionIntro
          eyebrow="Our team"
          title="Meet the people behind the work"
        >
          <p>
            Our team brings together diverse perspectives and deep expertise across
            strategy, design, engineering, and content. We are united by a shared
            commitment to quality and a genuine enthusiasm for solving complex challenges.
          </p>
        </SectionIntro>
        <div className="mt-16">
          <GridList>
            <GridListItem title="Strategy & Direction">
              Business strategists and product thinkers who help you define what
              to build and why it matters to your users and your business goals.
            </GridListItem>
            <GridListItem title="Design & Experience">
              UI/UX designers who craft interfaces that are intuitive, accessible,
              and visually cohesive across every touchpoint.
            </GridListItem>
            <GridListItem title="Engineering & Systems">
              Full-stack developers who build reliable, performant systems using
              modern technologies and best practices.
            </GridListItem>
            <GridListItem title="Content & Communication">
              Writers and content strategists who shape messaging that resonates
              with your audience and supports your brand voice.
            </GridListItem>
            <GridListItem title="Project & Delivery">
              Delivery leads who keep projects on track, manage stakeholder communication,
              and ensure smooth handoffs.
            </GridListItem>
            <GridListItem title="Quality & Optimization">
              QA specialists and performance analysts who refine the details and
              ensure everything works flawlessly at launch.
            </GridListItem>
          </GridList>
        </div>
      </Container>

      {/* Why Work With Us Section */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="rounded-4xl bg-neutral-950 px-6 py-20 sm:p-20">
          <SectionIntro
            eyebrow="Why Flinkeo"
            title="What makes us different"
            invert
          >
            <p className="mt-6">
              We combine the strategic depth of a consultancy with the practical
              speed of a product team. That means you get thoughtful advice and
              working solutions, not just recommendations and handoffs.
            </p>
          </SectionIntro>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-white">
              <h3 className="font-display text-lg font-semibold">End-to-end partnership</h3>
              <p className="mt-2 text-sm text-neutral-300">
                We stay involved from strategy through launch, ensuring continuity
                and accountability throughout the entire process.
              </p>
            </div>
            <div className="text-white">
              <h3 className="font-display text-lg font-semibold">Real collaboration</h3>
              <p className="mt-2 text-sm text-neutral-300">
                We embed with your team, attend your standups, and treat your goals
                as our own. No black-box delivery or surprises at the deadline.
              </p>
            </div>
            <div className="text-white">
              <h3 className="font-display text-lg font-semibold">Maintainable systems</h3>
              <p className="mt-2 text-sm text-neutral-300">
                We build with your future team in mind, using clean architecture,
                clear documentation, and no unnecessary dependencies.
              </p>
            </div>
            <div className="text-white">
              <h3 className="font-display text-lg font-semibold">Adaptive process</h3>
              <p className="mt-2 text-sm text-neutral-300">
                We adjust our approach to fit your timeline and constraints, not
                the other way around. Agile when you need speed, deliberate when
                you need depth.
              </p>
            </div>
            <div className="text-white">
              <h3 className="font-display text-lg font-semibold">Results over process</h3>
              <p className="mt-2 text-sm text-neutral-300">
                We focus on outcomes that matter to your business. If a shortcut
                delivers value faster without sacrificing quality, we take it.
              </p>
            </div>
            <div className="text-white">
              <h3 className="font-display text-lg font-semibold">Long-term thinking</h3>
              <p className="mt-2 text-sm text-neutral-300">
                We build relationships and systems designed to last. Many of our
                clients return for multiple projects over years.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <ContactSection />
    </>
  );
};

export default AboutPage;
