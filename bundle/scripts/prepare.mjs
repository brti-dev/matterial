// This script prepares files for publishing to NPM.
// import { spawn } from 'child_process'
import fs from 'fs'

const getPath = filePath => new URL(filePath, import.meta.url).pathname

// Copy README

fs.copyFileSync(getPath('../../README.md'), getPath('../README.md'))

// Clean and copy src

fs.rmSync(getPath('../src'), { recursive: true })
fs.cpSync(getPath('../../packages/matterial/src'), getPath('../src'), {
  recursive: true,
})

// Merge package.json

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const jsonBase = require('../package.dist.json')
const jsonSrc = require('../../packages/matterial/package.json')

const { devDependencies: dev_base, scripts, exports, ...base } = jsonBase

// Assume base package has only devDeps
if ('peerDependencies' in base || 'dependencies' in base) {
  console.error(
    'package.dist.json should not have peerDependencies or dependencies'
  )
  process.exit(1)
}

const {
  devDependencies: dev_src,
  peerDependencies,
  dependencies,
  scripts: _,
  exports: __,
  ...src
} = jsonSrc

const merged = {
  ...base,
  ...src,
  exports,
  scripts,
  peerDependencies,
  devDependencies: mergeSort(dev_base, dev_src),
  dependencies: mergeSort(dependencies, peerDependencies),
}

try {
  fs.writeFileSync(getPath('../package.json'), JSON.stringify(merged, null, 2))
  // file written successfully
} catch (err) {
  console.error(err)
}

// Swap package.json files.
// fs.renameSync(getPath('../package.json'), getPath('../package.local.json'))
// fs.renameSync(getPath('../package.dist.json'), getPath('../package.json'))

// fs.copyFileSync(getPath('../../../README.md'), getPath('../README.md'))

// const command = spawn('npm', ['run', 'build'])

// command.stdout.on('data', function (data) {
//   console.log(`stdout: ${data.toString()}`)
// })

// command.stderr.on('data', function (data) {
//   console.log(`stderr: ${data.toString()}`)
// })

// command.on('exit', function (code) {
//   console.log(`child process exited with code ${code.toString()}`)

//   if (code === 0) {
//     // TODO: find out why it gets there.
//     fs.rmSync(getPath('../dist/src'), { recursive: true })
//   }
// })

function mergeSort(a, b) {
  return Object.fromEntries(Object.entries({ ...a, ...b }).sort())
}
