import { createRequire } from 'node:module'

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
// import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import deleteFiles from 'rollup-plugin-delete'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

/**
 * Used for generating external dependencies
 * Credit: Mateusz Burzyński (https://github.com/Andarist)
 * Source: https://github.com/rollup/rollup-plugin-babel/issues/148#issuecomment-399696316
 */
const makeExternalPredicate = externalArr => {
  if (externalArr.length === 0) {
    return () => false
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`)

  return id => pattern.test(id)
}

const peerDeps = Object.keys(pkg.peerDependencies || {})
console.log('peer deps', peerDeps)
const external = makeExternalPredicate([
  // Handles both dependencies and peer dependencies so we don't have to manually maintain a list
  // ...Object.keys(pkg.dependencies || {}),
  ...peerDeps,
])
const globals = { react: 'React' }
const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({ tsconfig: './tsconfig.json' }),
  postcss(),
  json(),
  copy({
    targets: [{ src: 'src/styles/**/*', dest: 'dist/styles' }],
  }),
  // terser({
  //   compress: { directives: false },
  // }),
]
const onwarn = (warning, warn) => {
  if (
    warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
    warning.message.includes('use client')
  ) {
    // Suppress warning
    return
  }

  warn(warning)
}

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'esm',
      assetFileNames: '[name][extname]',
      globals,
      banner: `/*
 * Matterial UI
 * https://matterial.brti.dev
 * Matt Berti
 * @license MIT
 */
'use client';`,
    },
    plugins: [deleteFiles({ targets: 'dist/*' }), ...plugins],
    external,
    onwarn,
  },
  // {
  //   input: 'dist/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts()],
  //   external: [/\.s?css$/, /\.json$/],
  // },
  {
    input: 'src/components/examples.ts',
    output: {
      file: 'dist/examples.js',
      format: 'esm',
      sourcemap: true,
      globals,
    },
    plugins,
    external,
    onwarn,
  },
]
