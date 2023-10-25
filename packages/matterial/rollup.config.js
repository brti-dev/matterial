import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import copy from 'rollup-plugin-copy'
import deleteFiles from 'rollup-plugin-delete'

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
    output: {
      file: 'dist/index.js',
      format: 'esm',
      assetFileNames: '[name][extname]',
    },
    plugins: [deleteFiles({ targets: 'dist/*' }), ...plugins],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.s?css$/, /\.json$/],
  },
  {
    input: 'src/components/examples.ts',
    output: [
      {
        file: 'dist/examples.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
  },
]
