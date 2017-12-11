import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SASS_INCLUDE_PATHS = ['src/', 'node_modules/']

let sassUse = []
if (process.env.NODE_ENV === 'development') {
  sassUse = [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: { includePaths: SASS_INCLUDE_PATHS },
    },
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
  config.target = 'web' // We are targeting the web
  return config
}
