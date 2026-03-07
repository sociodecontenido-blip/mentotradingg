import { useEffect, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import StepCard from "@/components/StepCard";
import ConfirmationStep from "@/components/ConfirmationStep";
import Footer from "@/components/Footer";

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          <ProgressBar percentage={80} />
          <div className="relative text-center space-y-4 pt-4">
            {/* Subtle radial halo */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
              style={{
                background: 'radial-gradient(ellipse at center, hsl(215 50% 18% / 0.10) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
            <h1 className="relative text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Tu llamada esta casi confirmada
            </h1>
            <p className="relative text-lg text-secondary-foreground max-w-xl mx-auto leading-relaxed">
              Ya diste el primer paso. Para asegurar tu sesion, completa los siguientes pasos obligatorios.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <div
            className="transition-all duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '0ms',
            }}
          >
            <StepCard
              stepLabel="Paso 1 — Obligatorio"
              title="Mira este video antes de tu sesion"
              description="Aqui te explico como prepararte y que debes tener listo para aprovechar la llamada."
              loomEmbedId="5245fc2da0df4aeaabead05f4b8ca52c"
              footnote="No ver este video puede hacer que tu sesion sea cancelada."
            />
          </div>

          <div
            className="transition-all duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '100ms',
            }}
          >
            <StepCard
              stepLabel="Paso 2 — Obligatorio"
              title="Entiende como funciona el proceso"
              description="En este video te explico exactamente como trabajo y que puedes esperar de este proceso"
              loomEmbedId="c10ee15dac854dd59e65b6fce068ac62"
              footnote="Queremos asegurarnos de que esta oportunidad sea adecuada para ti."
            />
          </div>

          <div
            className="transition-all duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '200ms',
            }}
          >
            <StepCard
              stepLabel="Paso 3 — Recomendado"
              title="Por qué esta estrategia funciona"
              description="En este video te explico por qué utilizamos este enfoque, qué lo hace diferente y por qué ha funcionado para traders que buscan resultados más consistentes."
              loomEmbedId="86207a1829d74bdcb0b5333e8c8a4af2"
              footnote="Este video responde una de las dudas más comunes antes de entrar a la mentoría."
            />
          </div>

          <div
            className="transition-all duration-300 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '300ms',
            }}
          >
            <div className="card-premium py-12">
              <ConfirmationStep />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
