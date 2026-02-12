const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm font-semibold tracking-[0.15em] uppercase text-muted-foreground">
          Trading Academy
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-subtle">
          <span>soporte@tradingacademy.com</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Aviso Legal</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Politica de Privacidad</span>
        </div>
        <p className="text-xs text-subtle">
          &copy; {new Date().getFullYear()} Trading Academy. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
