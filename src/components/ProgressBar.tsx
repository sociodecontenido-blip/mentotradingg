import { useEffect, useState } from "react";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(percentage), 80);
    return () => clearTimeout(t);
  }, [percentage]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
          Progreso
        </span>
        <span className="text-xs font-semibold text-accent">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'hsl(222 22% 12%)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out progress-glow"
          style={{
            width: `${width}%`,
            background: 'linear-gradient(90deg, hsl(215 65% 42%) 0%, hsl(215 70% 55%) 100%)',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
