import { useState } from "react";
import { Brain, FileText, Target, Map, Shield, Lightbulb, BarChart3, Menu, X } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary">
            <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold leading-none">InsightAI Pro</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Projeto de Gestão</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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

        <div className="flex items-center gap-2">
          <a 
            href="#docs" 
            className="hidden items-center gap-2 rounded-lg border bg-background px-3 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-muted sm:flex"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">Documentação</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t bg-card lg:hidden">
          <nav className="container px-4 py-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium transition-all ${
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
            <a 
              href="#docs" 
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border bg-background px-4 py-3 text-sm font-medium transition-colors hover:bg-muted sm:hidden"
            >
              <FileText className="h-4 w-4" />
              Documentação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
