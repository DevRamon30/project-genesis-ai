import { Brain, FileText, Target, Map, Shield, Lightbulb, BarChart3 } from "lucide-react";

const navItems = [
  { id: "visao", label: "Visão", icon: Target },
  { id: "mvp", label: "MVP", icon: Lightbulb },
  { id: "roadmap", label: "Roadmap", icon: Map },
  { id: "ciclo", label: "Ciclo de Vida", icon: BarChart3 },
  { id: "riscos", label: "Riscos", icon: Shield },
  { id: "ia", label: "IA & Ética", icon: Brain },
];

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">InsightAI Pro</h1>
            <p className="text-xs text-muted-foreground">Projeto de Gestão</p>
          </div>
        </div>
        
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <a 
          href="#docs" 
          className="flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
        >
          <FileText className="h-4 w-4" />
          Documentação
        </a>
      </div>
    </header>
  );
}