const WHATSAPP_URL =
  "https://wa.me/5216651181605?text=Hola%20Gustavo,%20ya%20confirm%C3%A9%20mi%20llamada%20y%20mir%C3%A9%20ambos%20videos%20obligatorios.%20Quiero%20validar%20mi%20sesi%C3%B3n.%20Mi%20nombre%20es";

const ConfirmationStep = () => {
  return (
    <div className="text-center space-y-6">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
        Paso Final
      </p>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        Confirma tu interes
      </h2>
      <p className="text-secondary-foreground max-w-lg mx-auto leading-relaxed">
        Nuestro equipo validara tu perfil antes de la sesion.
      </p>
      <div className="pt-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gloss inline-block text-base tracking-wide"
        >
          Confirmar por WhatsApp
        </a>
      </div>
      <p className="text-sm text-subtle italic">
        Si no confirmas tu asistencia, tu sesion puede ser liberada para otro aplicante.
      </p>
    </div>
  );
};

export default ConfirmationStep;
