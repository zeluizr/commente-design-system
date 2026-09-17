# Tema escuro — **proposta**

Origem: *Design System · Familia de marcas*, v1.0, gerado pelo Claude Design em
17/09/2026. O manual da marca fecha **só** o `escenario #0B1C26`. Tudo o mais nesta página
é proposta à espera de aprovação: até lá, marque como proposta em qualquer entrega.

## O diagnóstico

No tema escuro o azul institucional `#005278` **não pode ser superfície de card**. Sobre o
escenario ele fica a poucos pontos de luminância do fundo — vira uma massa azul, o card
perde a borda e o acento desaparece. No escuro o azul deixa de ser fundo e passa a ser
realce: a superfície vem da escala neutra e o CTA passa ao acento da marca.

## As duas escalas

| papel | claro (fechado) | escuro (proposta) |
|---|---|---|
| Fundo | `#FFFFFF` papel | `#0B1C26` escenario — **fechado pelo manual** |
| Superfície | `#F4F6F7` papel gris | `#12303D` |
| Superfície elevada | `#FFFFFF` | `#173A49` |
| Borda | `#DDE4E8` | `#245265` |
| Texto | `#1A1A1A` tinta | `#E8F1F5` |
| Texto suave | `#5C6D75` | `#9DB6C2` |

## As quatro regras

Ao passar de claro para escuro, muda isto — e nada além disto.

| # | regra | o que significa |
|---|---|---|
| 01 | **O azul sai do fundo** | As superfícies vêm da escala neutra. O azul fica como realce: bordas, ícones, estados. |
| 02 | **O acento leva a ação** | O botão primário passa a acento pleno, com texto em tinta ou em branco conforme o acento. |
| 03 | **O ponto usa o acento claro** | No escuro não se usa a versão escura do acento: o ponto volta ao acento pleno. |
| 04 | **O ladrillo não se clareia** | Mantém a cor base e ganha borda de 1px em `#245265` para se descolar do escenario. |

A regra 03 é a que mais surpreende: `#D9843A`, `#2E86AE`, `#7A68E6` e `#8E9296` existem
**só** para o ponto sobre fundo branco. No escuro voltam `#F2A65A`, `#7FBBD8`, `#9B8CFF` e
`#CCCCCC`.

## Cor funcional no escuro

Sobre superfície escura o rosa funcional sobe para `#FF6C8E` **no texto**; a borda do campo
com erro segue em `#FF245E`. Guayaba `#FF5757` não muda.

## Nos tokens

`assets/tokens.css` já implementa as quatro regras. O tema segue
`prefers-color-scheme` e aceita override explícito:

```html
<html data-marca="llmbattle" data-tema="escuro">
```

As variáveis que trocam com o tema são `--fundo`, `--superficie`, `--superficie-2`,
`--linha`, `--texto`, `--texto-fraco`, `--erro-texto`, `--ladrillo-borda` e
`--marca-ponto`. Use essas nos componentes — nunca `--papel` ou `--escenario` direto, ou o
componente fica preso a um tema.

## Tamanhos de botão

Do design system: grande `17px`, médio `15px`, pequeno `13px`.
