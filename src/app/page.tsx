import {
  CallToAction,
  Features,
  Footer,
  Header,
  Hero,
  LogoTicker,
  Testimonials,
} from "@/sections";

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
