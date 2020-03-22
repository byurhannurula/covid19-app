/* eslint-disable no-param-reassign */

const webpackConfig = {
  webpack(config, options) {
    config.resolve.alias['@'] = `${__dirname}/src`

    return config
  },
}

module.exports = webpackConfig
