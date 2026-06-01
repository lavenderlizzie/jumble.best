import React, { useState, useRef, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setTime(t => t + 10), 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const reset = () => { setRunning(false); setTime(0); };

  const format = (ms) => {
    const m = Math.floor(ms / 60000).toString().padStart(2, '0');
    const s = Math.floor((ms % 60000) / 1000).toString().padStart(2, '0');
    const cs = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
    return `${m}:${s}.${cs}`;
  };

  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border-2 border-border bg-card shadow-sm">
      <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">⏱ Puzzle Timer</p>
      <div className="text-5xl font-mono font-black text-foreground tracking-widest">
        {format(time)}
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setRunning(r => !r)}
          className="px-5 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all"
        >
          {running ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={reset}
          className="px-5 py-2 rounded-xl bg-muted text-muted-foreground font-bold text-base hover:bg-muted/70 transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

