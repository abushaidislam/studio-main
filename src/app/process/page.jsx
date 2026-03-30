import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our process"
        title="A practical system for shipping quality work"
      >
        <p>
          Flinkeo keeps projects moving with a clear rhythm: align on the goal,
          build with intention, and launch with the assets and support your team
          needs to keep growing.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
