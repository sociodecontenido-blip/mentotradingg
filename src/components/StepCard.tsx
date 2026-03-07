interface StepCardProps {
  stepLabel: string;
  title: string;
  description: string;
  loomEmbedId: string;
  footnote: string;
}

const StepCard = ({ stepLabel, title, description, loomEmbedId, footnote }: StepCardProps) => {
  return (
    <div className="card-premium space-y-6 text-center md:text-left">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
        {stepLabel}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="text-secondary-foreground leading-relaxed">
        {description}
      </p>
      <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            boxShadow: 'inset 0 0 0 1px hsl(215 25% 18% / 0.3)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <iframe
          src={`https://www.loom.com/embed/${loomEmbedId}`}
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-xl"
        />
      </div>
      <div className="divider-subtle" />
      <p className="text-sm text-subtle italic">
        {footnote}
      </p>
    </div>
  );
};

export default StepCard;
