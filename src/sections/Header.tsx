import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { navLinks } from "@/constants";
import Button from "@/components/ui/Button";

const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur md:backdrop-blur-none -z-10" />
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto md:backdrop-blur">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center border-white/15 items-center">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 items-center text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-white/70 hover:text-white transition"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button title="Join waitlist" />
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
