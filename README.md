# commente-design-system

**El sistema de marca de la familia commente.me, empaquetado como plugin de Claude Code.**

Nueve productos comparten un mismo universo: el mismo ladrillo, el mismo logotipo en
Barlow, un acento propio por producto. Este repositorio lleva ese manual a donde se
escribe el código — paleta, tipografía, construcción del lockup, temas claro y oscuro y
los siete usos que rompen el sistema — para que Claude aplique la marca sin que haya que
repetírselo en cada proyecto. Sirve igual sin Claude: los tokens son CSS, SCSS, JSON y un
preset de Tailwind.

[![licencia](https://badgen.net/github/license/zeluizr/commente-design-system?color=005278)](./LICENSE)
[![último commit](https://badgen.net/github/last-commit/zeluizr/commente-design-system)](https://github.com/zeluizr/commente-design-system/commits)
[![estrellas](https://badgen.net/github/stars/zeluizr/commente-design-system)](https://github.com/zeluizr/commente-design-system/stargazers)

Versión 1.0.0, según `.claude-plugin/marketplace.json`.

---

## Instalación

Como plugin de Claude Code:

```bash
/plugin marketplace add zeluizr/commente-design-system
/plugin install marca-commente@commente-design-system
```

Como skill suelta, sin plugin:

```bash
git clone https://github.com/zeluizr/commente-design-system.git
cp -R commente-design-system/plugins/marca-commente/skills/marca-commente ~/.claude/skills/
```

Solo los tokens, sin Claude: copie `plugins/marca-commente/skills/marca-commente/assets/`
a su proyecto.

## Uso

Una vez instalado, la skill se carga sola cuando el trabajo toca color, tipografía,
favicon o el nombre de un producto de la familia. En el proyecto, la marca se elige con un
atributo:

```html
<html data-marca="reportam">
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="icon" type="image/svg+xml" href="/svg/icon-reportam.svg">
```

```html
<!-- el tema sigue al sistema; data-tema lo fuerza -->
<html data-marca="llmbattle" data-tema="oscuro">
```

Con Tailwind:

```js
// tailwind.config.js
module.exports = { presets: [require('./tailwind.preset.js')] }
// luego: bg-marca-reportam-base, text-azul, bg-escuro-superficie, rounded-ladrillo
```

El punto del nombre es un cuadrado, nunca el punto redondo del teclado — es elemento, no
carácter:

```html
<span class="marca">commente<i class="marca__ponto" aria-hidden="true"></i>me</span>
```

## Las nueve marcas

Azul `#005278` es el suelo común. Cambia el símbolo y cambia el acento; la estructura no.

| slug | marca | base | acento |
|---|---|---|---|
| `commente` | commente.me — marca madre | `#005278` | `#FFBD38` |
| `integram` | integram.me — identidad propia | `#2A2438` | `#FF41B4` |
| `inmmerce` | inmmerce — identidad propia | `#3F3D56` | `#F6C92D` |
| `hablecon` | hablecon.app — conversación y voz | `#005278` | `#40B0B8` |
| `inmplementa` | inmplementa.me — implementación | `#005278` | `#F2A65A` |
| `reportam` | reportam.me — informes y datos | `#005278` | `#7FBBD8` |
| `ebanner` | ebanner.me — banners para tiendas VTEX | `#005278` | `#F2A65A` |
| `llmbattle` | llmbattle.dev — comparativa de modelos | `#005278` | `#9B8CFF` |
| `smlk` | smlk.me — acortador de enlaces | `#005278` | `#CCCCCC` |

integram.me e inmmerce entraron con identidad ya formada: su isologo y su color no se
tocan. Solo el logotipo se compone en Barlow.

## Estructura

```
.claude-plugin/marketplace.json        catálogo del marketplace
plugins/marca-commente/
  .claude-plugin/plugin.json           manifiesto del plugin
  skills/marca-commente/
    SKILL.md                           reglas, paleta, superficies, resumen por marca
    referencias/marcas.md              las nueve marcas, una por una
    referencias/lockup.md              geometría: x, radio 22%, símbolo 56%, punto 17%
    referencias/tema-escuro.md         las dos escalas y las cuatro reglas del oscuro
    referencias/usos-incorretos.md     los siete errores y la lista de revisión
    assets/tokens.json                 fuente de la verdad
    assets/tokens.css                  custom properties, temas y clases de componente
    assets/tokens.scss                 generado
    assets/tailwind.preset.js          generado
    assets/gerar.mjs                   regenera los dos anteriores desde tokens.json
    assets/svg/                        lockups, ladrillos y la rejilla de construcción
```

## Desarrollo

```bash
git clone https://github.com/zeluizr/commente-design-system.git
cd commente-design-system
node plugins/marca-commente/skills/marca-commente/assets/gerar.mjs
```

`tokens.json` manda. Tocó un color, una marca o una medida, edite **solo** ese archivo y
regenere: `tokens.scss` y `tailwind.preset.js` salen de ahí y no se editan a mano.

`tokens.css` sí se escribe a mano, porque lleva las clases de componente y los dos temas:
actualícelo en el mismo commit.

Para probar el plugin sin publicar, apunte el marketplace a la copia local:

```bash
/plugin marketplace add ./commente-design-system
```

## Requisitos

- Node `>= 18` para el generador. Nada más: no hay dependencias.
- Claude Code `>= 2.1.239` para declarar el plugin por nombre corto. Sin Claude Code, el
  repositorio funciona igual como biblioteca de tokens.
- Barlow, de Google Fonts, licencia OFL. Es la única tipografía del universo.

## Estado

La escala de superficies oscuras y las cuatro reglas del tema oscuro son **propuesta**: el
manual de marca cierra solo el `escenario #0B1C26`. Están implementadas en los tokens y
marcadas como propuesta hasta que se aprueben.

ebanner.me sigue sin símbolo propio: el lugar queda reservado en su ladrillo, centrado, al
56% de x. Las variantes `-dark` y `-onaccent` de lockup hoy existen solo para commente.me.

## Contribuir

Conventional Commits. Las ramas salen de `dev` y el pull request va contra `dev`, nunca
contra `main`. Antes de proponer un cambio de color, de medida o de regla, abra una issue:
esto es un manual de marca, y cada valor tiene una razón detrás.

## Licencia

[MIT](./LICENSE) para el código: tokens, generador, manifiestos y documentación.

Las marcas de la familia commente.me — nombres, logotipos, isologos y ladrillos — **no**
entran en esa licencia. Qué se puede hacer con ellas y qué no, en [MARCA.md](./MARCA.md).

_Hecho con amor y café por [zeluizr](https://github.com/zeluizr) y con la ayuda de [Claude](https://claude.ai/referral/Cz_UimA0NQ) ☕_
