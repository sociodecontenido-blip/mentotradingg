import ProgressBar from "@/components/ProgressBar";
import StepCard from "@/components/StepCard";
import ConfirmationStep from "@/components/ConfirmationStep";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <ProgressBar percentage={80} />
          <div className="text-center space-y-4 pt-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Tu llamada esta casi confirmada
            </h1>
            <p className="text-lg text-secondary-foreground max-w-xl mx-auto leading-relaxed">
              Ya diste el primer paso. Para asegurar tu sesion, completa los siguientes pasos obligatorios.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <StepCard
            stepLabel="Paso 1 — Obligatorio"
            title="Mira este video antes de tu sesion"
            description="Aqui te explico como prepararte y que debes tener listo para aprovechar la llamada."
            loomEmbedId="5245fc2da0df4aeaabead05f4b8ca52c"
            footnote="No ver este video puede hacer que tu sesion sea cancelada."
          />

          <StepCard
            stepLabel="Paso 2 — Obligatorio"
            title="Entiende como funciona el proceso"
            description="En este video te explico exactamente como trabajamos y que esperamos de nuestros traders."
            loomEmbedId="c10ee15dac854dd59e65b6fce068ac62"
            footnote="Queremos asegurarnos de que esta oportunidad sea adecuada para ti."
          />

          <div className="card-premium py-12">
            <ConfirmationStep />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
