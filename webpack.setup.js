import ExtractTextPlugin from 'extract-text-webpack-plugin'

const SASS_INCLUDE_PATHS = ['src/', 'node_modules/']

const sassUse = stage => {
  let usecase = []
  if (stage === 'dev') {
    usecase = [
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: { includePaths: SASS_INCLUDE_PATHS },
      },
    ]
  } else {
    usecase = ExtractTextPlugin.extract({
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
  return usecase
}

export default (config, { defaultLoaders, stage }) => {
  config.module.rules = [{
    oneOf: [
      {
        test: /\.s(a|c)ss$/,
        use: sassUse(stage),
      },
      defaultLoaders.cssLoader,
      defaultLoaders.jsLoader,
      defaultLoaders.fileLoader,
    ],
  }]
  config.target = 'web' // We are targeting the web
  return config
}
