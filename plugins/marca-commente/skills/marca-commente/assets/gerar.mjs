#!/usr/bin/env node
/* Gera tokens.scss e tailwind.preset.js a partir de tokens.json.
   tokens.json é a fonte da verdade; os dois derivados nunca se editam à mão.
   Uso: node assets/gerar.mjs                                                  */

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const aqui = dirname(fileURLToPath(import.meta.url))
const t = JSON.parse(readFileSync(join(aqui, 'tokens.json'), 'utf8'))

const aviso = `// Gerado por assets/gerar.mjs a partir de tokens.json. Não editar à mão.\n`
const semMeta = (o) => Object.entries(o).filter(([k]) => !k.startsWith('$'))
const lista = (familia) => familia.split(',').map((s) => JSON.stringify(s.trim().replace(/"/g, '')))

/* Cores, na mesma ordem nos dois derivados. A noche entra com prefixo porque
   é superfície de uma marca só, não escala do sistema.                        */
const cores = [
  ...Object.entries(t.paleta).map(([k, v]) => [k, v.hex]),
  ...Object.entries(t['acentos-escuros']),
  ...Object.entries(t['identidades-proprias']),
  ...semMeta(t.superficies.claro),
  ['escenario', t.superficies.escenario.hex],
  ...semMeta(t['superficie-noche']).filter(([k]) => k.startsWith('noche')),
]

/* ---------- tokens.scss ---------- */
const scssMarcas = Object.entries(t.marcas)
  .map(([slug, m]) => `  '${slug}': (
    base: ${m.base},
    acento: ${m.acento},
    acento-escuro: ${m.acentoEscuro},
    ponto: ${m.ponto ?? 'transparent'},
    logo-sobre-cor: ${m.logoSobreCor},
  ),`)
  .join('\n')

writeFileSync(join(aqui, 'tokens.scss'), `${aviso}@use 'sass:map';

${cores.map(([k, v]) => `$${k}: ${v};`).join('\n')}

$fonte-display: ${t.tipografia.display.familia};
$fonte-texto: ${t.tipografia.texto.familia};
$peso-forte: ${t.tipografia.display.pesos.forte};
$peso-titulo: ${t.tipografia.display.pesos.titulo};
$peso-texto: ${t.tipografia.texto.pesos.normal};
$peso-texto-forte: ${t.tipografia.texto.pesos.forte};

$marcas: (
${scssMarcas}
);

@function marca($slug, $token) {
  @return map.get(map.get($marcas, $slug), $token);
}
`)

/* ---------- tailwind.preset.js ---------- */
const marca = Object.fromEntries(
  Object.entries(t.marcas).map(([slug, m]) => [slug, {
    base: m.base, acento: m.acento, 'acento-escuro': m.acentoEscuro,
    ponto: m.ponto ?? 'transparent', 'logo-sobre-cor': m.logoSobreCor,
  }]),
)

writeFileSync(join(aqui, 'tailwind.preset.js'), `${aviso}
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify({ ...Object.fromEntries(cores), marca }, null, 8).replace(/\n}/, '\n      }')},
      fontFamily: {
        display: [${lista(t.tipografia.display.familia).join(', ')}],
        sans: [${lista(t.tipografia.texto.familia).join(', ')}],
      },
      fontWeight: {
        texto: '${t.tipografia.texto.pesos.normal}',
        'texto-forte': '${t.tipografia.texto.pesos.forte}',
        forte: '${t.tipografia.display.pesos.forte}',
        titulo: '${t.tipografia.display.pesos.titulo}',
      },
      letterSpacing: {
        logotipo: '${t.tipografia.tracking.logotipo}',
        titulo: '${t.tipografia.tracking.titulo}',
        eyebrow: '${t.tipografia.tracking.eyebrow}',
      },
      borderRadius: { ladrillo: '22%' },
    },
  },
}
`)

console.log('gerados: tokens.scss, tailwind.preset.js')
