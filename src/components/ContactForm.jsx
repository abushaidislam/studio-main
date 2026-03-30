"use client";

import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import { createMailtoHref } from "@/lib/mailto";
import { siteConfig } from "@/config/site";

const budgetOptions = [
  ["$5K - $15K", "5-15"],
  ["$15K - $40K", "15-40"],
  ["$40K - $75K", "40-75"],
  ["$75K+", "75-plus"],
];

const ContactForm = () => {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const mailtoHref = createMailtoHref({
      to: siteConfig.email,
      subject: `New project inquiry from ${values.name || "Website visitor"}`,
      bodyLines: [
        "Hello Flinkeo team,",
        "",
        "I would like to discuss a new project.",
        "",
        `Name: ${values.name || ""}`,
        `Email: ${values.email || ""}`,
        `Company: ${values.company || ""}`,
        `Phone: ${values.phone || ""}`,
        `Budget: ${values.budget || ""}`,
        "",
        "Project details:",
        `${values.message || ""}`,
      ],
    });

    window.location.href = mailtoHref;
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Start a project conversation
        </h2>
        <p className="mt-4 text-sm text-neutral-600">
          Share the essentials and we&apos;ll open a drafted email so you can
          send it directly to the Flinkeo team.
        </p>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Project summary" name="message" required />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Estimated budget
              </legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {budgetOptions.map(([label, value]) => (
                <RadioInput
                  key={value}
                  label={label}
                  name="budget"
                  value={label}
                  defaultChecked={value === "15-40"}
                />
              ))}
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Draft your project email
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
