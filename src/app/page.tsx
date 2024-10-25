import {
  CallToAction,
  Features,
  Footer,
  Header,
  Hero,
  LogoTicker,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
