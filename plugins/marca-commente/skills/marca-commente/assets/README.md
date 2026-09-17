# assets/

Arquivos prontos para copiar no projeto. Baixados do artifact
<https://claude.ai/artifact/FFAEEvu5HrsfmPJQWt55p1> em 17/09/2026.

| arquivo | o que é |
|---|---|
| `tokens.json` | **fonte da verdade.** Paleta, tipografia, geometria e as nove marcas |
| `tokens.css` | custom properties + `[data-marca="<slug>"]` + tema escuro (`[data-tema]` e `prefers-color-scheme`) + classes `.marca`, `.marca__ponto`, `.ladrillo`, `.sobre-cor`, `.sobre-acento` |
| `tokens.scss` | variáveis Sass + mapa `$marcas` + função `marca($slug, $token)` — **gerado** |
| `tailwind.preset.js` | preset com cores, pesos, tracking e `rounded-ladrillo` — **gerado** |
| `gerar.mjs` | regenera `tokens.scss` e `tailwind.preset.js` a partir de `tokens.json` |
| `barlow.html` | snippet do Google Fonts + favicon |
| `svg/` | lockups, ladrillos e a grade de construção |

Mexeu em cor ou marca? Edite **só** `tokens.json` e rode:

```sh
node ~/.claude/skills/marca-commente/assets/gerar.mjs
```

`tokens.css` é escrito à mão (tem as classes de componente) — atualize junto.

## Uso no projeto

```html
<html data-marca="reportam">          <!-- marca do projeto -->
<html data-marca="reportam" data-tema="escuro">   <!-- força o tema; sem isso segue o sistema -->
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="icon" type="image/svg+xml" href="/svg/icon-reportam.svg">
```

```js
// tailwind.config.js
module.exports = { presets: [require('./tailwind.preset.js')] }
// depois: bg-marca-reportam-base, text-azul, bg-escuro-superficie, rounded-ladrillo
```

## Inventário de `svg/`

| marca | ladrillo | lockup light | lockup dark | lockup onaccent |
|---|---|---|---|---|
| commente | ✅ | ✅ | ✅ | ✅ |
| integram | ✅ | ✅ | — | — |
| inmmerce | ✅ | ✅ | — | — |
| hablecon | ✅ | ✅ | — | — |
| inmplementa | ✅ | ✅ | — | — |
| reportam | ✅ | ✅ | — | — |
| llmbattle | ✅ | ✅ | — | — |
| smlk | ✅ | ✅ | — | — |
| **ebanner** | — | — | — | — |

Mais: `family-icons.svg` e `family-icons-dark.svg` (oito ladrillos — falta ebanner) e
`grade-construcao.svg` (a grade do capítulo 02, com as cotas).

**O que falta:** as variantes `-dark` e `-onaccent` só existem para commente.me, e
**ebanner.me não tem nenhum arquivo** — ela é membro oficial desde 17/09/2026, mas o
artifact de origem trazia só oito marcas, então nem o ladrillo dela nem o lugar dela em
`family-icons.svg` existem ainda. Para as outras marcas sobre fundo colorido, componha a
partir do `-light` aplicando a regra de tratamento em `referencias/marcas.md`.

## Conferência de cores

Todo hex que aparece nos SVGs está em `tokens.json` — verificado arquivo por arquivo. Os
lockups de acento claro já trazem o ponto na versão escura (`#D9843A`, `#2E86AE`,
`#7A68E6`, `#8E9296`), como o manual manda.
