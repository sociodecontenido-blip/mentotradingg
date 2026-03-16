const WHATSAPP_URL =
  "https://wa.me/5216632976748?text=Hola%20Gustavo,%20ya%20confirm%C3%A9%20mi%20llamada%20y%20mir%C3%A9%20ambos%20videos%20obligatorios.%20Quiero%20validar%20mi%20sesi%C3%B3n.%20Mi%20nombre%20es";

const ConfirmationStep = () => {
  return (
    <div className="text-center space-y-6 md:space-y-8">
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-accent">
        Paso Final
      </p>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.15]">
        Valida tu sesión aquí
      </h2>
      <p className="text-secondary-foreground max-w-md mx-auto leading-relaxed text-base md:text-lg">
        Para mantener tu llamada agendada, confirma tu asistencia por WhatsApp.
      </p>
      <div className="pt-4 md:pt-6">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gloss inline-block text-base md:text-lg tracking-wide px-12 py-5 md:px-14 md:py-6"
        >
          Confirmar por WhatsApp
        </a>
      </div>
      <p className="text-sm text-subtle italic max-w-sm mx-auto leading-relaxed">
        Si no confirmas tu asistencia, tu sesión puede ser liberada para otro aplicante.
      </p>
    </div>
  );
};

export default ConfirmationStep;
