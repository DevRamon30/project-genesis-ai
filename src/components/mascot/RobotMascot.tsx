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

      const maxOffset = 3;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const normalizedX = distance > 0 ? (deltaX / distance) * Math.min(maxOffset, distance / 50) : 0;
      const normalizedY = distance > 0 ? (deltaY / distance) * Math.min(maxOffset, distance / 50) : 0;

      setEyeOffset({ x: normalizedX, y: normalizedY });
    }
  }, [mousePosition]);

  return (
    <div
      ref={robotRef}
      className="fixed bottom-3 right-3 z-50 cursor-pointer select-none sm:bottom-4 sm:right-4"
      title="Olá! Sou o InsightBot 🤖"
    >
      <div className="relative scale-75 sm:scale-90">
        {/* Robot Body */}
        <div className="relative flex flex-col items-center">
          {/* Antenna */}
          <div className="relative mb-0.5">
            <div className="h-2 w-0.5 bg-primary rounded-full" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-accent animate-pulse" />
          </div>

          {/* Head */}
          <div className="relative w-10 h-8 bg-gradient-to-b from-primary to-primary/80 rounded-xl shadow-md border border-primary-foreground/20">
            {/* Screen/Face */}
            <div className="absolute inset-1 bg-card rounded-lg flex items-center justify-center gap-1.5">
              {/* Left Eye */}
              <div className="relative w-2.5 h-2.5 bg-background rounded-full border border-primary/30 overflow-hidden">
                <div
                  className="absolute w-1.5 h-1.5 bg-primary rounded-full transition-transform duration-75"
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-3px",
                    marginTop: "-3px",
                  }}
                />
              </div>
              {/* Right Eye */}
              <div className="relative w-2.5 h-2.5 bg-background rounded-full border border-primary/30 overflow-hidden">
                <div
                  className="absolute w-1.5 h-1.5 bg-primary rounded-full transition-transform duration-75"
                  style={{
                    transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
                    left: "50%",
                    top: "50%",
                    marginLeft: "-3px",
                    marginTop: "-3px",
                  }}
                />
              </div>
            </div>

            {/* Mouth */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-2.5 h-0.5 bg-success rounded-full" />
          </div>

          {/* Body */}
          <div className="relative w-8 h-6 bg-gradient-to-b from-primary/90 to-primary/70 rounded-lg mt-0.5 border border-primary-foreground/20">
            {/* Chest Light */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full animate-pulse shadow-sm shadow-accent/50" />
            
            {/* Body Details */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
              <div className="w-1 h-1 bg-muted rounded-full" />
              <div className="w-1 h-1 bg-muted rounded-full" />
            </div>
          </div>

          {/* Arms */}
          <div className="absolute top-[2.2rem] left-0 right-0">
            {/* Left Arm */}
            <div className="absolute -left-1 top-0 w-1.5 h-4 bg-primary/80 rounded-full origin-top" />
            
            {/* Right Arm - Waving */}
            <div className="absolute -right-1 top-0 w-1.5 h-4 bg-primary/80 rounded-full origin-top animate-wave">
              {/* Hand */}
              <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Speech Bubble */}
        <div className="absolute -top-7 -left-12 bg-card border rounded-lg px-1.5 py-0.5 shadow-sm animate-float-subtle opacity-80">
          <span className="text-[10px] font-medium whitespace-nowrap">Olá! 👋</span>
          <div className="absolute -bottom-1 right-2 w-2 h-2 bg-card border-r border-b rotate-45 transform" />
        </div>
      </div>
    </div>
  );
}
