import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { MVPSection } from "@/components/sections/MVPSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { LifecycleSection } from "@/components/sections/LifecycleSection";
import { RisksSection } from "@/components/sections/RisksSection";
import { AIEthicsSection } from "@/components/sections/AIEthicsSection";

import { LeanCanvasSection } from "@/components/sections/LeanCanvasSection";
import { RobotMascot } from "@/components/mascot/RobotMascot";
import { Brain } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("visao");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Content Sections */}
        <div className="container px-4 py-8 space-y-8 sm:px-6 sm:py-12 sm:space-y-12 lg:px-8">
          <VisionSection />
          <LeanCanvasSection />
          <MVPSection />
          <RoadmapSection />
          <LifecycleSection />
          <RisksSection />
          <AIEthicsSection />
          
        </div>
      </main>
      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold">InsightAI Pro</p>
                <p className="text-xs text-muted-foreground">Projeto de Gestão de Produtos Digitais</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                Curso de IA e Automação Digital
              </p>
              <p className="text-xs text-muted-foreground">
                Fundamentos de Gestão de Projetos • 2026
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center text-xs text-muted-foreground">
            <span>Todos os direitos Reservados - Vitor Ramon</span>
          </div>
        </div>
      </footer>

      {/* Robot Mascot */}
      <RobotMascot />
    </div>
  );
};

export default Index;