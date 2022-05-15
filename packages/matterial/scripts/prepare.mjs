// This script prepares files for publishing to NPM.
// import { spawn } from 'child_process'
import fs from 'fs'

const getPath = filePath => new URL(filePath, import.meta.url).pathname

// Copy README

fs.copyFileSync(getPath('../../../README.md'), getPath('../README.md'))

// Swap package.json files.
// fs.renameSync(getPath('../package.json'), getPath('../package.local.json'))
// fs.renameSync(getPath('../package.dist.json'), getPath('../package.json'))

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
