import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SASS_INCLUDE_PATHS = ['src/']

export default (config, { stage, defaultLoaders }) => {
  const extractSass = new ExtractTextPlugin({
    filename: 'styles.[hash:8].css',
    disable: stage === 'dev',
  })
  config.module.rules = [{
    oneOf: [
      defaultLoaders.jsLoader,
      {
        test: /\.s(a|c)ss$/,
        use: extractSass.extract({
          // use style-loader in development
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: stage === 'prod',
              },
            },
            {
              loader: 'sass-loader',
              options: { includePaths: SASS_INCLUDE_PATHS },
            },
          ],
        }),
      },
      defaultLoaders.fileLoader,
    ],
  }]
  config.plugins.push(extractSass)
  return config
}
