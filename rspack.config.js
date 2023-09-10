/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.tsx'
  },
  devtool: 'source-map',
  builtins: {
    html: [
      {
        template: './index.html'
      }
    ]
  },
  module: {},
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  },

  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'rspack-runtime'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /\/node_modules\/(react|react-dom|scheduler)\//,
          name: 'lib-react',
          priority: 0,
          reuseExistingChunk: true
        },
        vendor: {
          test: /\/node_modules\//,
          name: 'vendor',
          priority: -1,
          reuseExistingChunk: true
        }
      }
    }
  }
};
