import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Delivery is more than launch day. We package the final experience with
          clean QA notes, deployment readiness, and the context your team needs
          to operate it confidently.
        </p>
        <p>
          Before release, we review the critical paths across layout, content,
          performance, and responsiveness so the site or product holds up in
          real use.
        </p>
        <p>
          After launch, we stay available for refinement work, iteration
          planning, and the improvements that emerge once the experience is live.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List>
        <ListItem title="Quality assurance">
          Structured reviews across content, interactions, responsiveness, and
          launch readiness.
        </ListItem>
        <ListItem title="Implementation support">
          Clear handoff notes, component guidance, and practical recommendations
          for the next release cycle.
        </ListItem>
        <ListItem title="Post-launch refinement">
          A lightweight feedback loop for improvements informed by real user and
          team input.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
