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

/* ---------- tokens.scss ---------- */
const semMeta = (o) => Object.entries(o).filter(([k]) => !k.startsWith('$'))
const scssCores = [
  ...Object.entries(t.paleta).map(([k, v]) => [k, v.hex]),
  ...Object.entries(t['acentos-escuros']),
  ...Object.entries(t['identidades-proprias']),
  ...semMeta(t.superficies.claro),
  ...semMeta(t.superficies.escuro).map(([k, v]) => [`escuro-${k}`, v]),
  ...semMeta(t['funcional-escuro']),
]
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

${scssCores.map(([k, v]) => `$${k}: ${v};`).join('\n')}

$fonte: ${t.tipografia.familia};
$peso-texto: ${t.tipografia.pesos.texto};
$peso-ui: ${t.tipografia.pesos.ui};
$peso-forte: ${t.tipografia.pesos.forte};
$peso-titulo: ${t.tipografia.pesos.titulo};

$marcas: (
${scssMarcas}
);

@function marca($slug, $token) {
  @return map.get(map.get($marcas, $slug), $token);
}
`)

/* ---------- tailwind.preset.js ---------- */
const cores = Object.fromEntries([
  ...Object.entries(t.paleta).map(([k, v]) => [k, v.hex]),
  ...Object.entries(t['acentos-escuros']),
  ...Object.entries(t['identidades-proprias']),
  ...semMeta(t.superficies.claro),
  ...semMeta(t['funcional-escuro']),
  ['escuro', Object.fromEntries(semMeta(t.superficies.escuro))],
])
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
      colors: ${JSON.stringify({ ...cores, marca }, null, 8).replace(/\n}/, '\n      }')},
      fontFamily: {
        sans: [${t.tipografia.familia.split(',').map(s => JSON.stringify(s.trim().replace(/"/g, ''))).join(', ')}],
      },
      fontWeight: {
        texto: '${t.tipografia.pesos.texto}',
        ui: '${t.tipografia.pesos.ui}',
        forte: '${t.tipografia.pesos.forte}',
        titulo: '${t.tipografia.pesos.titulo}',
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
