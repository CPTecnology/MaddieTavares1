# Maddie Tavares Beauty Boutique - Documentação Completa

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Componentes](#componentes)
4. [Fluxo de Navegação](#fluxo-de-navegação)
5. [Modificações Comuns](#modificações-comuns)
6. [Stack Tecnológico](#stack-tecnológico)
7. [Frameworks, Ferramentas e Bibliotecas](#frameworks-ferramentas-e-bibliotecas)
8. [Como Executar](#como-executar)

---

## 🎯 Visão Geral

**Maddie Tavares Beauty Boutique** é um website premium de estética e beleza desenvolvido com **Next.js 16**, **React 19**, **TypeScript** e **Tailwind CSS v4**. O site apresenta uma experiência luxuosa com navegação fluida, seções dinâmicas e design responsivo.

### Características Principais:
- ✨ Design luxuoso e moderno
- 📱 Responsivo para todos os dispositivos
- 🎨 Cores OKLch e tema personalizável
- ⚡ Performance otimizada com Next.js
- 🔄 Componentes reutilizáveis
- 🎯 Navegação suave com scroll detection

---

## 📁 Estrutura do Projeto

```
MaddieTavares/
├── app/                          # Pastas de páginas Next.js
│   ├── page.tsx                 # Página inicial (HOME)
│   ├── layout.tsx               # Layout principal
│   ├── globals.css              # Estilos globais
│   ├── admin/                   # Página admin
│   │   └── agendamentos/        # Gestão de agendamentos
│   ├── agendar/                 # Página de agendamento
│   ├── contato/                 # Página de contato
│   ├── login/                   # Página de login
│   ├── registrar/               # Página de registro
│   ├── servicos/                # Página de serviços
│   └── sobre/                   # Página sobre
├── components/                   # Componentes React reutilizáveis
│   ├── navigation.tsx           # Menu de navegação
│   ├── hero-section.tsx         # Seção hero da página inicial
│   ├── featured-services.tsx    # Serviços destacados
│   ├── atmosphere.tsx           # Seção de ambiente/atmosfera
│   ├── testimonials.tsx         # Avaliações/depoimentos
│   ├── stats.tsx                # Seção de estatísticas
│   ├── process.tsx              # Processo de atendimento
│   ├── cta.tsx                  # Call-to-action (Chamada para ação)
│   ├── footer.tsx               # Rodapé
│   ├── theme-provider.tsx       # Provedor de tema
│   └── ui/                      # Componentes UI (botões, cards, etc)
├── hooks/                        # Hooks customizados
│   ├── use-mobile.ts            # Detecta se está em mobile
│   └── use-toast.ts             # Gerenciador de notificações
├── lib/                          # Funções utilitárias
│   └── utils.ts                 # Funções helpers
├── public/                       # Assets públicos
│   └── images/                  # Imagens (logo, ícones)
├── styles/                       # Estilos adicionais
│   └── globals.css              # CSS global
├── tailwind.config.ts           # Configuração Tailwind CSS
├── tsconfig.json                # Configuração TypeScript
├── next.config.mjs              # Configuração Next.js
├── postcss.config.mjs           # Configuração PostCSS
├── package.json                 # Dependências e scripts
└── README.md                    # Este arquivo
```

---

## 🧩 Componentes

### 1. **Navigation** (`components/navigation.tsx`)
**O que faz:** Menu de navegação fixa no topo da página

**Funcionalidades:**
- Deteta scroll para mudar aparência
- Menu responsivo (desktop/mobile)
- **Mudança de cor dinâmica:**
  - 🟤 **No topo (hero):** Texto BRANCO com botão branco
  - ⬛ **Ao rolar:** Texto PRETO com botão azul (primary)

**Onde modificar:**
```tsx
// Linhas 22-30: Lógica de scroll detection
if (scrolled > 50px) → mude de cor

// Linhas 46-56: Links do menu
- Adicione/remova links aqui
- Mudar cores em: scrolled ? 'texto preto' : 'texto branco'

// Linha 58-63: Botão "Agendar"
- Estilo do botão muda automaticamente
```

**Como adicionar novo link:**
```tsx
<Link href="/nova-pagina" className={`text-sm transition duration-300 ${
  scrolled ? 'text-foreground' : 'text-white'
}`}>Novo Link</Link>
```

---

### 2. **HeroSection** (`components/hero-section.tsx`)
**O que faz:** Banner principal com imagem de fundo e parallax

**Funcionalidades:**
- Imagem de fundo com efeito parallax (move ao scroll)
- Gradient overlay
- Botões de ação (Agendar/Explorar)
- Animação "bounce" na seta para scroll

**Onde modificar:**
```tsx
// Linhas 27-30: Imagem de fundo
- Mudar URL: src="https://seu-link-da-imagem"

// Linhas 38-40: Texto principal
- Mudar título "Transformação em Cada Detalhe"

// Linhas 42-44: Descrição
- Mudar descrição da seção

// Linhas 46-57: Botões
- Mudar texto dos botões
- Mudar cores: bg-primary, border-white, etc

// Linhas 59-62: Parallax efeito
- Ajustar velocidade: scrollY * 0.5 (mudar 0.5)
- Maior número = mais rápido
```

**Como trocar a imagem:**
1. Copie a URL de uma imagem online
2. Procure por `src="https://hebbkx1anhila5yf..."`
3. Substitua pela sua URL

---

### 3. **FeaturedServices** (`components/featured-services.tsx`)
**O que faz:** Exibe 3 serviços em destaque

**Funcionalidades:**
- Grid responsivo (3 colunas no desktop, 1 no mobile)
- Cards com imagem, ícone e descrição
- Hover effects (zoom na imagem)
- Link "Saber Mais"

**Onde modificar:**
```tsx
// Linhas 8-23: Array de serviços
- Adicione/remova serviços neste array
- Mudar imagem: image: 'https://url-da-imagem'
- Mudar ícone: icon: Sparkles (mude para outro ícone do lucide-react)

// Exemplo de novo serviço:
{
  icon: Heart,
  title: 'Novo Serviço',
  description: 'Descrição do novo serviço',
  image: 'https://url-da-imagem-do-novo-servico',
}
```

---

### 4. **Navigation + Hero Interaction** (Sistema de cor dinâmica)

**Como funciona:**

```
┌─────────────────────────────────────┐
│       TOPO DA PÁGINA (Hero)         │
│  Navigation: Branca | Texto: Branco │
│  Button: Branco com hover suave     │
└─────────────────────────────────────┘
           ↓ (Usuário rola para baixo)
┌─────────────────────────────────────┐
│    APÓS 50px DE SCROLL               │
│  Navigation: Fundo semitransparente  │
│  Texto: Preto (ou cor foreground)    │
│  Button: Azul (primary)              │
└─────────────────────────────────────┘
```

**Código responsável:**
```tsx
// navigation.tsx - linhas 22-25
const handleScroll = () => {
  setScrolled(window.scrollY > 50)  // ← Mude 50 para outro valor se desejar
}

// Linhas 32-44: Classes dinâmicas
scrolled ? 'bg-background/95' : 'bg-transparent'
scrolled ? 'text-foreground' : 'text-white'
```

---

### 5. **Outros Componentes Principais**

#### Stats (`components/stats.tsx`)
Exibe números/estatísticas (Ex: "100+ clientes satisfeitos")

#### Process (`components/process.tsx`)
Mostra o processo de atendimento em etapas

#### Testimonials (`components/testimonials.tsx`)
Avaliações/depoimentos de clientes

#### Atmosphere (`components/atmosphere.tsx`)
Mostra a atmosfera e ambiente do local

#### CTA (`components/cta.tsx`)
Call-to-Action - incentiva agendamento

#### Footer (`components/footer.tsx`)
Rodapé com informações de contato e links

---

## 🔄 Fluxo de Navegação

```
Home (page.tsx)
├── Navigation (fixa no topo)
├── HeroSection (banner principal)
├── StatsSection (números)
├── FeaturedServices (3 serviços em destaque)
├── ProcessSection (etapas do processo)
├── Atmosphere (ambience)
├── Testimonials (avaliações)
├── CTA (call-to-action)
└── Footer (rodapé com links)

Links principais:
- "/" → Home
- "/servicos" → Todos os serviços
- "/sobre" → Sobre a clínica
- "/contato" → Contato
- "/agendar" → Formulário de agendamento
- "/login" → Login
- "/registrar" → Registro
- "/admin/agendamentos" → Painel admin
```

---

## 🎨 Modificações Comuns

### 1. **Mudar Cores (Tema)**

Todas as cores estão em `app/globals.css` e `tailwind.config.ts`

**Arquivo: `app/globals.css` (linhas 6-30)**
```css
:root {
  --primary: oklch(0.65 0.22 65);        /* Cor azul principal */
  --secondary: oklch(0.92 0.015 40);     /* Cor cinza secundária */
  --accent: oklch(0.75 0.12 30);         /* Cor de destaque */
  --background: oklch(0.99 0.002 70);    /* Fundo claro */
  --foreground: oklch(0.15 0.01 40);     /* Texto escuro */
  --border: oklch(0.96 0.005 70);        /* Cor das bordas */
}

.dark {
  --primary: oklch(0.75 0.22 65);        /* Cores para modo escuro */
  --background: oklch(0.12 0 0);
}
```

**Como usar as cores em componentes:**
```tsx
className="bg-primary"           // Fundo azul
className="text-foreground"      // Texto preto
className="border-border"        // Borda
className="hover:text-accent"    // Cor hover
```

### 2. **Mudar Fontes**

**Arquivo: `app/layout.tsx` (linhas 4-5)**
```tsx
import { Geist, Geist_Mono } from 'next/font/google'

const _geist = Geist({ subsets: ["latin"] });
// Mudar para outra fonte do Google Fonts
```

### 3. **Mudar Imagens**

Procure por:
```tsx
<Image
  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/..."
  alt="descrição"
/>
```

E substitua a URL por sua imagem.

### 4. **Adicionar Nova Página**

Crie arquivo em `app/nova-pagina/page.tsx`:
```tsx
export default function NovaPagina() {
  return (
    <main className="min-h-screen bg-background">
      {/* Seu conteúdo */}
    </main>
  )
}
```

### 5. **Mudar Comportamento do Scroll na Navigation**

**Arquivo: `components/navigation.tsx` (linha 23)**
```tsx
const handleScroll = () => {
  setScrolled(window.scrollY > 50)  // ← Mude 50 para 100, 200, etc
}
```

- `> 50`: Muda de cor após 50 pixels de scroll
- `> 100`: Muda após 100 pixels
- `> 0`: Muda imediatamente

---

## 💻 Stack Tecnológico

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **Next.js** | 16.0.3 | Framework React com SSR |
| **React** | 19.2.0 | Biblioteca UI |
| **TypeScript** | 5 | Tipagem estática |
| **Tailwind CSS** | 4.1.9 | Framework CSS |
| **Lucide React** | 0.454.0 | Ícones |
| **React Hook Form** | 7.60.0 | Gerenciamento de formulários |
| **Zod** | 3.25.76 | Validação de dados |
| **Date-fns** | 4.1.0 | Manipulação de datas |
| **Sonner** | 1.7.4 | Notificações toast |
| **Recharts** | 2.15.4 | Gráficos |

---

## �️ Frameworks, Ferramentas e Bibliotecas

### **🔧 Tecnologias Principais**

#### **Runtime & Framework**
- **Next.js 16.0.10** - Framework React fullstack com SSR/SSG, routing file-based, API Routes
- **React 19.2.0** - Biblioteca JavaScript para criar interfaces de usuário com componentes reutilizáveis
- **React-DOM 19.2.0** - Renderização de componentes React no DOM

#### **Linguagem & Tipagem**
- **TypeScript 5.x** - Linguagem superset de JavaScript com tipagem estática e verificação em tempo de compilação
- **next-env.d.ts** - Tipos automáticos gerados pelo Next.js

---

### **🎨 Estilo & CSS**

#### **CSS Framework**
- **Tailwind CSS 4.1.9** - Framework CSS utilitário para criar designs responsivos e customizáveis
- **@tailwindcss/postcss 4.1.9** - Processador PostCSS para Tailwind CSS
- **Tailwind Merge 2.5.5** - Utilitário para fazer merge de classes Tailwind evitando conflitos
- **tailwindcss-animate 1.0.7** - Plugin Tailwind com animações pré-construídas
- **tw-animate-css 1.3.3** - Animações CSS adicionais para Tailwind

#### **CSS Processing**
- **PostCSS 8.5.x** - Transformador CSS com suporte a plugins (autoprefixer, Tailwind, etc)
- **Autoprefixer 10.4.20** - Plugin PostCSS que adiciona prefixos de vendor automaticamente

#### **Temas & Cores**
- **next-themes 0.4.6** - Gerenciador de temas (light/dark mode) com persistência e SSR
- **class-variance-authority 0.7.1** - Utilitário para criar variações de componentes TypeScript-safe
- **clsx 2.1.1** - Utilitário para concatenar classes CSS condicionalmente

---

### **🧩 Componentes & UI (Radix UI - 27+ componentes)**

Biblioteca de componentes headless unstyled com acessibilidade A11y integrada:

- **@radix-ui/react-accordion** - Componente acordeão
- **@radix-ui/react-alert-dialog** - Dialog de alerta
- **@radix-ui/react-aspect-ratio** - Proporção de aspecto
- **@radix-ui/react-avatar** - Avatar com fallback
- **@radix-ui/react-checkbox** - Checkbox acessível
- **@radix-ui/react-collapsible** - Conteúdo expansível/colapsável
- **@radix-ui/react-context-menu** - Menu de contexto (clique direito)
- **@radix-ui/react-dialog** - Modal/Dialog
- **@radix-ui/react-dropdown-menu** - Menu dropdown
- **@radix-ui/react-hover-card** - Card ao passar o mouse
- **@radix-ui/react-label** - Label de formulário
- **@radix-ui/react-menubar** - Barra de menu
- **@radix-ui/react-navigation-menu** - Menu de navegação
- **@radix-ui/react-popover** - Popover flutuante
- **@radix-ui/react-progress** - Barra de progresso
- **@radix-ui/react-radio-group** - Radio button group
- **@radix-ui/react-scroll-area** - Área com scroll customizável
- **@radix-ui/react-select** - Select/dropdown customizável
- **@radix-ui/react-separator** - Separador/linha
- **@radix-ui/react-slider** - Slider/range input
- **@radix-ui/react-slot** - Slot para composição de componentes
- **@radix-ui/react-switch** - Toggle switch
- **@radix-ui/react-tabs** - Abas/tabs
- **@radix-ui/react-toast** - Sistema de toast/notificações
- **@radix-ui/react-toggle** - Botão toggle
- **@radix-ui/react-toggle-group** - Grupo de toggles
- **@radix-ui/react-tooltip** - Tooltip com animação

#### **Componentes Especializados**
- **lucide-react 0.454.0** - Biblioteca de ícones SVG (180+ ícones)
- **embla-carousel-react 8.5.1** - Carousel/slider sem dependências
- **react-resizable-panels 2.1.7** - Painéis redimensionáveis com drag-and-drop
- **sonner 1.7.4** - Sistema moderno de toast notifications com suporte a promises
- **cmdk 1.0.4** - Menu de comandos estilo Cmd+K (Vercel)

---

### **📝 Formulários & Validação**

#### **Gerenciamento de Formulários**
- **react-hook-form 7.60.0** - Biblioteca leve para gerenciamento de formulários com performance otimizada
- **@hookform/resolvers 3.10.0** - Resolvedores para integração com Zod, Yup, Joi, etc

#### **Validação de Dados**
- **Zod 3.25.76** - Biblioteca TypeScript-first para validação de schemas com inferência automática

#### **Componentes de Formulário**
- **input-otp 1.4.1** - Input para código OTP/PIN
- **react-day-picker 9.8.0** - Calendar/date picker headless

---

### **📊 Data & Gráficos**

- **Recharts 2.15.4** - Biblioteca de gráficos React (bar, line, pie, area, etc)
- **date-fns 4.1.0** - Utilitários para manipulação e formatação de datas

---

### **📈 Analytics & Performance**

- **@vercel/analytics** - Analytics integrado do Vercel para rastreamento de performance e Web Vitals

---

### **🛠️ Ferramentas de Desenvolvimento**

#### **Tipo & Tipos**
- **@types/node 22.x** - Tipagens TypeScript para Node.js
- **@types/react 19.x** - Tipagens TypeScript para React
- **@types/react-dom 19.x** - Tipagens TypeScript para React-DOM

#### **Linting & Formatação**
- **ESLint** - Linter JavaScript/TypeScript para detectar e corrigir erros de código
  - Script: `npm run lint`

#### **Build & Deploy**
- **Next.js Build System** - Compilação otimizada com SWC (Rust-based)
- **Vercel** - Plataforma de deployment automático (compatível)

---

### **📦 Gerenciador de Pacotes**

- **pnpm** - Package manager rápido e eficiente (alternativa a npm/yarn)
  - Arquivo: `pnpm-lock.yaml` - Lock file para versionamento exato

---

### **⚙️ Configurações**

#### **Arquivos de Configuração**
- **next.config.mjs** - Configuração Next.js (ESM)
- **tailwind.config.ts** - Customização Tailwind CSS
- **tsconfig.json** - Configuração TypeScript (ES6, módulos, paths)
- **postcss.config.mjs** - Configuração PostCSS (plugins, Tailwind, Autoprefixer)
- **components.json** - Configuração para componentes shadcn/ui
- **package.json** - Definição de projeto, dependências, scripts

#### **Scripts Disponíveis**
```bash
npm run dev      # Inicia servidor de desenvolvimento (localhost:3000)
npm run build    # Build para produção
npm start        # Inicia servidor produção
npm run lint     # Executa ESLint
```

---

### **📐 Estrutura de Arquivos - Hooks & Utilities**

- **hooks/use-mobile.ts** - Hook customizado para detectar viewport mobile
- **hooks/use-toast.ts** - Hook para gerenciar notificações toast
- **lib/utils.ts** - Funções utilitárias (cn para merge de classes)

---

### **📊 Resumo de Dependências por Categoria**

| Categoria | Quantidade | Principais |
|-----------|-----------|-----------|
| Radix UI Components | 27 componentes | Dialog, Select, Tabs, Accordion |
| Estilo & CSS | 8 dependências | Tailwind, PostCSS, clsx, CVA |
| Formulários | 3 dependências | React Hook Form, Zod, input-otp |
| UI/Componentes | 5 dependências | Lucide, Sonner, Embla, Recharts |
| Utilitários | 3 dependências | date-fns, clsx, tailwind-merge |
| Temas | 1 dependência | next-themes |
| **Total** | **50+ dependências** | - |

---

## �🚀 Como Executar

### Instalação
```bash
# 1. Clonar/abrir projeto
cd "C:\Users\Gebruiker\Desktop\UTA\4 ano\TECNOLOGIAS WEB\MaddieTavares"

# 2. Instalar dependências
npm install
# ou
pnpm install
```

### Desenvolvimento
```bash
# Executar servidor de desenvolvimento
npm run dev
# ou
pnpm dev

# Acessar em: http://localhost:3000
```

### Build para Produção
```bash
# Fazer build
npm run build

# Executar em produção
npm start
```

### Verificar Código
```bash
# Executar linter
npm run lint
```

---

## 🔧 Configurações Importantes

### `tailwind.config.ts`
Define temas de cores, tipografia e breakpoints responsivos.

### `tsconfig.json`
Configuração TypeScript com `jsx: "react-jsx"` para compatibilidade.

### `next.config.mjs`
- `typescript.ignoreBuildErrors: true` - Ignora erros TS em build
- `images.unoptimized: true` - Otimização de imagens

### `postcss.config.mjs`
Usa `@tailwindcss/postcss` para processar CSS.

---

## 📝 Resumo: Onde Fazer Modificações

| O que quero mudar | Arquivo | Linhas |
|------------------|---------|--------|
| Título principal | `components/hero-section.tsx` | 38-40 |
| Imagem hero | `components/hero-section.tsx` | 27-30 |
| Serviços | `components/featured-services.tsx` | 8-23 |
| Cores/tema | `app/globals.css` | 6-30 |
| Menu | `components/navigation.tsx` | 46-56 |
| Comportamento menu scroll | `components/navigation.tsx` | 23 |
| Novas páginas | Criar em `app/[pagina]/page.tsx` | - |
| Texto branco/preto nav | `components/navigation.tsx` | 22-44 |

---

## 🎓 Dicas de Desenvolvimento

### 1. Teste Responsividade
```bash
# Abra DevTools (F12) no navegador
# Clique em "Toggle device toolbar" (Ctrl+Shift+M)
# Teste em diferentes tamanhos
```

### 2. Estrutura de Breakpoints Tailwind
```tsx
/* Tailwind CSS */
className="text-sm md:text-lg lg:text-2xl"
// sm: 640px | md: 768px | lg: 1024px | xl: 1280px
```

### 3. Componentes UI Prontos
Acesse `components/ui/` para usar componentes já prontos como:
- Button
- Card
- Input
- Form
- Dialog
- Etc.

### 4. Paleta de Cores OKLch
- Mais eficiente que RGB/HSL
- Perceptualmente uniforme
- Melhor para acessibilidade

Formato: `oklch(luminância saturação matiz)`

---

## 📞 Contato & Suporte

Este é um projeto Next.js moderno. Para dúvidas sobre:
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

**Última atualização:** 27 de Novembro de 2025
**Versão:** 1.0.0
