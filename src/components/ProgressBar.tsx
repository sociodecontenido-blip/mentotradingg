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
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-900 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
