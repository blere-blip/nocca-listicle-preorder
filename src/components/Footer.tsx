import noccaLogo from "@/assets/nocca-logo.png";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={noccaLogo} alt="NOCCA" className="h-8" />
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} NOCCA. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://www.nocca-ehms.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="https://www.nocca-ehms.com/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms</a>
            <a href="https://www.nocca-ehms.com/shipping-policy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
