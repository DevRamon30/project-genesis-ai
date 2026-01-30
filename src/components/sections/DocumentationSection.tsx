import { 
  FileText, ExternalLink, Figma, Trello, FileSpreadsheet, 
  Youtube, BookOpen, CheckCircle2, Lightbulb, Grid3X3
} from "lucide-react";
import { SectionCard } from "../layout/SectionCard";

const tools = [
  {
    name: "Lean Canvas",
    category: "Visão de Produto",
    description: "Framework para modelagem de negócio enxuto",
    icon: Grid3X3,
    link: "https://leanstack.com/lean-canvas",
  },
  {
    name: "Figma / FigJam",
    category: "Prototipação",
    description: "Criação de protótipos e roadmaps visuais",
    icon: Figma,
    link: "https://figma.com",
  },
  {
    name: "Trello / Notion",
    category: "Gestão de Backlog",
    description: "Organização de tarefas e sprints",
    icon: Trello,
    link: "https://trello.com",
  },
  {
    name: "Excel / Google Sheets",
    category: "Matriz de Riscos",
    description: "Análise e classificação de riscos",
    icon: FileSpreadsheet,
    link: "https://sheets.google.com",
  },
  {
    name: "Miro",
    category: "Colaboração Visual",
    description: "Diagramas e mapeamentos colaborativos",
    icon: Lightbulb,
    link: "https://miro.com",
  },
];

const references = [
  {
    title: "PMI - Project Management Institute",
    description: "Conceitos base de gerenciamento de projetos, riscos e ciclo de vida",
    url: "https://www.pmi.org",
  },
  {
    title: "Scrum Guide (2020)",
    description: "Entrega incremental, valor e ciclos curtos",
    url: "https://scrumguides.org",
  },
  {
    title: "Disciplina: Fundamentos de Gestão de Projetos",
    description: "Visão de produto, MVP, roadmap, ciclo de vida e gestão de produtos com IA",
    url: "#",
  },
];

export function DocumentationSection() {
  return (
    <SectionCard
      id="docs"
      title="Documentação e Ferramentas"
      subtitle="Recursos utilizados na elaboração do projeto"
      icon={FileText}
    >
      {/* Ferramentas */}
      <div>
        <h3 className="mb-4 font-semibold">Ferramentas Recomendadas</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <tool.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{tool.name}</h4>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-xs text-primary">{tool.category}</p>
                <p className="mt-1 text-xs text-muted-foreground">{tool.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Fontes de Pesquisa */}
      <div>
        <h3 className="mb-4 font-semibold">Fontes de Pesquisa</h3>
        <div className="space-y-3">
          {references.map((ref) => (
            <div key={ref.title} className="flex items-start gap-3 rounded-lg border p-4">
              <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div className="flex-1">
                <h4 className="font-medium">{ref.title}</h4>
                <p className="text-sm text-muted-foreground">{ref.description}</p>
                {ref.url !== "#" && (
                  <a 
                    href={ref.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    {ref.url}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Entregáveis */}
      <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-6">
        <h3 className="mb-4 font-semibold">Checklist de Entregáveis</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Parte Teórica (1,5 pts)</p>
            <ul className="space-y-1.5">
              {["Visão de Produto", "Definição do MVP", "Roadmap", "Ciclo de Vida", "Gerenciamento de Riscos", "Gestão de IA"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Parte Prática (3,5 pts)</p>
            <ul className="space-y-1.5">
              {["Canvas de Visão", "Documento de MVP", "Roadmap Visual", "Matriz de Riscos", "README.md"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase text-muted-foreground">Vídeo Pitch (2,0 pts)</p>
            <ul className="space-y-1.5">
              {["Contexto do problema", "Visão do produto", "MVP proposto", "Roadmap", "Riscos e mitigação", "Justificativa estratégica"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video info */}
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-card border p-4">
          <Youtube className="h-8 w-8 text-destructive" />
          <div>
            <p className="font-medium">Vídeo Pitch (até 4 minutos)</p>
            <p className="text-sm text-muted-foreground">
              Hospedar no YouTube (pode ser não listado) com link acessível
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}