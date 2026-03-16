interface WistiaStepCardProps {
  stepLabel: string;
  title: string;
  description: string;
  wistiaIframeSrc: string;
  iframeTitle: string;
  footnote: string;
}

const WistiaStepCard = ({ stepLabel, title, description, wistiaIframeSrc, iframeTitle, footnote }: WistiaStepCardProps) => {
  return (
    <div className="card-premium space-y-6 md:space-y-7 text-center md:text-left px-5 py-7 sm:px-7 sm:py-8 md:px-8 md:py-9">
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-accent">
        {stepLabel}
      </p>
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
        {title}
      </h2>
      <p className="text-secondary-foreground leading-relaxed text-sm sm:text-base">
        {description}
      </p>
      <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
        <div
          className="absolute inset-0 rounded-xl z-10 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 0 1px hsl(215 30% 20% / 0.35), inset 0 1px 0 hsl(215 50% 40% / 0.1)',
          }}
        />
        <iframe
          src={wistiaIframeSrc}
          title={iframeTitle}
          allow="autoplay; fullscreen"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
          className="absolute inset-0 w-full h-full rounded-xl"
          style={{ border: 0 }}
        />
      </div>
      <div className="divider-subtle" />
      <p className="text-sm text-subtle italic leading-relaxed">
        {footnote}
      </p>
    </div>
  );
};

export default WistiaStepCard;
