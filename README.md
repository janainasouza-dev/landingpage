# 🚀 Landing Page - Janaina Souza

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3)
![Responsive](https://img.shields.io/badge/Responsive-Yes-00C853?style=flat)

> Portfólio profissional desenvolvido em React com arquitetura componentizada e design responsivo.

## 📸 Preview

![Landing Page Preview](public/assets/images/preview.png)

## ✨ Demonstração

🔗 **[Ver Demo](https://seu-usuario.github.io/landingpage)** *(em breve)*

---

## 📋 Sobre o Projeto

Landing page de portfólio desenvolvida para apresentar meus projetos, habilidades e experiência como Desenvolvedora Full Stack. O projeto foi construído com foco em:

- **Arquitetura limpa e organizada**
- **Componentes reutilizáveis**
- **Design responsivo e moderno**
- **Performance e acessibilidade**

### 🎯 Seções

- **Header**: Navegação fixa com scroll suave
- **Hero**: Apresentação principal com call-to-action
- **Sobre**: Resumo profissional e estatísticas
- **Projetos**: Cards interativos com tecnologias utilizadas
- **Habilidades**: Tecnologias organizadas por categoria
- **Contato**: Chamada para ação com e-mail
- **Footer**: Links para redes sociais

---

## 🛠️ Tecnologias Utilizadas

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Ferramentas
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

## 📂 Estrutura do Projeto

```

├── Dockerfile                 # Receita para criar container Docker
├── docker-compose.yml         # Orquestração do Docker
├── .dockerignore              # Arquivos ignorados pelo Docker
├── .gitignore                 # Arquivos ignorados pelo Git
├── index.html                 # Página principal (entry point)
├── package.json               # Dependências e scripts
├── package-lock.json          # Versões exatas das dependências
├── vite.config.js             # Configuração do Vite
├── README.md                  # Documentação do projeto
│
├── public/                    # Arquivos estáticos
│   └── assets/
│       ├── images/
│       │   ├── projetos/
│       │   │   ├── padaria-wecoffe.jpg
│       │   │   └── sistema-manutencao.jpg
│       │   └── icons/
│       └── docs/
│           └── curriculo.pdf
│
├── src/                       # Código fonte (coração do projeto)
│   ├── main.jsx               # Ponto de entrada do React
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos globais básicos
│   │
│   ├── components/            # Componentes React
│   │   ├── common/            # Componentes reutilizáveis
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   │
│   │   ├── layout/            # Componentes estruturais
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── sections/          # Seções da página
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   ├── Sobre.jsx
│   │   │   ├── Sobre.css
│   │   │   ├── Projetos.jsx
│   │   │   ├── Projetos.css
│   │   │   ├── Habilidades.jsx
│   │   │   ├── Habilidades.css
│   │   │   ├── Contato.jsx
│   │   │   └── Contato.css
│   │   │
│   │   └── ui/                # Componentes de interface
│   │       ├── ProjectCard.jsx
│   │       ├── ProjectCard.css
│   │       ├── SocialIcon.jsx
│   │       └── SocialIcon.css
│   │
│   ├── constants/             # Dados estáticos
│   │   ├── projetos.js
│   │   └── habilidades.js
│   │
│   ├── hooks/                 # Custom Hooks
│   │   └── useScrollTo.js
│   │
│   └── styles/                # Estilos globais
│       ├── global.css
│       └── variables.css
│
└── dist/                      # Build para produção (criado com npm run build)
    ├── index.html
    ├── assets/
    │   ├── index-xxxxx.js
    │   └── index-xxxxx.css
    └── ...

```



## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/landingpage.git
cd landingpage

    Instale as dependências

bash

npm install

    Inicie o servidor de desenvolvimento

bash

npm start

    Abra no navegador

text

http://localhost:3000

Build para Produção
bash

npm run build

Os arquivos otimizados serão gerados na pasta build/.
🎨 Personalização
Alterar Cores

Edite o arquivo src/styles/variables.css:
css

:root {
  --primary-color: #6C63FF;    /* Cor principal */
  --primary-dark: #5a52d5;     /* Cor principal escura */
  --secondary-color: #764ba2;  /* Cor secundária */
  /* ... outras cores */
}

Adicionar Projetos

Edite src/constants/projetos.js:
javascript

export const projetos = [
  {
    id: 3,
    title: "🚀 Novo Projeto",
    description: "Descrição do seu novo projeto...",
    image: "/assets/images/projetos/novo-projeto.jpg",
    tags: ['React', 'Node.js', 'Docker'],
    demoLink: "#",
    codeLink: "#"
  }
];

Adicionar Habilidades

Edite src/constants/habilidades.js:
javascript

export const habilidades = [
  {
    nome: "Nova Categoria",
    items: ["Tecnologia 1", "Tecnologia 2"]
  }
];

Atualizar Informações Pessoais

Edite os textos nos componentes da pasta src/components/sections/:

    Hero.jsx: Apresentação principal

    Sobre.jsx: Texto sobre você

    Contato.jsx: Informações de contato

🌐 Deploy
GitHub Pages

    Instale o pacote:

bash

npm install gh-pages --save-dev

    Adicione ao package.json:

json

"homepage": "https://seu-usuario.github.io/landingpage",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

    Deploy:

bash

npm run deploy

Vercel
bash

npm install -g vercel
vercel

Netlify

Faça upload da pasta build/ ou conecte seu repositório GitHub.
📱 Responsividade

O projeto é totalmente responsivo e se adapta a:

    📱 Mobile: 320px - 480px

    📱 Tablet: 481px - 768px

    💻 Desktop: 769px - 1200px

    🖥️ Widescreen: 1201px+

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
👩‍💻 Autora

Janaina Souza

    🔗 LinkedIn

    🐙 GitHub

    ✉️ E-mail

🙏 Agradecimentos

    React

    Create React App

    Emoji Cheat Sheet

📞 Suporte

Se você tiver alguma dúvida ou sugestão, abra uma issue ou entre em contato.