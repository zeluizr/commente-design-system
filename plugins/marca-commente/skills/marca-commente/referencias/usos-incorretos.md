# O que rompe o sistema

Sete formas: as seis do manual e a sétima que o design system acrescentou ao
fechar o tema escuro. As duas primeiras são as mais frequentes.

| ✕ | erro | correto |
|---|---|---|
| 1 | Escrever o nome com maiúscula inicial | Toda a família é caixa baixa: `commente.me`, `hablecon.app`, `smlk.me` |
| 2 | Usar o ponto redondo do teclado no lugar do quadrado de acento | Quadrado de 17% do corpo, na cor de acento |
| 3 | Trocar a tipografia do logotipo | Barlow Bold, sempre |
| 4 | Recolorir o isologo de integram.me ou de inmmerce | Identidade própria: isologo intocado |
| 5 | Aplicar o acento de um produto no ladrillo de outro | Um acento por produto, e só nele |
| 6 | Pôr o logotipo em azul sobre fundo de cor | Vai em branco — exceto acento claro, que mantém a cor base |
| 7 | No tema escuro, usar o azul institucional como superfície | O azul é realce, não fundo: a superfície vem da escala neutra |

## Checklist de revisão

Ao revisar uma interface, um export ou um README de qualquer marca da família:

- [ ] O nome aparece em caixa baixa em **todo** lugar — inclusive em `<title>`, em
      `og:title`, no `package.json` e nos textos de botão.
- [ ] O ponto do nome é quadrado, não `.`.
- [ ] Os hex vêm de token, não estão soltos no componente.
- [ ] Barlow está carregada com os pesos que a tela usa, e só com esses.
- [ ] O acento é o da marca do projeto, não o de uma marca vizinha.
- [ ] O ponto sobre branco usa a versão escura, se o acento for claro.
- [ ] Nenhum rosa `#FF245E` nem guayaba `#FF5757` fazendo papel de cor de marca — são
      erro e aviso.
- [ ] O favicon é o ladrillo da marca, raio 22%.
- [ ] No tema escuro: nenhum card em `#005278`, o ponto voltou ao acento pleno, o ladrillo
      tem borda de 1px e o botão primário é o acento — as quatro regras de
      `referencias/tema-escuro.md`.

## Estado do tema escuro

A escala escura e as quatro regras vêm do design system de 17/09/2026 e estão **como
proposta**: o manual da marca fecha só o `escenario #0B1C26`. Implemente por elas, e
marque como proposta em qualquer entrega, até que a titularidade da marca aprove. Ver
`referencias/tema-escuro.md`.
