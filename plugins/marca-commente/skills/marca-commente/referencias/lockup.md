# Construção do lockup

A unidade é **`x`**, o lado do ladrillo. Todas as medidas derivam dela.

```
┌─────────┐
│  ▢ sím  │  ←  ladrillo: lado x, raio 22% de x, na cor base da marca
└─────────┘
      ↔ 0,28x        ← respiro entre ladrillo e logotipo
            commente▪me
            ↑ Barlow Bold, caixa baixa, tracking −2%
              altura de x do logotipo = 0,37x
              alinhado pela base do ladrillo
```

## As quatro peças, nesta ordem

| # | peça | especificação |
|---|---|---|
| 1 | **O ladrillo** | quadrado de lado `x`, raio `22% de x`, na cor base da marca |
| 2 | **O símbolo** | o isologo do produto, centrado, a `56% de x` |
| 3 | **O logotipo** | Barlow Bold, caixa baixa, tracking `−2%`, altura de x `= 0,37x`, alinhado à base do ladrillo |
| 4 | **O ponto** | quadrado de `17% do corpo`, na cor de acento |

O ponto é a peça que mais se erra: é um **quadrado**, não o ponto redondo do teclado.
Em CSS, ele não sai de um caractere — é um elemento:

```html
<span class="marca">commente<i class="ponto" aria-hidden="true"></i>me</span>
```

```css
.marca {
  font-family: Barlow, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: lowercase;
  color: var(--marca-base);
}
.ponto {
  display: inline-block;
  width: 0.17em;
  height: 0.17em;
  margin: 0 0.06em;
  background: var(--marca-ponto);
}
```

`--marca-ponto` já resolve claro/escuro nos tokens: sobre branco entrega a versão escura do
acento quando o acento é claro.

## Ladrillo como favicon

`100×100`, raio `22`. Serve de favicon, app icon e avatar. É a peça que identifica a marca
onde não cabe o lockup inteiro. Os arquivos prontos estão em `assets/svg/icon-<marca>.svg`.

```html
<link rel="icon" type="image/svg+xml" href="/svg/icon-commente.svg">
```

## Uma marca nova na família

1. Escolher o acento. Se o produto é institucional, a base é Azul `#005278`; identidade
   própria é exceção e precisa de decisão, não de conveniência.
2. Desenhar o isologo dentro do ladrillo, a 56% de `x`.
3. Se o acento é claro, definir a versão escura para o ponto sobre branco.
4. Compor o logotipo em Barlow Bold, caixa baixa, tracking −2% — e converter para curvas.
5. Exportar os quatro arquivos: `lockup-<marca>-light`, `-dark`, `-onaccent`,
   `icon-<marca>`.
6. Registrar a marca em `referencias/marcas.md`, em `assets/tokens.css` e em
   `assets/tokens.json`, com a mascote e o ofício dela.

## Fundos de cor

Só em caso de extrema necessidade.

| fundo | o que acontece |
|---|---|
| Branco | versão principal: base sobre branco |
| Cor base (azul) | logotipo em negativo; o quadrado mantém o acento |
| Acento pleno (verde, amarelo, rosa) | tudo em negativo, branco — ponto incluído |
| Acento claro | logotipo fica na cor base; nunca em branco |
