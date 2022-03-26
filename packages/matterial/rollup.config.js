import { defineConfig } from 'rollup'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import sassPlugin from 'rollup-plugin-sass'
import postcss from 'rollup-plugin-postcss'
import sass from 'sass'

import pkg from './package.json'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      // exports: 'named',
      sourcemap: true,
      // strict: false,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    // sassPlugin({
    //   runtime: sass,
    //   insert: false,
    //   output: './dist/global.css', // Will need to be imported into the app manually, eg `import './node_modules/mtui/global.css'`
    // }),
    postcss({
      extract: './dist/global.css',
      modules: true,
      use: ['sass'],
    }),
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-icons'],
}
