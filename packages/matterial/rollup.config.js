import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import sassPlugin from 'rollup-plugin-sass'
import sass from 'sass'

import pkg from './package.json'

export default defineConfig({
  input: 'src/main.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript(),
    sassPlugin({
      runtime: sass,
      insert: false,
      output: './dist/global.css', // Will need to be imported into the app manually, eg `import './node_modules/mtui/global.css'`
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
})
