import { useEffect, useState, useRef } from "react";

export function RobotMascot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (robotRef.current) {
      const rect = robotRef.current.getBoundingClientRect();
      const robotCenterX = rect.left + rect.width / 2;
      const robotCenterY = rect.top + rect.height / 2;

      const deltaX = mousePosition.x - robotCenterX;
      const deltaY = mousePosition.y - robotCenterY;

      // Limit eye movement
      const maxOffset = 4;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normalizedX = distance > 0 ? (deltaX / distance) * Math.min(maxOffset, distance / 50) : 0;
      const normalizedY = distance > 0 ? (deltaY / distance) * Math.min(maxOffset, distance / 50) : 0;

      setEyeOffset({ x: normalizedX, y: normalizedY });
    }
  }, [mousePosition]);

  return (
    <div
      ref={robotRef}
      className="fixed bottom-4 right-4 z-50 cursor-pointer select-none sm:bottom-6 sm:right-6"
      title="Olá! Sou o InsightBot 🤖"
    >
      <div className="relative">
        {/* Robot Body */}
        <div className="relative flex flex-col items-center">
          {/* Antenna */}
          <div className="relative mb-1">
            <div className="h-3 w-1 bg-primary rounded-full" />
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent animate-pulse" />
          </div>

          {/* Head */}
          <div className="relative w-16 h-14 sm:w-20 sm:h-16 bg-gradient-to-b from-primary to-primary/80 rounded-2xl shadow-lg border-2 border-primary-foreground/20">
            {/* Screen/Face */}
            <div className="absolute inset-1.5 sm:inset-2 bg-card rounded-xl flex items-center justify-center gap-2 sm:gap-3">
              {/* Left Eye */}
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 bg-background rounded-full border-2 border-primary/30 overflow-hidden">
                <div
                  className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full transition-transform duration-75"
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-4px",
                    marginTop: "-4px",
                  }}
                />
              </div>
              {/* Right Eye */}
              <div className="relative w-4 h-4 sm:w-5 sm:h-5 bg-background rounded-full border-2 border-primary/30 overflow-hidden">
                <div
                  className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full transition-transform duration-75"
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-4px",
                    marginTop: "-4px",
                  }}
                />
              </div>
            </div>

            {/* Mouth */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-1 bg-success rounded-full" />
          </div>

          {/* Body */}
          <div className="relative w-14 h-10 sm:w-16 sm:h-12 bg-gradient-to-b from-primary/90 to-primary/70 rounded-xl mt-1 border-2 border-primary-foreground/20">
            {/* Chest Light */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50" />
            
            {/* Body Details */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-1.5 h-1.5 bg-muted rounded-full" />
              <div className="w-1.5 h-1.5 bg-muted rounded-full" />
              <div className="w-1.5 h-1.5 bg-muted rounded-full" />
            </div>
          </div>

          {/* Arms */}
          <div className="absolute top-[4.5rem] sm:top-[5.5rem] left-0 right-0">
            {/* Left Arm */}
            <div className="absolute -left-2 sm:-left-3 top-0 w-2 sm:w-3 h-6 sm:h-8 bg-primary/80 rounded-full origin-top" />
            
            {/* Right Arm - Waving */}
            <div className="absolute -right-2 sm:-right-3 top-0 w-2 sm:w-3 h-6 sm:h-8 bg-primary/80 rounded-full origin-top animate-wave">
              {/* Hand */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Speech Bubble */}
        <div className="absolute -top-10 -left-20 sm:-left-24 bg-card border rounded-xl px-2 sm:px-3 py-1 sm:py-1.5 shadow-md animate-float-subtle opacity-90">
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Olá! 👋</span>
          {/* Bubble Tail */}
          <div className="absolute -bottom-1.5 right-3 w-3 h-3 bg-card border-r border-b rotate-45 transform" />
        </div>
      </div>
    </div>
  );
}
