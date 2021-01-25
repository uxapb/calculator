{
  mode: 'production',
  resolve: {
    modules: [
      'C:\\KJS\\TODO_2\\build\\js\\packages\\TODO_2\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'C:\\KJS\\TODO_2\\build\\js\\packages\\TODO_2\\kotlin-dce\\TODO_2.js'
    ]
  },
  output: {
    path: 'C:\\KJS\\TODO_2\\build\\distributions',
    filename: [Function: filename],
    library: 'TODO_2',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  }
}