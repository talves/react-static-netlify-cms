import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SASS_INCLUDE_PATHS = ['src/']

let sassUse = []
if (process.env.NODE_ENV === 'development') {
  sassUse = [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'sass-loader' },
  ]
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

export default (config, { defaultLoaders }) => {
  config.module.rules = [{
    oneOf: [
      {
        test: /\.s(a|c)ss$/,
        use: sassUse,
      },
      defaultLoaders.cssLoader,
      defaultLoaders.jsLoader,
      defaultLoaders.fileLoader,
    ],
  }]
  return config
}
