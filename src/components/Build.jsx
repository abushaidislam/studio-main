import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the direction is locked, we turn the roadmap into a paced
          delivery plan with clear milestones, visible priorities, and shared
          ownership across the work.
        </p>
        <p>
          Design and development stay closely connected so the final interface
          is not only polished but also practical to build, test, and maintain.
        </p>
        <p>
          Throughout the build, we keep updates concise, document key decisions,
          and surface tradeoffs early so the team can move forward confidently.
        </p>
      </div>
      <Blockquote
        author={{ name: "Launch Partner", role: "Product lead" }}
        className="mt-12"
      >
        Flinkeo gave us a workflow we could trust. Every review felt prepared,
        every handoff was clear, and the final delivery matched the plan.
      </Blockquote>
    </Section>
  );
};

export default Build;
