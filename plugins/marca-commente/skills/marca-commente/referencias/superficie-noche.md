# Superfície noche — só llmbattle.dev

O sistema tem **um tema: claro**. Fundo papel, texto tinta, superfícies da escala neutra.
Não existe tema escuro de produto, e não se deve inventar um.

A noche é outra coisa: é a **superfície própria de uma marca**. llmbattle.dev é a única da
família que vive sobre fundo escuro, porque o contexto dela é técnico — compara-se modelo,
lê-se código, olha-se por muito tempo. Não se aplica aos outros oito produtos.

```html
<html data-marca="llmbattle" data-superficie="noche">
```

## Os tokens

| token | valor | uso | contraste |
|---|---|---|---|
| `--noche` | `#2C2B40` | fundo de página | — |
| `--noche-elevada` | `#35334B` | cards e painéis | — |
| `--noche-borde` | `#423F63` | bordas e divisores | — |
| `--noche-texto` | `#F1F1FA` | texto | 12,3:1 sobre a noche |
| `--noche-texto-suave` | `#AFAEC7` | texto secundário | 5,6:1 sobre a elevada |
| `--noche-acento-texto` | `#A59AFF` | texto de acento | 5,0:1 sobre a elevada |

Matiz 287° — o mesmo da lavanda — e luminosidade 0,30: bem mais claro que um preto, para o
ladrillo azul não afundar no fundo.

## As quatro regras

1. **O ladrillo mantém o azul.** Fica em `#005278` e ganha borda `#423F63` para se descolar
   do fundo. Não se clareia.
2. **O ponto passa à lavanda plena** `#9B8CFF`, nunca à versão escura `#7A68E6`. A versão
   escura existe para o ponto sobre branco; aqui o fundo já é escuro.
3. **A ação vai em lavanda**, com o texto do botão em tinta `#1A1A1A`.
4. **O texto de acento usa `#A59AFF`**, não a lavanda de preenchimento. `#9B8CFF` sobre a
   noche elevada dá 4,4:1 e não passa o mínimo de 4,5:1 — por três décimos.

A regra 4 é a que mais se erra: a mesma lavanda serve de preenchimento e não serve de
texto. São dois tokens diferentes de propósito.

## Histórico

Até 17/09/2026 este arquivo descrevia uma **escala escura de produto** — `#12303D`,
`#173A49`, `#245265`, `#E8F1F5`, `#9DB6C2` — que era proposta e nunca foi aprovada. A v1.2
do manual fechou tema único claro e resolveu o caso de llmbattle.dev com superfície de
marca, não com tema. Os valores antigos ficam no histórico do git, no arquivo
`referencias/tema-escuro.md` até o commit anterior.
