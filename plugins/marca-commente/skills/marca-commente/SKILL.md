---
name: marca-commente
description: "Aplica el sistema de marca de las nueve marcas de la familia commente.me (commente.me, integram.me, inmmerce, hablecon.app, inmplementa.me, reportam.me, ebanner.me, llmbattle.dev, smlk.me): paleta institucional azul #005278 con un acento por producto, tipografía Barlow, construcción del lockup (ladrillo + logotipo + punto cuadrado), escalas de superficie clara y oscura con las cuatro reglas del tema oscuro, favicons y los siete usos prohibidos. Úsalo al crear o revisar cualquier interfaz, landing, favicon, app icon, email, banner, README, presentación o export de estas marcas; al elegir colores, tipografía, superficies de tema claro u oscuro, o al escribir el nombre de un producto de la familia; y al generar tokens CSS, JSON, SCSS o preset de Tailwind para estos proyectos."
license: MIT para os tokens e o código; nomes e logotipos das marcas reservados, ver MARCA.md
---

# Marca — família commente.me

Duas fontes, e esta skill é a soma das duas:

- *Guía de la familia commente.me*, v1.0, setembro de 2026 (base: manual da marca
  commente.me, maio de 2021) — o artifact
  <https://claude.ai/artifact/FFAEEvu5HrsfmPJQWt55p1>.
- *Design System · Familia de marcas*, v1.0, 17/09/2026 — em
  `referencias/design-system-familia-v1.pdf`. É de onde vêm a escala de superfícies, o tema
  escuro e o sétimo erro.

O manual é para humano ver; a skill é para o código sair certo.

## Princípio

**Uma forma. Ser mais e mais simples.** Nove produtos, um só universo. Muda o símbolo e
muda o acento — a estrutura nunca muda. Azul `#005278` é o piso comum: mesmo ladrillo,
mesmo logotipo em Barlow, um acento próprio por produto.

Duas marcas são exceção e entraram no universo com identidade já formada: **integram.me** e
**inmmerce** mantêm cor e isologo próprios; só o logotipo se compõe em Barlow para falar o
idioma da família.

## O que usar, na ordem

1. **Tokens** — copie `assets/tokens.css` (ou `tokens.json`, `tokens.scss`,
   `tailwind.preset.js`) para o projeto e use as variáveis. Nunca escreva o hex solto no
   componente.
2. **Marca do projeto** — defina `data-marca="<slug>"` no `<html>` e o resto dos tokens se
   resolve. Slugs: `commente`, `integram`, `inmmerce`, `hablecon`, `inmplementa`,
   `reportam`, `ebanner`, `llmbattle`, `smlk`.
3. **Fonte** — Barlow, do Google Fonts (licença OFL), pesos 300/500/700/900. Snippet em
   `assets/barlow.html`. É a única tipografia do universo.
4. **Símbolos** — os SVGs reais estão em `assets/svg/`. Lockups já em curvas: não dependem
   de Barlow instalada.

## Regras que valem sempre

| regra | valor |
|---|---|
| Nome do produto | **sempre em caixa baixa**: `commente.me`, nunca `Commente.me` |
| O ponto do nome | quadrado de 17% do corpo, na cor de acento — nunca o ponto redondo do teclado |
| Tipografia do logotipo | Barlow Bold, caixa baixa, tracking −2% |
| Sobre branco | logotipo na cor base da marca |
| Sobre cor própria | acento pleno → logotipo em **branco**; acento claro → logotipo na **cor base**, nunca em branco |
| Fundos de cor | só em caso de extrema necessidade |
| Isologo de integram.me e inmmerce | não se recolore |
| Acento de um produto | nunca vai no ladrillo de outro |

Detalhe de cada uma — são sete, com a do tema escuro: `referencias/usos-incorretos.md`.

## Paleta institucional

| nome | hex | papel |
|---|---|---|
| Azul | `#005278` | institucional, toda a família |
| Verde | `#40B0B8` | primário, hablecon.app |
| Amarillo | `#FFBD38` | primário, commente.me |
| Rosa | `#FF245E` | funcional: erros e alertas |
| Guayaba | `#FF5757` | funcional: avisos |
| Lavanda | `#9B8CFF` | extensão, llmbattle.dev |
| Ámbar | `#F2A65A` | extensão, inmplementa.me |
| Naranja | `#F59331` | extensão, ebanner.me — **proposta v1.1** |
| Azul claro | `#7FBBD8` | extensão, reportam.me |
| Gris | `#CCCCCC` | smlk.me, bordas e inativos |

Rosa e guayaba são **funcionais**: erro e aviso. Não servem de acento de marca. Sobre
superfície escura o rosa sobe para `#FF6C8E` no texto; a borda segue em `#FF245E`.

## Superfícies

| papel | claro (fechado) | escuro (proposta) |
|---|---|---|
| Fundo | `#FFFFFF` papel | `#0B1C26` escenario — fechado |
| Superfície | `#F4F6F7` papel gris | `#12303D` |
| Superfície elevada | `#FFFFFF` | `#173A49` |
| Borda | `#DDE4E8` | `#245265` |
| Texto | `#1A1A1A` tinta | `#E8F1F5` |
| Texto suave | `#5C6D75` | `#9DB6C2` |

Nos componentes use as variáveis que trocam com o tema — `--fundo`, `--superficie`,
`--linha`, `--texto`, `--texto-fraco`, `--erro-texto`, `--marca-ponto` — nunca `--papel`
nem `--escenario` direto.

## Tema escuro — proposta

Quatro regras, e nada além delas muda: **o azul sai do fundo** (superfícies vêm da escala
neutra, o azul vira realce), **o acento leva a ação** (botão primário em acento pleno), **o
ponto usa o acento claro** (no escuro volta ao acento pleno, sem a versão escura) e **o
ladrillo não se clareia** (mantém a base, ganha borda de 1px em `#245265`).

A escala escura aguarda aprovação: marque como proposta em qualquer entrega. Detalhe e
diagnóstico em `referencias/tema-escuro.md`.

## Por marca

A tabela completa — base, acento, acento escuro, secundários, tratamento e mascote — está
em `referencias/marcas.md`. Resumo:

| marca | base | acento | acento escuro | mascote |
|---|---|---|---|---|
| commente.me | `#005278` | `#FFBD38` | — | o gato-peixe |
| integram.me | `#2A2438` | `#FF41B4` | — | o polvo |
| inmmerce | `#3F3D56` | `#F6C92D` | — (sem ponto) | o formado |
| hablecon.app | `#005278` | `#40B0B8` | — | o operador |
| inmplementa.me | `#005278` | `#F2A65A` | `#D9843A` | o mestre |
| reportam.me | `#005278` | `#7FBBD8` | `#2E86AE` | o analista |
| ebanner.me | `#005278` | `#F59331` | `#B85F0E` | pendente |
| llmbattle.dev | `#005278` | `#9B8CFF` | `#7A68E6` | pendente |
| smlk.me | `#005278` | `#CCCCCC` | `#8E9296` | o enlaçador |

**Acento escuro** é o valor do ponto quadrado sobre fundo branco, quando o acento é claro
demais para ler em branco.

## Construção do lockup

Quatro peças, sempre nesta ordem: **ladrillo → símbolo → logotipo → ponto**. A unidade é
`x`, o lado do ladrillo. Medidas e o passo a passo de uma marca nova:
`referencias/lockup.md`.

## Hierarquia tipográfica

| uso | peso | notas |
|---|---|---|
| Título | Black 900 | caixa alta, `letter-spacing: -.03em`, `line-height: .9`–`.95` |
| Subtítulo | Bold 700 | |
| Interface | Medium 500 | |
| Texto longo | Light 300 | `line-height: 1.4`–`1.45` |
| Rótulo / eyebrow | Bold 700 | caixa alta, `letter-spacing: .22em` |

Botões: grande `17px`, médio `15px`, pequeno `13px`.

## Entrega de arquivos

```
svg/lockup-<marca>-light.svg      logotipo sobre branco
svg/lockup-<marca>-dark.svg       negativo sobre a cor base
svg/lockup-<marca>-onaccent.svg   sobre o acento
svg/icon-<marca>.svg              ladrillo 100×100, raio 22 — favicon, app icon, avatar
svg/family-icons.svg              os nove símbolos juntos
```

Os arquivos reais estão em `assets/svg/`. O inventário — e o que ainda falta — está em
`assets/README.md`: as nove marcas têm ladrillo e lockup `-light`, e só commente.me tem as
três variantes. Para as outras sobre fundo colorido, componha a partir do `-light`
seguindo o tratamento em `referencias/marcas.md`.

## Estado do manual

A família tem **nove** marcas. O PDF de 16/09/2026 lista ebanner.me e o artifact da mesma
data lista llmbattle.dev no lugar dela; em 17/09/2026 a titularidade da marca decidiu que
**as duas entram**. Esta skill é a fonte mais completa — o artifact mostra oito, e o design system de
17/09 ainda marca as duas como "provisional", o que essa decisão já superou.

Em 17/09/2026 ebanner.me ganhou isologo, lockup e lugar em `family-icons.svg`, e com eles
um acento próprio: o naranja `#F59331` / `#B85F0E`. É **proposta para a v1.1** — o manual
v1.0 dava a ela o mesmo ámbar de inmplementa.me, e duas marcas definidas não dividem
acento. Implementado nos tokens e marcado como proposta até a titularidade aprovar.

Falta, e é trabalho de design, não de decisão:

- llmbattle.dev não tem página própria no manual. O tratamento dela aqui segue a regra dos
  acentos claros, que é a que a nota de acentos do manual aplica à lavanda.
- ebanner.me e llmbattle.dev seguem sem mascote.
- As variantes `-dark` e `-onaccent` de lockup só existem para commente.me.
- A escala escura de superfícies é proposta, à espera de aprovação.
- O naranja de ebanner.me é proposta, à espera de aprovação.
