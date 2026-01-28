import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-border/30">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏏</span>
            <span className="font-display text-lg font-bold gradient-text">
              Cricket Knowledge Hub
            </span>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="footer-link text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          
          {/* Copyright */}
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Cricket Knowledge Community — Educational Use Only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
