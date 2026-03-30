import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with clients to understand the business context,
          audience expectations, and delivery constraints before making surface
          level design decisions.
        </p>
        <p>
          That discovery phase helps us define the right scope, identify the
          most important user journeys, and spot the technical or content risks
          that could slow a launch later.
        </p>
        <p>
          The result is a practical plan that gives the team direction, shared
          language, and a clear path into production.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Positioning workshops</TagListItem>
        <TagListItem>UX audits</TagListItem>
        <TagListItem>Content planning</TagListItem>
        <TagListItem>Technical scoping</TagListItem>
        <TagListItem>Prototype reviews</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
