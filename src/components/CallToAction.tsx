import Button from "./ui/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 relative py-24 rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter font-medium text-center">
              AI-driven SEO for everyone
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mt-5 tracking-tight max-w-xs mx-auto">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button title="Join waitlist" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
