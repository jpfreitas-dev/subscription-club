# Encantos Literários - Clube de Assinatura

Landing page responsiva de um clube de assinatura de livros, desenvolvida como projeto pessoal com foco em **animações CSS e interações visuais leves**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## Sobre

Projeto criado durante o curso Fullstack da [Rocketseat](https://www.rocketseat.com.br/), focando em:

- Animações e transições CSS com suporte a interações JavaScript pontuais
- CSS Nesting nativo
- Layout responsivo mobile-first para mobile, tablet e desktop
- Custom properties para design tokens
- Acessibilidade básica para teclado e redução de movimento

## Destaques de animação

- **Hero:** texto e ícones aparecem em sequência ao hover
- **Kit mensal:** itens revelados com efeito de escala e translate ao hover
- **Pricing:** cards laterais deslizam com rotação ao passar o mouse no container
- **Botão "Assinar":** efeito ripple com pseudo-elemento
- **Rolagem:** seções aparecem suavemente conforme entram na tela
- **Touch e teclado:** kit mensal e planos possuem estados alternativos para dispositivos sem hover
- **Acessibilidade:** foco visível e suporte a `prefers-reduced-motion`

## Funcionalidades visuais

- Hero com composição temática e entrada animada.
- Kit mensal com elementos explicativos e interação por hover, toque ou teclado.
- Planos mensal, semestral e anual com destaque para o plano popular.
- Cards de planos adaptados para navegação horizontal em telas pequenas.
- Rodapé responsivo com links e redes sociais.
- Rolagem suave entre o botão de assinatura e os planos.

## Demonstração

As capturas abaixo apresentam a página na ordem em que o conteúdo aparece, do topo ao final:

![Hero e apresentação do clube](assets/screenshot1.png)

![Kit mensal](assets/screenshot2.png)

![Planos de assinatura e rodapé](assets/screenshot3.png)

## Como rodar
- Basta abrir o `index.html` no navegador — não há dependências ou build necessário.
- O JavaScript utilizado está em `scripts/main.js` e é carregado diretamente pelo HTML.
- Ou [clicar neste link](https://jpfreitas-dev.github.io/subscription-club/)

## Estrutura

```
├── index.html
├── scripts/
│   └── main.js             # interações visuais e revelação por rolagem
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

## Status do projeto

Concluído como landing page estática de estudo, com responsividade, animações e interações visuais implementadas.

## Limitações

- Os botões de assinatura ainda não possuem checkout ou integração com pagamentos.
- Os links de conteúdo, suporte e redes sociais são demonstrativos.
- O projeto não possui backend, autenticação ou persistência de dados.
