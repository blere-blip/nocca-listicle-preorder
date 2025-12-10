const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-3xl font-playfair font-semibold text-gradient-gold">NOCCA</p>
          
          <p className="text-sm text-muted-foreground/70 text-center font-light">
            © {new Date().getFullYear()} NOCCA. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground/70">
            <a 
              href="https://www.nocca-ehms.com/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-light"
            >
              Privacy
            </a>
            <a 
              href="https://www.nocca-ehms.com/terms-and-conditions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-light"
            >
              Terms
            </a>
            <a 
              href="https://www.nocca-ehms.com/shipping-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-light"
            >
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
