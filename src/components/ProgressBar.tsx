import { useEffect, useState } from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(t);
  }, [percentage]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
          Progreso
        </span>
        <span className="text-xs font-semibold text-accent">{percentage}%</span>
      </div>
      <div
        className="h-2 w-full rounded-full overflow-hidden relative"
        style={{
          background: 'linear-gradient(90deg, hsl(224 28% 9%) 0%, hsl(224 30% 11%) 100%)',
          boxShadow: 'inset 0 1px 3px hsl(225 50% 3% / 0.5)',
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-1200 ease-out progress-glow relative"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, hsl(215 60% 38%) 0%, hsl(215 70% 52%) 60%, hsl(215 75% 58%) 100%)',
          }}
        >
          {/* Bright tip */}
          <div
            className="absolute right-0 top-0 h-full w-4 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, hsl(215 80% 70% / 0.4))',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
