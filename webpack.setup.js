import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SASS_INCLUDE_PATHS = ['src/']
const extractSass = new ExtractTextPlugin({
  filename: 'styles.[hash:8].css',
  disable: process.env.NODE_ENV === 'development',
  allChunks: true,
})
let alreadyIn = false
let sassUse
if (process.env.NODE_ENV === 'development') {
  sassUse = [{
    loader: 'style-loader', // creates style nodes from JS strings
  }, {
    loader: 'css-loader', // translates CSS into CommonJS
  }, {
    loader: 'sass-loader', // compiles Sass to CSS
  }]
} else {
  sassUse = ExtractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          minimize: true,
          sourceMap: false,
        },
      },
      {
        loader: 'sass-loader',
        options: { includePaths: SASS_INCLUDE_PATHS },
      },
    ],
  })
}

export default (config, { stage, defaultLoaders }) => {
  // react-static is loading this config twice, but not needed
  if (!alreadyIn) { alreadyIn = true } else { return config }
  config.module.rules = [{
    oneOf: [
      {
        test: /\.s(a|c)ss$/,
        use: sassUse,
      },
      defaultLoaders.cssLoader,
      defaultLoaders.jsLoader,
    ],
    rules: [
      defaultLoaders.fileLoader,
    ],
  }]
  if (stage === 'dev') config.plugins.push(extractSass)
  return config
}
