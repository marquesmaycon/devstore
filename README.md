# 🛍️ DevStore

Uma loja virtual moderna desenvolvida com Next.js 15, React 19 e TypeScript, focada em performance e experiência do usuário.

## ✨ Características Principais

- 🚀 **Next.js 15** com Turbopack para builds ultra-rápidas
- ⚛️ **React 19** com as últimas funcionalidades
- 📱 **Estilização** com Tailwind CSS 4
- 🛒 **Carrinho de Compras** com Context API
- 🔍 **Sistema de Busca** funcional
- 🎯 **SEO Otimizado** com metadados dinâmicos
- 🧪 **Testes E2E** com Cypress
- 📊 **TypeScript** para maior segurança de tipos

## 🎨 Interface e Funcionalidades

### 🏠 Página Inicial
- Grid responsivo com produtos em destaque
- Cards de produtos com hover effects
- Loading states personalizados

### 🔍 Sistema de Busca
- Busca em tempo real por produtos
- Resultados filtrados dinamicamente
- Interface intuitiva e rápida

### 🛍️ Páginas de Produto
- URLs SEO-friendly com slugs
- Imagens Open Graph automáticas
- Botão de adicionar ao carrinho

### 🛒 Carrinho de Compras
- Adição de produtos com contexto global
- Prevenção de duplicação de itens
- Contador visual no header

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React com SSR/SSG
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework de estilos

### Ferramentas de Desenvolvimento
- **Turbopack** - Bundler de nova geração
- **Biome** - Linter e formatter
- **ESLint** - Análise estática de código
- **Cypress** - Testes end-to-end

### Validação e Tipagem
- **Zod** - Validação de schemas
- **T3 Env** - Validação de variáveis de ambiente

### UI e Ícones
- **Lucide React** - Biblioteca de ícones
- **Tailwind Merge** - Utilitário para classes CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd devstore

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Iniciar em produção
npm start

# Linting
npm run lint
```

## 🧪 Testes

O projeto inclui testes E2E automatizados com Cypress:

```bash
# Executar testes (certifique-se que o servidor está rodando)
npx cypress open
```

### Cenários de Teste
- ✅ Navegação para página de produto
- ✅ Adição de produtos ao carrinho
- ✅ Prevenção de duplicação no carrinho
- ✅ Busca e adição de produtos
- ✅ Funcionalidade completa do sistema

## 📁 Estrutura do Projeto

```
devstore/
├── app/                    # App Router do Next.js
│   ├── (store)/           # Grupo de rotas da loja
│   ├── api/               # API Routes
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
├── context/              # Context APIs (carrinho)
├── cypress/              # Testes E2E
├── data/                 # Tipos e utilitários de dados
└── public/               # Assets estáticos
```

## 🎯 Funcionalidades Implementadas

### ✅ Core Features
- [x] Listagem de produtos
- [x] Página de detalhes do produto
- [x] Sistema de carrinho de compras
- [x] Busca de produtos
- [x] SEO otimizado

### ✅ Performance e DX
- [x] Turbopack para builds rápidas
- [x] TypeScript para type safety
- [x] Componentes Server/Client otimizados
- [x] Loading states
- [x] Testes automatizados

## 🌟 Destaques Técnicos

### Performance
- ⚡ **Turbopack** para builds até 10x mais rápidas
- 🎯 **Server Components** para reduzir JavaScript no cliente
- 📦 **Code Splitting** automático
- 🖼️ **Otimização de imagens** com Next.js Image

### Qualidade de Código
- 🔒 **TypeScript** em todo o projeto
- 🎨 **Biome** para formatação consistente
- ✅ **Testes E2E** com Cypress
- 📏 **ESLint** para padronização

### Experiência do Desenvolvedor
- 🔄 **Hot Reload** ultrarrápido
<!-- - 📱 **Mobile-first** design -->
- 🎭 **Estados de loading** suaves
- 🛡️ **Validação de tipos** rigorosa

## 🔮 Próximos Passos

- [ ] Reviews e avaliações
- [ ] Responsividade
- [ ] Tamanho dos itens no carrinho

---

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)

  ### Feito com ❤️ e muita 🎵
</div>