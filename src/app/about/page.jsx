import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
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
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
