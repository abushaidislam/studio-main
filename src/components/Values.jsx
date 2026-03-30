import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Reliable execution with room for better ideas"
      >
        <p>
          Flinkeo balances thoughtful planning with fast delivery so teams can
          make progress without giving up quality, clarity, or adaptability.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Intentional">
            We make decisions against the project goal, not just what looks
            impressive in isolation.
          </GridListItem>
          <GridListItem title="Responsive">
            Feedback is easier to use when it arrives quickly and with enough
            context to act on it.
          </GridListItem>
          <GridListItem title="Adaptable">
            Strong systems leave room for change without forcing a full rebuild
            every time priorities shift.
          </GridListItem>
          <GridListItem title="Transparent">
            We share tradeoffs early, keep status visible, and document the
            decisions that shape the work.
          </GridListItem>
          <GridListItem title="Collaborative">
            The best outcomes come from treating product, content, design, and
            engineering as part of the same conversation.
          </GridListItem>
          <GridListItem title="Crafted">
            We care about polish, but only when it supports clarity, usability,
            and measurable results.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
