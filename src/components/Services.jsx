import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Strategy, design, and build support shaped around the goals that matter."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Flinkeo helps teams turn scattered ideas into clear narratives,
          polished interfaces, and maintainable digital systems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Website design and development">
              Build marketing sites that communicate clearly, perform quickly,
              and support campaign, sales, and brand goals.
            </ListItem>
            <ListItem title="Product UX and front-end systems">
              Design flows, components, and responsive interfaces that give
              product teams a strong foundation for iteration.
            </ListItem>
            <ListItem title="Content and conversion support">
              Shape messaging, landing pages, and editorial systems so content
              teams can publish with more speed and consistency.
            </ListItem>
            <ListItem title="Launch and optimization">
              Refine the final experience with QA, performance tuning, and
              follow-up improvements based on real usage.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
