import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Flinkeo helps ambitious teams ship digital experiences with clarity.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We combine strategy, design, and development to create websites,
            products, and content systems that look sharp, move quickly, and
            convert with confidence.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Flinkeo partner", logo: "/agency.PNG" }}
      >
        Flinkeo brought structure to a messy launch, aligned design with
        delivery, and gave our team a digital presence we could confidently put
        in front of customers.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
  );
}
