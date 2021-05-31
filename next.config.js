/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([withBundleAnalyzer, nextTranslate], {
  target: 'serverless',
  future: {
    webpack5: true,
  },
  sassOptions: {
    prependData: `@import '/styles/variables';`,
  },
})
