import noccaLogo from "@/assets/nocca-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          <img src={noccaLogo} alt="NOCCA" className="h-12 opacity-80" />
          
          <div className="flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <a href="https://www.nocca-ehms.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="https://www.nocca-ehms.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms</a>
            <a href="https://www.nocca-ehms.com/shipping-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Shipping</a>
          </div>
          
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} NOCCA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
