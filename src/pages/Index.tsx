import ProgressBar from "@/components/ProgressBar";
import StepCard from "@/components/StepCard";
import ConfirmationStep from "@/components/ConfirmationStep";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`scroll-reveal card-glow ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay vignette relative">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(215 50% 15% / 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-[60%] left-[20%] w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(215 60% 20% / 0.05) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute top-[30%] right-[10%] w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(215 45% 18% / 0.04) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-20 pb-14 px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <ScrollReveal>
              <ProgressBar percentage={80} />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative text-center space-y-5 pt-4">
                {/* Hero halo */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse at center, hsl(215 55% 20% / 0.12) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                  }}
                />
                <h1 className="relative text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                  Tu llamada esta casi confirmada
                </h1>
                <p className="relative text-lg text-secondary-foreground max-w-xl mx-auto leading-relaxed">
                  Ya diste el primer paso. Para asegurar tu sesion, completa los siguientes pasos obligatorios.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-lg mx-auto px-6">
          <div className="divider-subtle" />
        </div>

        {/* Steps */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto space-y-12">
            <ScrollReveal>
              <StepCard
                stepLabel="Paso 1 — Obligatorio"
                title="Mira este video antes de tu sesion"
                description="Aqui te explico como prepararte y que debes tener listo para aprovechar la llamada."
                loomEmbedId="5245fc2da0df4aeaabead05f4b8ca52c"
                footnote="No ver este video puede hacer que tu sesion sea cancelada."
              />
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <StepCard
                stepLabel="Paso 2 — Obligatorio"
                title="Entiende como funciona el proceso"
                description="En este video te explico exactamente como trabajo y que puedes esperar de este proceso"
                loomEmbedId="c10ee15dac854dd59e65b6fce068ac62"
                footnote="Queremos asegurarnos de que esta oportunidad sea adecuada para ti."
              />
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <StepCard
                stepLabel="Paso 3 — Recomendado"
                title="Si ya pasaste por varias estrategias, tienes que escuchar esto!"
                description="En este video te explico por qué utilizamos este enfoque, qué lo hace diferente y por qué ha funcionado para traders que buscan resultados más consistentes."
                loomEmbedId="86207a1829d74bdcb0b5333e8c8a4af2"
                footnote="Este video responde una de las dudas más comunes antes de entrar a la mentoría."
              />
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <div className="card-premium py-12">
                <ConfirmationStep />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
