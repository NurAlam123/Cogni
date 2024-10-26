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
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
