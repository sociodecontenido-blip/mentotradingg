interface WistiaStepCardProps {
  stepLabel: string;
  title: string;
  description: string;
  wistiaMediaId: string;
  footnote: string;
}

const WistiaStepCard = ({ stepLabel, title, description, wistiaMediaId, footnote }: WistiaStepCardProps) => {
  return (
    <div className="card-premium space-y-7 text-center md:text-left">
      <p className="text-xs font-semibold tracking-[0.22em] uppercase text-accent">
        {stepLabel}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-foreground leading-snug">
        {title}
      </h2>
      <p className="text-secondary-foreground leading-relaxed">
        {description}
      </p>
      <div className="relative w-full overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 rounded-xl z-10 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 0 1px hsl(215 30% 20% / 0.35), inset 0 1px 0 hsl(215 50% 40% / 0.1)',
          }}
        />
        <style>{`wistia-player[media-id='${wistiaMediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${wistiaMediaId}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
        {/* @ts-ignore */}
        <wistia-player media-id={wistiaMediaId} aspect="1.7777777777777777"></wistia-player>
      </div>
      <div className="divider-subtle" />
      <p className="text-sm text-subtle italic">
        {footnote}
      </p>
    </div>
  );
};

export default WistiaStepCard;
