---
name: marca-commente
description: "Aplica el sistema de marca de las nueve marcas de la familia commente.me (commente.me, integram.me, inmmerce, hablecon.app, inmplementa.me, reportam.me, ebanner.me, llmbattle.dev, smlk.me): paleta institucional azul #005278 con un acento por producto, las dos tipografías del sistema (Barlow 700/900 solo en logotipo y títulos, Arial 400/700 en todo el texto), construcción del lockup (ladrillo + logotipo + punto cuadrado), las nueve mascotas, el tema único claro y la superficie noche exclusiva de llmbattle.dev, las reglas de contraste y los seis usos prohibidos. Úsalo al crear o revisar cualquier interfaz, landing, favicon, app icon, email, banner, README, presentación o export de estas marcas; al elegir colores, tipografía o superficies; al escribir el nombre de un producto de la familia; y al generar tokens CSS, JSON, SCSS o preset de Tailwind para estos proyectos."
license: MIT para os tokens e o código; nomes e logotipos das marcas reservados, ver MARCA.md
---

# Marca — família commente.me

Duas fontes, e esta skill é a soma das duas:

- *Guía de la familia commente.me*, **v1.2**, setembro de 2026 (base: manual da marca
  commente.me, maio de 2021). É de onde vêm as duas tipografias, o tema único claro e a
  superfície noche.
- *Design System · Familia de marcas*, 17/09/2026 — em
  `referencias/design-system-familia-v1.pdf`.

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
3. **Fontes** — duas, com fronteira fechada. **Barlow** (Google Fonts, OFL) só em
   logotipo, título e subtítulo, pesos **700 e 900**. **Arial** em todo o texto — corpo,
   interface, rótulo, tabela, botão —, pesos **400 e 700**. Arial é de sistema e não
   carrega. Snippet em `assets/barlow.html`.
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

Detalhe de cada uma — são seis: `referencias/usos-incorretos.md`.

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
| Jade | `#63CB76` | primário, ebanner.me |
| Azul claro | `#7FBBD8` | extensão, reportam.me |
| Gris | `#CCCCCC` | smlk.me, bordas e inativos |

Rosa e guayaba são **funcionais**: erro e aviso. Não servem de acento de marca. Sobre um
fundo rosa o texto vai em tinta `#1A1A1A` — branco sobre rosa dá 3,71:1 e não passa.

## Superfícies

O sistema tem **um tema: claro**.

| papel | valor |
|---|---|
| Fundo | `#FFFFFF` papel |
| Superfície | `#F4F6F7` papel gris |
| Superfície elevada | `#FFFFFF` |
| Borda | `#DDE4E8` |
| Texto | `#1A1A1A` tinta |
| Texto suave | `#5C6D75` |

Nos componentes use as variáveis que trocam com a superfície — `--fundo`, `--superficie`,
`--linha`, `--texto`, `--texto-fraco`, `--erro-texto`, `--marca-ponto` — nunca `--papel`
direto. O `--escenario #0B1C26` é fundo de apresentação e capa, não tema de produto.

## Superfície noche — só llmbattle.dev

**Não existe tema escuro de produto, e não se inventa um.** A única superfície escura da
família é a noche `#2C2B40` de llmbattle.dev, que é cor de marca e não se empresta às
outras oito. Ativa com `data-superficie="noche"`.

Quatro regras: o **ladrillo mantém o azul** `#005278` e ganha borda `#423F63` · o **ponto
passa à lavanda plena** `#9B8CFF`, nunca à versão escura · a **ação vai em lavanda** com
texto em tinta · e o **texto de acento usa `#A59AFF`**, não a lavanda de preenchimento —
`#9B8CFF` sobre a noche elevada dá 4,4:1 e não passa o mínimo de 4,5:1.

Detalhe e tokens: `referencias/superficie-noche.md`.

## Acessibilidade

Texto ≥ 4,5:1 contra o fundo real; 3:1 só em escala de titular. Hit target ≥ 44px.

**Nenhum acento claro faz de cor de texto sobre branco** — amarillo, amarillo inmmerce,
ámbar, jade, azul claro, gris e lavanda. Ou vai como fundo, com o texto em
`var(--sobre-acento)`, ou usa a versão escura. É para isso que cada acento claro tem par.

Dois erros frequentes: texto branco sobre rosa `#FF245E` dá 3,71:1 e **não passa** — sobre
rosa o texto vai em tinta `#1A1A1A` (4,7:1). E rótulo de 10–11px nunca leva cor de acento:
leva tinta sobre um chip do acento.

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
| ebanner.me | `#005278` | `#63CB76` | `#2C9145` | o anunciante |
| llmbattle.dev | `#005278` | `#9B8CFF` | `#7A68E6` | o árbitro |
| smlk.me | `#005278` | `#CCCCCC` | `#8E9296` | o enlaçador |

**Acento escuro** é o valor do ponto quadrado sobre fundo branco, quando o acento é claro
demais para ler em branco.

## Construção do lockup

Quatro peças, sempre nesta ordem: **ladrillo → símbolo → logotipo → ponto**. A unidade é
`x`, o lado do ladrillo. Medidas e o passo a passo de uma marca nova:
`referencias/lockup.md`.

## Hierarquia tipográfica

Duas famílias, fronteiras fechadas. Em CSS: `var(--fonte-display)` nas três primeiras,
`var(--fonte-texto)` no resto.

| uso | família | peso | notas |
|---|---|---|---|
| Título | Barlow | 900 | caixa alta, `letter-spacing: -.03em`, `line-height: .9`–`.95` |
| Subtítulo | Barlow | 700 | `letter-spacing: -.01em` |
| Logotipo | Barlow | 700 | caixa baixa, `letter-spacing: -.02em` |
| Interface | Arial | 400 | 700 para ênfase |
| Texto longo | Arial | 400 | `line-height: 1.4`–`1.45` |
| Rótulo / eyebrow | Arial | 700 | caixa alta, `letter-spacing: .22em` |

**Nunca Arial num logotipo ou título; nunca Barlow num parágrafo ou controle.** Arial não
tem Light nem Medium: o texto vai a 400 e a ênfase a 700.

Botões: grande `17px`, médio `15px`, pequeno `13px`.

## Mascotes

Uma por produto, cada uma com seu ofício — "distintos ofícios, o mesmo olhar". As nove
existem, em `assets/mascotes/<slug>.png`, 512×512 com alfa. A tabela com os ofícios está em
`referencias/marcas.md`.

Fundo transparente, corpo inteiro, sobre branco / papel gris / o ladrillo da própria marca.
A mascote de um produto não aparece na comunicação de outro. E **nunca como logotipo**: não
é favicon, nem app icon, nem avatar — esse lugar é do ladrillo.

## Entrega de arquivos

```
svg/lockup-<marca>-light.svg      logotipo sobre branco
svg/lockup-<marca>-dark.svg       negativo sobre a cor base
svg/lockup-<marca>-onaccent.svg   sobre o acento
svg/icon-<marca>.svg              ladrillo 100×100, raio 22 — favicon, app icon, avatar
svg/family-icons.svg              os nove símbolos juntos
mascotes/<marca>.png              a mascote, 512×512, fundo transparente
```

Os arquivos reais estão em `assets/svg/`, e as mascotes em `assets/mascotes/`. **O
inventário está completo**: as nove marcas têm ladrillo, as três variantes de lockup e
mascote. A procedência de cada arquivo está em `assets/README.md`.

## Estado do manual

*Guía de la familia commente.me*, **v1.2**, setembro de 2026. **Nada pendente de decisão.**

A família tem nove marcas, todas definidas — símbolo, acento e mascote. O que a v1.2
fechou, e que versões anteriores desta skill traziam em aberto:

- **ebanner.me tem cor própria: jade `#63CB76` / `#2C9145`.** O manual v1.0 dava a ela o
  mesmo ámbar de inmplementa.me. O matiz 148° é o único vão real da roda, entre o amarillo
  (80°) e o verde de hablecon.app (202°), então as duas deixaram de depender do símbolo
  para se distinguir.
- **Duas tipografias**, não uma: Barlow só em logotipo e títulos, Arial em todo o texto.
- **Tema único claro.** A escala escura de produto que estava como proposta foi retirada. O
  caso de llmbattle.dev se resolve com superfície de marca — a noche —, não com tema.
- **As nove mascotes existem**, com ofício definido, incluindo ebanner.me (o anunciante) e
  llmbattle.dev (o árbitro).

O que ainda não veio do manual, e é trabalho de design:

- llmbattle.dev não tem página própria. O tratamento dela aqui segue a regra dos acentos
  claros, que é a que a nota de acentos aplica à lavanda.
- As variantes `-dark` e `-onaccent` de ebanner.me e llmbattle.dev foram compostas aqui, a
  partir do `-light`, pela regra dos acentos claros — não vieram desenhadas. Ver
  `assets/README.md`.
