const path = require('path')
const withTM = require('next-transpile-modules')(['../matterial'])

module.exports = withTM({
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals]
    }

    config.resolve.alias['react'] = path.resolve(
      __dirname,
      '.',
      'node_modules',
      'react'
    )

    return config
  },
})
