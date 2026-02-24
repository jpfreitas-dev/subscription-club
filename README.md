# Encantos Literários - Clube de Assinatura

Landing page de um clube de assinatura de livros, desenvolvida como projeto pessoal com foco em **animações CSS**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## Sobre

Projeto criado durante o curso Fullstack da [Rocketseat](https://www.rocketseat.com.br/), focando em:

- Animações e transições CSS puras (sem JavaScript)
- CSS Nesting nativo
- Layout responsivo (mobile, tablet e desktop)
- Custom properties para design tokens

## Destaques de animação

- **Hero:** texto e ícones aparecem em sequência ao hover
- **Kit mensal:** itens revelados com efeito de escala e translate ao hover
- **Pricing:** cards laterais deslizam com rotação ao passar o mouse no container
- **Botão "Assinar":** efeito ripple com pseudo-elemento

## Como rodar
- Basta abrir o `index.html` no navegador — não há dependências ou build necessário.
- Ou [clicar neste link](https://jpfreitas-dev.github.io/subscription-club/)

## Estrutura

```
├── index.html
├── assets/
│   ├── background/
│   ├── book-kit/
│   ├── footer/
│   └── mystery-images/
└── styles/
    ├── index.css        # imports
    ├── global.css       # reset, variáveis e estilos base
    ├── hero.css
    ├── book-kit.css
    ├── pricing.css
    └── footer.css
```
