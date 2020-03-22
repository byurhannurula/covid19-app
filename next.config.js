/* eslint-disable no-param-reassign */
const withPWA = require('next-pwa')

module.exports = withPWA({
  webpack(config) {
    config.resolve.alias['@'] = `${__dirname}/src`

    return config
  },
  pwa: {
    dest: 'public',
  },
})
