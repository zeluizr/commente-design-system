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

| marca | ladrillo | lockup light | lockup dark | lockup onaccent | mascote |
|---|---|---|---|---|---|
| commente | ✅ | ✅ | ✅ | ✅ | ✅ |
| integram | ✅ | ✅ | ✅ | ✅ | ✅ |
| inmmerce | ✅ | ✅ | ✅ | ✅ | ✅ |
| hablecon | ✅ | ✅ | ✅ | ✅ | ✅ |
| inmplementa | ✅ | ✅ | ✅ | ✅ | ✅ |
| reportam | ✅ | ✅ | ✅ | ✅ | ✅ |
| ebanner | ✅ | ✅ | ✅ | ✅ | ✅ |
| llmbattle | ✅ | ✅ | ✅ | ✅ | — |
| smlk | ✅ | ✅ | ✅ | ✅ | ✅ |

**O inventário está completo**: as nove marcas têm ladrillo e as três variantes de lockup.
Só a mascote de llmbattle.dev ainda não existe.

Mais: `family-icons.svg` e `family-icons-dark.svg` (os nove ladrillos, na ordem de
`referencias/marcas.md`) e `grade-construcao.svg` (a grade do capítulo 02, com as cotas).

## Procedência dos arquivos

As variantes `-dark` e `-onaccent` de integram, inmmerce, hablecon, inmplementa, reportam
e smlk vieram do bundle do Claude Design importado em 17/09/2026, junto com as mascotes.

Duas exceções, geradas aqui e não desenhadas:

- **ebanner.me** — o bundle trazia as três variantes em ámbar e com o ladrillo antigo
  (`x=22 y=26 w=56 h=48`). O documento mais novo do mesmo bundle já usa o ladrillo
  `x=24 y=28 w=52 h=44` e o acento verde, então o que valeu foi o documento: mantivemos a
  geometria e recolorimos. O lockup foi composto a partir dos glifos de Barlow já em
  curvas dos lockups normativos, com a métrica deles — `viewBox 0 0 506 100` e ponto em
  `x=257,08`, exatamente os valores que o lockup oficial do bundle confirma.
- **llmbattle.dev** — o bundle não traz nenhum SVG dela. As variantes `-dark` e
  `-onaccent` saíram do `-light` pela regra dos acentos claros, a mesma que reportam segue.

## Mascotes

`mascotes/<slug>.png` — 512×512, fundo transparente, PNG de cor plena. Os originais do
bundle são 1254×1254 e somam 9,2 MB; aqui somam 1,8 MB. A redução é só de dimensão, sem
quantização de cor: no tamanho em que as mascotes aparecem (cerca de 150 px), 512 cobre
3× retina.

## Conferência de cores

Todo hex que aparece nos SVGs está em `tokens.json` — verificado arquivo por arquivo. Os
lockups de acento claro já trazem o ponto na versão escura (`#D9843A`, `#2E86AE`,
`#7A68E6`, `#8E9296`), como o manual manda.
