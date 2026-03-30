export function createMailtoHref({ to, subject, bodyLines }) {
  const searchParams = new URLSearchParams({
    subject,
    body: bodyLines.filter(Boolean).join("\n"),
  });

  return `mailto:${to}?${searchParams.toString()}`;
}
