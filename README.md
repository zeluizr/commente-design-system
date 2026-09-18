# commente-design-system

**El sistema de marca de la familia commente.me, empaquetado como skill para agentes de
código: plugin de Claude Code, skill de Codex o instrucción para cualquier otro.**

Nueve productos comparten un mismo universo: el mismo ladrillo, el mismo logotipo en
Barlow, un acento propio por producto. Este repositorio lleva ese manual a donde se
escribe el código — paleta, las dos tipografías, construcción del lockup, las nueve
mascotas y los seis usos que rompen el sistema — para que el agente aplique la marca sin
que haya que repetírselo en cada proyecto. Sirve igual sin agente: los tokens son CSS,
SCSS, JSON y un preset de Tailwind.

[![licencia](https://badgen.net/github/license/zeluizr/commente-design-system?color=005278)](./LICENSE)
[![último commit](https://badgen.net/github/last-commit/zeluizr/commente-design-system)](https://github.com/zeluizr/commente-design-system/commits)
[![estrellas](https://badgen.net/github/stars/zeluizr/commente-design-system)](https://github.com/zeluizr/commente-design-system/stargazers)

Versión 2.0.1, según `.claude-plugin/marketplace.json`.

---

## Cómo funciona

Todo lo que el agente necesita está en una carpeta:
`plugins/marca-commente/skills/marca-commente/`. Es una skill en el formato abierto de
Agent Skills — un `SKILL.md` con frontmatter `name` y `description`, más archivos de apoyo
en rutas relativas — y no depende de nada propio de un agente en particular.

La skill se lee en tres capas, y el agente solo paga por la que usa:

1. **La `description`** del frontmatter queda siempre a la vista del agente. Es lo que le
   dice cuándo cargar la skill: cuando el trabajo toca color, tipografía, favicon, lockup
   o el nombre de uno de los nueve productos.
2. **El `SKILL.md`** entra entero cuando la skill se carga: reglas, paleta, superficies,
   tipografía y el resumen por marca. Cubre la mayoría de los pedidos.
3. **`referencias/` y `assets/`** se abren solo cuando el `SKILL.md` lo pide: la ficha de
   cada marca, la geometría del lockup, la superficie noche, los errores, y los tokens y
   SVG que se copian al proyecto.

El envoltorio `.claude-plugin/` es lo único que depende de un agente: sirve para instalar
en Claude Code por el marketplace. Codex y los demás usan la carpeta de la skill directo.

## Instalación

| agente | cómo | dónde queda |
|---|---|---|
| Claude Code | plugin por el marketplace | lo gestiona `/plugin` |
| Claude Code | skill suelta | `~/.claude/skills/marca-commente/` |
| Codex | skill | `~/.agents/skills/marca-commente/` o `.agents/skills/marca-commente/` |
| Cursor, Copilot, Gemini CLI y otros | `AGENTS.md` apuntando a la skill | dentro del proyecto |
| ninguno | solo los tokens | dentro del proyecto |

### Claude Code, como plugin

```bash
/plugin marketplace add zeluizr/commente-design-system
/plugin install marca-commente@commente-design-system
```

Es el camino recomendado en Claude Code: las actualizaciones llegan por el marketplace.

### Claude Code, como skill suelta

```bash
git clone https://github.com/zeluizr/commente-design-system.git
mkdir -p ~/.claude/skills
ln -s "$PWD/commente-design-system/plugins/marca-commente/skills/marca-commente" ~/.claude/skills/
```

Para un solo proyecto, use `.claude/skills/` dentro de él en lugar de `~/.claude/skills/`.

### Codex

Codex lee el mismo formato. La carpeta va donde él busca skills: `~/.agents/skills/` para
todos los proyectos, o `.agents/skills/` dentro de uno para versionarla junto con el
código. Versiones antiguas de Codex leían `~/.codex/skills/`; confirme en la documentación
de la versión instalada.

```bash
git clone https://github.com/zeluizr/commente-design-system.git
mkdir -p ~/.agents/skills
ln -s "$PWD/commente-design-system/plugins/marca-commente/skills/marca-commente" ~/.agents/skills/
```

Para un solo proyecto, copie en vez de enlazar, así la skill viaja con el repositorio:

```bash
mkdir -p .agents/skills
cp -R /ruta/al/commente-design-system/plugins/marca-commente/skills/marca-commente .agents/skills/
```

Codex la carga por la `description`, igual que Claude, o cuando se la nombra en el pedido
(«usa la skill marca-commente»).

### Agentes sin soporte de skills

Cursor, Copilot, Gemini CLI y casi todos los demás leen el `AGENTS.md` de la raíz del
proyecto. Copie la carpeta de la skill al proyecto (como en Codex, a
`.agents/skills/marca-commente/`) y agregue al `AGENTS.md`:

```markdown
## Marca
Todo trabajo de interfaz, color, tipografía, favicon o nombre de producto de la familia
commente.me sigue `.agents/skills/marca-commente/SKILL.md`. Léalo antes de empezar y
consulte `referencias/` cuando el SKILL.md lo indique.
```

La diferencia con una skill de verdad: sin `description` que el agente vea de antemano, el
`AGENTS.md` es lo que le avisa. Si el agente usa otro archivo de instrucciones
(`.cursor/rules/`, `GEMINI.md`, `.github/copilot-instructions.md`), el mismo párrafo va ahí.

### Solo los tokens, sin agente

Copie `plugins/marca-commente/skills/marca-commente/assets/` al proyecto. Qué es cada
archivo, en [`assets/README.md`](./plugins/marca-commente/skills/marca-commente/assets/README.md).

## Actualizar y desinstalar

| instalación | actualizar | desinstalar |
|---|---|---|
| plugin de Claude Code | `/plugin marketplace update commente-design-system` | `/plugin uninstall marca-commente@commente-design-system` |
| enlace simbólico (Claude o Codex) | `git pull` en el clon | borrar el enlace |
| copia dentro del proyecto | copiar de nuevo desde un clon actualizado | borrar la carpeta y el párrafo del `AGENTS.md` |

La copia no se actualiza sola. Es el precio de que la skill viaje con el proyecto: tras un
cambio de manual, vuelva a copiarla.

## Uso

Con la skill instalada, basta pedir lo que se necesita; el agente la carga solo. Pedidos
que la activan:

- «Crea el favicon de reportam.me.»
- «Arma la landing de hablecon.app con los tokens de la marca.»
- «Revisa si este header respeta el manual de ebanner.me.»
- «Genera el preset de Tailwind para llmbattle.dev con la superficie noche.»

En el proyecto, la marca se elige con un atributo:

```html
<html data-marca="reportam">
  <link rel="stylesheet" href="/css/tokens.css">
  <link rel="icon" type="image/svg+xml" href="/svg/icon-reportam.svg">
```

```html
<!-- llmbattle.dev es la única marca con superficie propia oscura -->
<html data-marca="llmbattle" data-superficie="noche">
```

Con Tailwind:

```js
// tailwind.config.js
module.exports = { presets: [require('./tailwind.preset.js')] }
// luego: bg-marca-reportam-base, text-azul, bg-noche, font-display, rounded-ladrillo
```

Barlow se carga con el snippet de `assets/barlow.html` y va solo en logotipo y títulos. El
texto va en Arial, que es de sistema.

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
| `ebanner` | ebanner.me — banners para tiendas VTEX | `#005278` | `#63CB76` |
| `llmbattle` | llmbattle.dev — comparativa de modelos | `#005278` | `#9B8CFF` |
| `smlk` | smlk.me — acortador de enlaces | `#005278` | `#CCCCCC` |

integram.me e inmmerce entraron con identidad ya formada: su isologo y su color no se
tocan. Solo el logotipo se compone en Barlow.

## Estructura

```
.claude-plugin/marketplace.json        catálogo del marketplace de Claude Code
MARCA.md                               qué se puede y qué no con las marcas
LICENSE                                MIT, para el código
plugins/marca-commente/
  .claude-plugin/plugin.json           manifiesto del plugin de Claude Code
  skills/marca-commente/               la skill: esta carpeta es lo que se lleva a cualquier agente
    SKILL.md                           reglas, paleta, superficies, resumen por marca
    referencias/marcas.md              las nueve marcas, una por una
    referencias/lockup.md              geometría: x, radio 22%, símbolo 56%, punto 17%
    referencias/superficie-noche.md    la noche de llmbattle.dev y sus cuatro reglas
    referencias/usos-incorretos.md     los seis errores y la lista de revisión
    referencias/design-system-familia-v1.pdf   el manual, para humanos
    referencias/ebanner-lockup-original.png    el lockup de ebanner.me antes del jade
    assets/README.md                   qué es cada archivo y de dónde vino
    assets/tokens.json                 fuente de la verdad
    assets/tokens.css                  custom properties, superficies y clases de componente
    assets/tokens.scss                 generado
    assets/tailwind.preset.js          generado
    assets/gerar.mjs                   regenera los dos anteriores desde tokens.json
    assets/barlow.html                 snippet de Google Fonts para Barlow 700/900
    assets/svg/                        lockups, ladrillos y la rejilla de construcción
    assets/mascotes/                   las mascotas, 512×512 con fondo transparente
```

## Desarrollo

```bash
git clone https://github.com/zeluizr/commente-design-system.git
cd commente-design-system
node plugins/marca-commente/skills/marca-commente/assets/gerar.mjs
```

`tokens.json` manda. Tocó un color, una marca o una medida, edite **solo** ese archivo y
regenere: `tokens.scss` y `tailwind.preset.js` salen de ahí y no se editan a mano. El
generador resuelve las rutas desde su propia carpeta, así que corre igual desde el clon o
desde la skill instalada.

`tokens.css` sí se escribe a mano, porque lleva las clases de componente, el tema claro y
la superficie noche: actualícelo en el mismo commit.

Una regla que cambia va a dos lugares: al `SKILL.md`, si es de las que valen siempre, y a
la referencia que la detalla. El `SKILL.md` es lo que el agente lee primero; lo que solo
esté en `referencias/` puede no leerse nunca.

Antes de abrir un pull request:

```bash
claude plugin validate .                                        # manifiestos del plugin
node plugins/marca-commente/skills/marca-commente/assets/gerar.mjs
git status --short                                              # el generador no debe dejar diff
```

La versión vive en dos lugares, `.claude-plugin/marketplace.json` y
`plugins/marca-commente/.claude-plugin/plugin.json`, y se sube en los dos a la vez. Sin
subirla, Claude Code no entrega el cambio a quien ya tiene el plugin instalado.

Para probar sin publicar, apunte el agente a la copia local:

```bash
/plugin marketplace add ./commente-design-system                # Claude Code
ln -s "$PWD/plugins/marca-commente/skills/marca-commente" ~/.agents/skills/   # Codex
```

## Requisitos

- Node `>= 18` para el generador. Nada más: no hay dependencias.
- Claude Code `>= 2.1.239` para declarar el plugin por nombre corto.
- Codex con soporte de skills, para usarla ahí. Sin skills, vale el camino del `AGENTS.md`.
- Barlow, de Google Fonts, licencia OFL, pesos 700 y 900 — solo logotipo y títulos. El
  texto va en Arial 400/700, que es de sistema y no se carga.

## Estado

Manual **v1.2**, septiembre de 2026. **Nada pendiente de decisión.**

El sistema tiene un solo tema, claro. La única superficie oscura de la familia es la noche
`#2C2B40` de llmbattle.dev — color de marca, no tema, y no se presta a los otros ocho
productos.

El inventario está **completo**: las nueve marcas tienen ladrillo, las tres variantes de
lockup — `-light`, `-dark` y `-onaccent` — y mascota.

## Contribuir

Conventional Commits. Las ramas salen de `dev` y el pull request va contra `dev`, nunca
contra `main`. Antes de proponer un cambio de color, de medida o de regla, abra una issue:
esto es un manual de marca, y cada valor tiene una razón detrás.

## Licencia

[MIT](./LICENSE) para el código: tokens, generador, manifiestos y documentación.

Las marcas de la familia commente.me — nombres, logotipos, isologos y ladrillos — **no**
entran en esa licencia. Qué se puede hacer con ellas y qué no, en [MARCA.md](./MARCA.md).

_Hecho con amor y café por [zeluizr](https://github.com/zeluizr) y con la ayuda de [Claude](https://claude.ai/referral/Cz_UimA0NQ) ☕_
