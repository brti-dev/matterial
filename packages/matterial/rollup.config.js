import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'

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
  terser(),
]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.s?css$/, /\.json$/],
  },
  {
    input: 'src/components/examples.ts',
    output: [
      {
        file: 'dist/cjs/examples.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/examples.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
  },
]
