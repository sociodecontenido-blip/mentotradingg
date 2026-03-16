const Footer = () => {
  return (
    <footer className="py-10 md:py-14">
      <div className="max-w-lg mx-auto px-4 sm:px-6 mb-8 md:mb-10">
        <div className="divider-subtle" />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5 md:space-y-6">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          Trading Academy
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-subtle">
          <span>soporte@tradingacademy.com</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Aviso Legal</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>Política de Privacidad</span>
        </div>
        <p className="text-xs text-subtle">
          &copy; {new Date().getFullYear()} Trading Academy. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
