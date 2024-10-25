"use client";

import Button from "@/components/ui/Button";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import useRelativeMousePosition from "@/hooks/useRelativeMousePosition";

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          className="border border-white/15 relative py-24 rounded-xl overflow-hidden group"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity,
          }}
          ref={borderDivRef}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
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
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
