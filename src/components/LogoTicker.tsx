import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import celestialLogo from "@/assets/logo-celestial.png";
import Image from "next/image";

const logos = [
  {
    id: 1,
    src: acmeLogo,
    alt: "Acme Logo",
  },
  {
    id: 2,
    src: apexLogo,
    alt: "Apex Logo",
  },
  {
    id: 3,
    src: echoLogo,
    alt: "Echo Logo",
  },
  {
    id: 4,
    src: pulseLogo,
    alt: "Pulse Logo",
  },
  {
    id: 5,
    src: quantumLogo,
    alt: "Quantum Logo",
  },
  {
    id: 6,
    src: celestialLogo,
    alt: "Celestial Logo",
  },
];

const LogoTicker = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center md:gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14">
              {logos.map((logo) => (
                <Image
                  src={logo.src}
                  key={logo.id}
                  alt={logo.alt}
                  className="h-6 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
