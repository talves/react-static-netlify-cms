import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SASS_INCLUDE_PATHS = ['src/']
const extractSass = new ExtractTextPlugin({
  filename: 'styles.[hash:8].css',
  disable: process.env.NODE_ENV === 'development',
})
let alreadyIn = false

export default (config, { stage, defaultLoaders }) => {
  if (!alreadyIn) { alreadyIn = true } else { return config }
  console.log('extractSass-', extractSass)
  config.module.rules = [{
    oneOf: [
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
      defaultLoaders.jsLoader,
      defaultLoaders.cssLoader,
      defaultLoaders.fileLoader,
    ],
  }]
  config.plugins.push(extractSass)
  return config
}
