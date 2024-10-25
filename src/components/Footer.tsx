import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 overflow-hidden">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex gap-2 lg:items-center lg:flex-1">
            <Logo className="h-6 w-6" />
            <div className="font-medium">Cogni</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg:items-center lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Features
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Development
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Company
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Blog
            </a>
            <a href="#" className="text-white/70 hover:text-white text-xs transition md:text-sm">
              Changelog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition cursor-pointer" />
            <InstaSocial className="text-white/40 hover:text-white transition cursor-pointer" />
            <YTSocial className="text-white/40 hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
