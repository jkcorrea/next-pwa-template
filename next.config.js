const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { mergeWithCustomize, unique } = require('webpack-merge')

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
  },
  webpack: (config, { buildId, dev, isServer, deafultLoaders, webpack }) => {
    const oldProvide = config.plugins.find(
      (p) => p.constructor && p.constructor.name === 'ProvidePlugin'
    )

    return mergeWithCustomize({
      customizeArray: unique(
        'plugins',
        ['ProvidePlugin'],
        (p) => p.constructor && p.constructor.name
      ),
    })(config, {
      plugins: [
        // Make React & gql`` available by default
        new webpack.ProvidePlugin({
          ...(oldProvide?.definitions || {}),
          React: 'react',
          gql: 'graphql-tag',
        }),
      ],
    })
  },
})
