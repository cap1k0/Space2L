const { composePlugins, withNx } = require('@nx/next')
const { withPayload } = require('@payloadcms/next/withPayload')
const path = require('path')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  outputFileTracingIncludes: {
    '/api/*': ['./src/**/*'],
  },
  webpack: (config) => {
    config.resolve.alias['@payload-config'] = path.resolve(__dirname, 'src/payload.config.ts')
    return config
  },
}

const plugins = [withNx]

module.exports = withPayload(composePlugins(...plugins)(nextConfig), {
  devBundleServerPackages: false,
})
