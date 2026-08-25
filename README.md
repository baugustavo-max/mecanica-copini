# Site — Mecânica Copini (Capanema - PR)

Site institucional em HTML/CSS/JS puro (sem frameworks, sem instalação de dependências).

## Estrutura de pastas

```
mecanica-copini/
├── index.html        → conteúdo e estrutura do site
├── css/
│   └── style.css      → todo o visual (cores, fontes, responsivo)
├── js/
│   └── script.js       → menu mobile e geração dos links de WhatsApp
└── README.md
```

## Antes de publicar — ajuste obrigatório

Abra `js/script.js` e troque a linha abaixo pelo número real de WhatsApp da oficina
(DDI + DDD + número, somente dígitos, sem espaço, traço ou parênteses):

```js
const WHATSAPP_NUMBER = "5546999999999"; // <-- SUBSTITUA
```

Exemplo real: `554699887766`.

## Testar localmente antes de publicar

Com o Python instalado, dentro desta pasta:

```
python -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador.

## Publicar (GitHub Pages)

1. Crie um repositório público no GitHub chamado `mecanica-copini`.
2. Nesta pasta, no terminal do VS Code:

```
git init
git add .
git commit -m "Primeira versão do site Mecânica Copini"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/mecanica-copini.git
git push -u origin main
```

3. No GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. Em 1–2 minutos o site fica no ar em:
   `https://SEU-USUARIO.github.io/mecanica-copini/`

## Atualizar o site depois de publicado

Edite os arquivos normalmente no VS Code, salve, e rode:

```
git add .
git commit -m "Descreva o que mudou"
git push
```

A URL não muda — a atualização aparece automaticamente em cerca de 1 minuto.

## O que editar em cada arquivo

- **Textos, seções, endereço, horário** → `index.html`
- **Cores, fontes, espaçamentos, responsivo** → `css/style.css`
- **Número de WhatsApp, mensagens automáticas, menu mobile** → `js/script.js`
