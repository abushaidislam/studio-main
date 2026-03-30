"use client";

import { useState } from "react";
import { createMailtoHref } from "@/lib/mailto";
import { siteConfig } from "@/config/site";

const NewsletterSignupForm = ({
  variant = "inline",
  buttonLabel = "Subscribe",
}) => {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const mailtoHref = createMailtoHref({
      to: siteConfig.email,
      subject: "Newsletter signup request",
      bodyLines: [
        "Hello Flinkeo team,",
        "",
        "I would like to receive Flinkeo updates and insights.",
        "",
        `Email: ${email}`,
      ],
    });

    window.location.href = mailtoHref;
  }

  if (variant === "footer") {
    return (
      <form className="max-w-sm" onSubmit={handleSubmit}>
        <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
          Join the Flinkeo newsletter
        </h2>
        <p className="mt-4 text-sm text-neutral-700">
          Get practical product, design, and growth notes from the Flinkeo
          team.
        </p>
        <div className="relative mt-6">
          <input
            type="email"
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label={buttonLabel}
              className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
            >
              <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form
      className="flex flex-col gap-3 max-w-md mx-auto sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="flex-1 px-5 py-3 rounded-full border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-300 transition-all"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors duration-200"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default NewsletterSignupForm;
