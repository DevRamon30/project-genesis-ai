const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const projectData = {
  project: {
    name: "InsightAI Pro",
    type: "Plataforma SaaS baseada em IA Generativa",
    description: "Plataforma digital SaaS que transforma dados brutos de atendimento ao cliente (tickets, chats, e-mails) em insights acionáveis e planos de ação automatizados, utilizando modelos de linguagem avançados (LLMs).",
    author: "Vitor Ramon",
    course: "Curso de IA e Automação Digital - Fundamentos de Gestão de Projetos",
    year: 2026,
  },

  visao: {
    titulo: "1.1 Visão de Produto",
    descricao: "O InsightAI Pro é uma plataforma digital SaaS baseada em Inteligência Artificial Generativa que transforma dados brutos de atendimento ao cliente (tickets, chats, e-mails) em insights acionáveis e planos de ação automatizados. A solução utiliza modelos de linguagem avançados (LLMs) para classificar, priorizar e sumarizar grandes volumes de interações, identificando padrões críticos, sentimentos predominantes e oportunidades de melhoria em tempo real.",
    publicoAlvo: [
      "Times de Customer Success e Suporte: Gestores e analistas que precisam processar alto volume de interações diariamente",
      "Gerentes de Operações: Profissionais responsáveis por métricas de atendimento e satisfação do cliente (CSAT, NPS)",
      "Empresas de médio/grande porte: Organizações com +1.000 tickets/mês que enfrentam gargalos na análise manual",
    ],
    problema: {
      descricao: "Times de atendimento enfrentam volumes gigantescos de interações diariamente, tornando impossível a análise manual eficiente.",
      consequencias: [
        "Incapacidade de identificar temas críticos rapidamente",
        "Demora na geração de planos de ação",
        "Perda de insights valiosos enterrados nos dados",
        "Decisões baseadas em amostras não representativas",
      ],
    },
    propostaDeValor: {
      metricas: [
        { valor: "80%", descricao: "Redução no tempo de análise" },
        { valor: "3x", descricao: "Mais rápido na priorização" },
        { valor: "100%", descricao: "Das interações analisadas" },
      ],
      frase: "Transforme dados de atendimento em ações estratégicas em minutos, não em dias.",
    },
  },

  leanCanvas: {
    titulo: "Lean Canvas",
    problema: ["Volume gigantesco de tickets impossibilita análise manual", "Incapacidade de identificar temas críticos rapidamente", "Decisões baseadas em amostras não representativas", "Demora na geração de planos de ação"],
    segmentoClientes: ["Times de Customer Success (empresas B2B SaaS)", "Equipes de Suporte com +1.000 tickets/mês", "Gerentes de Operações de CX", "Empresas médio/grande porte"],
    propostaValor: ["Análise 100% automatizada de todas as interações", "Insights acionáveis em minutos, não dias", "Priorização inteligente baseada em impacto", "Planos de ação gerados automaticamente"],
    solucao: ["Plataforma SaaS com IA Generativa", "Classificação automática por tema/urgência/sentimento", "Dashboard de insights em tempo real", "Sumarização executiva automática"],
    canais: ["Inside Sales B2B direto", "Parcerias com plataformas de suporte (Zendesk, Intercom)", "Marketing de conteúdo (SEO, webinars)", "Eventos e conferências de CX"],
    fonteReceita: ["Assinatura SaaS mensal/anual", "Tiers: Starter ($299), Pro ($799), Enterprise (custom)", "Volume-based pricing (por ticket processado)", "Add-ons: integrações premium, modelos customizados"],
    estruturaCustos: ["Infraestrutura cloud (AWS/GCP)", "Custos de API de LLM (OpenAI, Anthropic)", "Equipe de desenvolvimento (eng + produto)", "Customer Success e Suporte", "Marketing e vendas"],
    metricasChave: ["MRR (Monthly Recurring Revenue)", "Churn rate < 5%", "NPS > 40", "Time-to-value < 30 min", "Tickets processados/mês"],
    vantagemCompetitiva: ["UX simplificada vs. ferramentas complexas de BI", "Time-to-value em minutos (não semanas)", "Modelos de IA fine-tuned por vertical", "Integrações nativas com principais plataformas"],
  },

  mvp: {
    titulo: "1.2 Definição do MVP",
    justificativa: "Priorização baseada na matriz Valor x Esforço, focando em Time-to-Value, Viabilidade Técnica (8 semanas) e Validação de Hipóteses.",
    funcionalidades: [
      { id: 1, nome: "Importação de Dados", descricao: "Upload de arquivos CSV/Excel com tickets e integração básica via API com plataformas de suporte (Zendesk, Freshdesk)", prioridade: "Essencial", esforco: "Médio", valor: "Alto", criteriosAceitacao: ["Suporte a CSV e Excel até 50MB", "Mapeamento automático de colunas", "Validação de dados com relatório de erros"] },
      { id: 2, nome: "Classificação Automática por IA", descricao: "Categorização inteligente de tickets por tema, urgência e sentimento utilizando modelos LLM", prioridade: "Essencial", esforco: "Alto", valor: "Muito Alto", criteriosAceitacao: ["Classificação em até 10 categorias customizáveis", "Score de sentimento (positivo/neutro/negativo)", "Nível de urgência (baixo/médio/alto/crítico)"] },
      { id: 3, nome: "Dashboard de Insights", descricao: "Visualização dos principais indicadores: volume por categoria, tendências, sentimento geral e alertas", prioridade: "Essencial", esforco: "Médio", valor: "Alto", criteriosAceitacao: ["Gráficos de tendência temporal", "Top 10 temas mais frequentes", "Filtros por período e categoria"] },
      { id: 4, nome: "Sumarização Automática", descricao: "Geração de resumos executivos diários/semanais com principais insights e recomendações", prioridade: "Importante", esforco: "Médio", valor: "Alto", criteriosAceitacao: ["Resumo em linguagem natural", "Destaques dos problemas críticos", "Exportação em PDF"] },
      { id: 5, nome: "Alertas Inteligentes", descricao: "Notificações automáticas quando padrões críticos são detectados (picos de reclamação, quedas de NPS)", prioridade: "Desejável", esforco: "Baixo", valor: "Médio", criteriosAceitacao: ["Regras configuráveis de alertas", "Notificação por e-mail", "Histórico de alertas no sistema"] },
    ],
  },

  roadmap: {
    titulo: "1.3 Roadmap do Produto",
    descricao: "Planejamento estratégico de evolução em 3 fases (24 semanas)",
    fases: [
      { fase: 1, nome: "Foundation", duracao: "Semanas 1-8", status: "MVP", objetivos: ["Validar hipótese central do produto", "Estabelecer arquitetura base escalável", "Conquistar primeiros 5 clientes piloto"], entregaveis: ["Importação de dados (CSV/API básica)", "Classificação por IA (categorias e sentimento)", "Dashboard básico de insights", "Sumarização automática"], metricas: ["5 clientes piloto", "NPS > 7", "Retenção > 80%"] },
      { fase: 2, nome: "Growth", duracao: "Semanas 9-16", status: "V1.0", objetivos: ["Expandir capacidades de análise", "Melhorar experiência do usuário", "Escalar para 50 clientes"], entregaveis: ["Integrações nativas (Zendesk, Intercom, Freshdesk)", "Análise preditiva de tendências", "Relatórios customizáveis", "API pública para desenvolvedores", "Planos de ação automáticos"], metricas: ["50 clientes ativos", "MRR $10k", "Churn < 5%"] },
      { fase: 3, nome: "Scale", duracao: "Semanas 17-24", status: "V2.0", objetivos: ["Diferenciação competitiva", "Expansão para enterprise", "Automação avançada"], entregaveis: ["Modelos de IA customizados por cliente", "Automação de respostas (sugestões de reply)", "Inteligência competitiva", "SSO e compliance enterprise", "Multi-idiomas (PT, EN, ES)"], metricas: ["200 clientes", "ARR $500k", "Enterprise tier lançado"] },
    ],
  },

  cicloDeVida: {
    titulo: "1.4 Ciclo de Vida da Aplicação",
    fases: [
      { id: 1, nome: "Descoberta", duracao: "2-3 semanas", descricao: "Investigação profunda do problema e validação da oportunidade", atividades: ["Entrevistas com stakeholders e usuários-alvo", "Análise de concorrência e mercado", "Definição de personas e jobs-to-be-done", "Documentação da visão de produto"], criterios: ["Problem-Solution Fit validado", "Mínimo 10 entrevistas realizadas", "Canvas de Proposta de Valor aprovado"], artefatos: ["Lean Canvas", "Personas", "Mapa de Empatia"] },
      { id: 2, nome: "Validação", duracao: "3-4 semanas", descricao: "Prototipação e teste de hipóteses críticas com usuários reais", atividades: ["Criação de protótipos de baixa/alta fidelidade", "Testes de usabilidade com usuários", "Validação técnica de viabilidade IA", "Definição e priorização do backlog do MVP"], criterios: ["Protótipo validado com 80% de aprovação", "Arquitetura técnica definida", "Backlog do MVP priorizado"], artefatos: ["Protótipo Figma", "Documento de Arquitetura", "Backlog"] },
      { id: 3, nome: "Entrega", duracao: "6-8 semanas", descricao: "Desenvolvimento incremental e lançamento do MVP", atividades: ["Desenvolvimento em sprints de 2 semanas", "Integração contínua e deploy automatizado", "Testes de qualidade e performance", "Onboarding de clientes piloto"], criterios: ["MVP funcional em produção", "5+ clientes piloto utilizando", "Zero bugs críticos"], artefatos: ["Código em produção", "Documentação técnica", "Métricas iniciais"] },
      { id: 4, nome: "Evolução", duracao: "Contínuo", descricao: "Iteração contínua baseada em dados e feedback", atividades: ["Análise de métricas de uso e NPS", "Coleta sistemática de feedback", "Priorização de melhorias e novas features", "Expansão para novos segmentos"], criterios: ["Product-Market Fit alcançado (NPS > 40)", "Crescimento sustentável de usuários", "Modelo de negócio validado"], artefatos: ["Dashboards de métricas", "Roadmap atualizado", "OKRs do produto"] },
    ],
  },

  riscos: {
    titulo: "1.5 Gerenciamento de Riscos",
    lista: [
      { id: 1, nome: "Qualidade dos Modelos de IA", categoria: "Técnico", descricao: "Classificação imprecisa ou alucinações do modelo LLM gerando insights incorretos", probabilidade: "Alta", impacto: "Alto", nivel: "Crítico", mitigacao: ["Implementar human-in-the-loop para validação inicial", "Criar pipeline de fine-tuning com dados do cliente", "Monitoramento contínuo de acurácia com alertas"], responsavel: "Tech Lead" },
      { id: 2, nome: "Segurança e Privacidade de Dados", categoria: "Compliance", descricao: "Vazamento ou uso inadequado de dados sensíveis de atendimento ao cliente", probabilidade: "Média", impacto: "Muito Alto", nivel: "Crítico", mitigacao: ["Criptografia end-to-end e anonimização", "Compliance LGPD/GDPR desde o design", "Auditorias de segurança trimestrais"], responsavel: "CISO / DPO" },
      { id: 3, nome: "Adoção pelo Usuário", categoria: "Mercado", descricao: "Resistência das equipes em confiar nas análises geradas por IA", probabilidade: "Média", impacto: "Alto", nivel: "Alto", mitigacao: ["Programa de change management com treinamentos", "Demonstração clara de ROI com casos de sucesso", "Interface intuitiva com explicabilidade das decisões"], responsavel: "Product Manager" },
      { id: 4, nome: "Escalabilidade Técnica", categoria: "Técnico", descricao: "Sistema não suportar volume de dados em crescimento exponencial", probabilidade: "Média", impacto: "Alto", nivel: "Alto", mitigacao: ["Arquitetura cloud-native com auto-scaling", "Processamento assíncrono em filas", "Testes de carga regulares (stress testing)"], responsavel: "DevOps Lead" },
      { id: 5, nome: "Dependência de APIs Externas", categoria: "Técnico", descricao: "Indisponibilidade ou mudanças em APIs de LLM (OpenAI, Anthropic)", probabilidade: "Baixa", impacto: "Alto", nivel: "Médio", mitigacao: ["Arquitetura multi-provider com fallback", "Cache de respostas para operações críticas", "Monitoramento de SLAs dos fornecedores"], responsavel: "Tech Lead" },
      { id: 6, nome: "Competição de Mercado", categoria: "Mercado", descricao: "Entrada de competidores estabelecidos ou startups com soluções similares", probabilidade: "Alta", impacto: "Médio", nivel: "Médio", mitigacao: ["Foco em diferenciação por UX e time-to-value", "Construção de moats via integrações profundas", "Roadmap ágil para resposta rápida ao mercado"], responsavel: "CEO / CPO" },
    ],
  },

  iaEtica: {
    titulo: "1.6 Gestão de Produtos e IA",
    riscosIA: [
      { titulo: "Alucinações e Informações Falsas", descricao: "LLMs podem gerar insights factualmente incorretos ou inventar dados não existentes.", mitigacao: "Validação cruzada com dados originais + indicadores de confiança" },
      { titulo: "Viés Algorítmico", descricao: "Modelos podem perpetuar ou amplificar vieses presentes nos dados de treinamento.", mitigacao: "Auditorias de fairness + datasets diversificados + monitoramento contínuo" },
      { titulo: "Dependência Tecnológica", descricao: "Alta dependência de providers externos (OpenAI, Anthropic) para funcionalidades core.", mitigacao: "Arquitetura multi-model + capacidade de fallback para modelos open-source" },
      { titulo: "Custos Variáveis de Inferência", descricao: "Custos de API podem escalar de forma imprevisível com o volume de uso.", mitigacao: "Caching inteligente + rate limiting + otimização de prompts" },
    ],
    etica: [
      { titulo: "Transparência", descricao: "Usuários devem ser informados quando interagem com análises geradas por IA. O sistema deve explicar como as conclusões foram alcançadas." },
      { titulo: "Consentimento", descricao: "Dados de clientes finais são processados com base em contratos B2B. Políticas claras sobre uso de dados para treinamento de modelos." },
      { titulo: "Responsabilidade", descricao: "Decisões finais devem ser tomadas por humanos. A IA é ferramenta de suporte, não substituto do julgamento profissional." },
      { titulo: "Equidade", descricao: "Monitoramento ativo para garantir que o sistema não discrimine grupos específicos de clientes ou temas." },
    ],
    seguranca: [
      { titulo: "Criptografia", descricao: "AES-256 em repouso, TLS 1.3 em trânsito" },
      { titulo: "Compliance", descricao: "LGPD, GDPR, SOC 2 Type II" },
      { titulo: "Model Governance", descricao: "Versionamento, auditoria, rollback" },
    ],
    impactosOrganizacionais: [
      { tipo: "positivo", titulo: "Eficiência Operacional", descricao: "Redução de 80% no tempo de análise manual, liberando equipes para atividades estratégicas." },
      { tipo: "positivo", titulo: "Qualidade de Decisões", descricao: "Insights baseados em 100% dos dados, não em amostras, melhorando a assertividade." },
      { tipo: "atencao", titulo: "Mudança Cultural", descricao: "Necessidade de upskilling das equipes e adaptação de processos para trabalhar com IA." },
      { tipo: "atencao", titulo: "Governança de Dados", descricao: "Exige políticas robustas de data governance e definição clara de ownership dos dados." },
    ],
  },
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const url = new URL(req.url);
  const section = url.searchParams.get('section');

  let responseData: any;

  if (section && section in projectData) {
    responseData = (projectData as any)[section];
  } else if (section) {
    return new Response(
      JSON.stringify({ 
        error: `Seção '${section}' não encontrada.`,
        secoes_disponiveis: Object.keys(projectData),
      }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } else {
    responseData = projectData;
  }

  return new Response(JSON.stringify(responseData, null, 2), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
