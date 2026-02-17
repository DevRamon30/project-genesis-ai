# InsightAI Pro — Documentação do Projeto

> **Plataforma SaaS com IA Generativa para análise automatizada de dados de atendimento ao cliente**

---

## O que é este projeto?

O **InsightAI Pro** é um produto digital planejado como exercício prático das disciplinas de _Fundamentos de Gestão de Projetos_ e _Curso de IA e Automação Digital_. O objetivo é demonstrar o processo completo de concepção e planejamento de um produto digital que usa Inteligência Artificial Generativa no seu núcleo — do problema identificado até o roadmap de evolução.

---

## Estrutura dos Artefatos

```
InsightAI Pro
│
├── Fundamentação Teórica (docx)   ← documento principal de planejamento
├── Página Web do Projeto          ← visualização navegável dos artefatos
└── README.md                      ← você está aqui
```

---

## Como Interpretar os Artefatos

### 1. Visão de Produto
**O que é:** Define _por que_ o produto existe e _para quem_.

- **Descrição do produto** — explica o que a plataforma faz em termos funcionais (classificar, priorizar, sumarizar interações de atendimento com LLMs).
- **Público-alvo** — três segmentos com necessidades distintas: times de CS/Suporte, Gerentes de Operações e empresas com alto volume de tickets.
- **Proposta de valor** — três métricas concretas que quantificam o benefício: 80% de redução no tempo de análise, 3x mais velocidade na priorização, 100% das interações cobertas.

> 💡 **Dica de leitura:** Pergunte-se sempre: "Quem tem esse problema? Por que a solução atual não resolve?" A proposta de valor só é válida se responder a isso com números.

---

### 2. Definição do MVP
**O que é:** Define _o mínimo que valida a hipótese central_ do produto.

O MVP foi priorizado pela **matriz Valor × Esforço** em três critérios:

| Critério | Significado |
|----------|-------------|
| Time-to-Value | O usuário percebe valor rápido? |
| Viabilidade Técnica | É buildável em 8 semanas? |
| Validação de Hipóteses | Comprova ou refuta a hipótese principal? |

Cada funcionalidade tem um badge de prioridade (**Essencial / Importante / Desejável**) e critérios de aceitação objetivos e testáveis. Isso evita discussões subjetivas sobre "está pronto?" durante o desenvolvimento.

> 💡 **Dica de leitura:** Se uma funcionalidade não tem critério de aceitação claro, ela não deveria estar no MVP — é impossível saber quando termina.

---

### 3. Roadmap do Produto
**O que é:** O plano de evolução do produto em fases, cada uma com objetivos, entregáveis e métricas.

```
Fase 1: Foundation (MVP)   →   Fase 2: Growth (V1.0)   →   Fase 3: Scale (V2.0)
   Semanas 1–8                    Semanas 9–16                Semanas 17–24
   5 clientes piloto              50 clientes                 200 clientes
   NPS > 7                        MRR $10k                    ARR $500k
```

**Lógica de progressão:** Cada fase só começa quando as métricas de sucesso da anterior são atingidas. Isso evita construir sobre hipóteses não validadas.

> 💡 **Dica de leitura:** Um roadmap não é um cronograma fixo. É uma aposta sobre qual sequência de valor maximiza aprendizado e receita. As datas podem mudar; a lógica de dependência não deve.

---

### 4. Ciclo de Vida da Aplicação
**O que é:** O modelo de processo que governa como o time trabalha em cada etapa do produto.

```
Descoberta → Validação → Entrega → Evolução
(2-3 sem.)   (3-4 sem.)  (6-8 sem.) (contínua)
```

Cada fase tem **critérios objetivos para avançar** — não avança por calendário, mas por evidência:

- Descoberta → Validação: `Problem-Solution Fit validado + 10 entrevistas realizadas`
- Validação → Entrega: `Protótipo com 80% de aprovação + backlog priorizado`
- Entrega → Evolução: `MVP em produção + 5 clientes ativos + zero bugs críticos`
- Evolução → Maturidade: `NPS > 40 + crescimento sustentável + LTV/CAC > 3`

> 💡 **Dica de leitura:** O ciclo de vida é diferente do roadmap. O roadmap diz _o que_ será construído. O ciclo de vida diz _como_ o time opera para construir qualquer coisa.

---

### 5. Gerenciamento de Riscos
**O que é:** Identificação antecipada de ameaças ao projeto, com estratégias de resposta.

A classificação usa duas dimensões combinadas:

| Probabilidade × Impacto | Nível resultante |
|------------------------|-----------------|
| Alta × Alto ou Média × Muito Alto | 🔴 Crítico |
| Média × Alto ou Alta × Médio | 🟠 Alto |
| Baixa × Alto ou qualquer × Médio | 🔵 Médio |

**Os 6 riscos identificados:**

1. 🔴 Qualidade dos modelos de IA (alucinações)
2. 🔴 Segurança e privacidade de dados
3. 🟠 Adoção pelo usuário (resistência cultural)
4. 🟠 Escalabilidade técnica
5. 🔵 Dependência de APIs externas (OpenAI, Anthropic)
6. 🔵 Competição de mercado

> 💡 **Dica de leitura:** Riscos críticos exigem mitigação _preventiva_ (antes de acontecer). Riscos médios podem ter planos de contingência _reativos_ (se acontecer). A diferença importa para a alocação de recursos.

---

### 6. Gestão de Produtos e IA
**O que é:** Framework ético e técnico para o uso responsável de IA no produto.

Esta seção tem quatro camadas:

**a) Riscos específicos de IA**
Além dos riscos genéricos (seção 5), produtos com IA têm riscos próprios: alucinações, viés algorítmico, dependência tecnológica e custos variáveis de inferência.

**b) Considerações éticas (4 princípios)**
- **Transparência:** usuário sabe quando a análise é gerada por IA
- **Consentimento:** dados só usados conforme contrato B2B
- **Responsabilidade humana:** IA apoia, não substitui a decisão
- **Equidade:** monitoramento ativo contra discriminação algorítmica

**c) Segurança e confiabilidade**
Criptografia AES-256/TLS 1.3 + compliance LGPD/GDPR/SOC 2 + model governance (versionamento e rollback).

**d) Impactos organizacionais**
O produto gera tanto ganhos (eficiência, qualidade de decisão) quanto desafios (mudança cultural, necessidade de data governance) que o cliente precisa ser preparado para gerenciar.

> 💡 **Dica de leitura:** Produtos com IA têm uma "dívida ética" que se acumula se não for tratada desde o início. É mais fácil construir explicabilidade e auditorias no design do que adicionar depois.

---

## Modelo de Negócio (Lean Canvas)

O Lean Canvas mapeia o negócio em uma página:

| Bloco | Conteúdo Principal |
|-------|-------------------|
| Problema | Volume gigantesco de tickets impossibilita análise manual |
| Solução | Plataforma SaaS com IA Generativa + dashboard em tempo real |
| Proposta de Valor | Análise 100% automatizada, insights em minutos |
| Segmentos | Times de CS, Equipes de Suporte +1.000 tickets/mês, Gerentes de CX |
| Canais | Inside Sales B2B direto, parcerias Zendesk/Intercom |
| Receita | SaaS mensal/anual: Starter $299, Pro $799, Enterprise custom |
| Custos | Cloud (AWS/GCP), APIs de LLM, equipe eng+produto, CS |
| Vantagem Competitiva | UX simples, time-to-value em minutos, modelos fine-tuned por vertical |

---

## Tecnologias e Ferramentas Utilizadas

| Categoria | Ferramentas |
|-----------|------------|
| Modelos de IA | LLMs (OpenAI, Anthropic) com fine-tuning por vertical |
| Infraestrutura | AWS / GCP com auto-scaling |
| Integrações | Zendesk, Intercom, Freshdesk (APIs nativas) |
| Segurança | AES-256, TLS 1.3, LGPD/GDPR compliance |
| Documentação | Notion, Figma (protótipos), GitHub |

---

## Decisões de Design do Planejamento

### Por que 8 semanas para o MVP?
8 semanas é o tempo mínimo para construir as 3 funcionalidades essenciais com qualidade suficiente para validação real. Menos tempo resultaria em um produto que não demonstra o valor central; mais tempo atrasaria a coleta de feedback do mercado.

### Por que 3 fases no roadmap?
A progressão Foundation → Growth → Scale segue a lógica: primeiro _provar_ que o produto resolve o problema (F1), depois _crescer_ com o que funciona (F2), depois _escalar_ com diferenciação competitiva (F3). Tentar escalar sem provar é o erro mais comum em produtos early-stage.

### Por que o MVP inclui Sumarização Automática mas não Alertas Inteligentes?
A Sumarização tem valor muito alto e viabiliza a adoção executiva (report para gestores). Os Alertas têm valor médio e baixo esforço, mas não são decisivos para validação da hipótese central — podem ser adicionados no início da Fase 2 com custo baixo.

---

## Glossário

| Termo | Definição |
|-------|-----------|
| **LLM** | Large Language Model — modelo de linguagem de grande escala (ex: GPT-4, Claude) |
| **MVP** | Minimum Viable Product — versão mínima do produto que valida hipóteses |
| **SaaS** | Software as a Service — software entregue como serviço via internet |
| **NPS** | Net Promoter Score — métrica de satisfação e lealdade do cliente |
| **MRR** | Monthly Recurring Revenue — receita recorrente mensal |
| **ARR** | Annual Recurring Revenue — receita recorrente anual |
| **Churn** | Taxa de cancelamento de clientes em um período |
| **Fine-tuning** | Ajuste fino de um modelo de IA com dados específicos de domínio |
| **Human-in-the-loop** | Processo em que humanos validam ou corrigem outputs de IA antes do uso final |
| **LTV/CAC** | Lifetime Value / Customer Acquisition Cost — indicador de saúde do modelo de negócio |
| **CI/CD** | Continuous Integration/Continuous Delivery — automação de testes e deploy |

---

*InsightAI Pro — Projeto de Gestão de Produtos | Fundamentos de Gestão de Projetos + IA e Automação Digital*

