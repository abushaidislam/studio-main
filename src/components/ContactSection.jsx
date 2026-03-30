import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";
import { GlobePulse } from "./GlobePulse";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <GlobePulse
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] opacity-60 order-2"
            speed={0.0015}
          />
          <div className="max-w-xl lg:max-w-2xl order-1">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell Flinkeo what you&apos;re building
            </h2>
            <p className="mt-4 max-w-2xl text-base text-neutral-300">
              Bring us the launch goal, the messy context, or the next challenge.
              We&apos;ll help shape the work into a clearer plan.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Start the conversation
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Where we work
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
