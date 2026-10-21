// karma.conf.cjs
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

  
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter')
    ],

    files: [
      'src/test/setupTests.js',
      'src/test/**/*.spec.js',
      'src/test/**/*.spec.jsx'
    ],

    preprocessors: {
      'src/test/setupTests.js': ['webpack'],
      'src/test/**/*.spec.js': ['webpack'],
      'src/test/**/*.spec.jsx': ['webpack']
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            resolve: {
              fullySpecified: false // <-- Esto soluciona el error de "fully specified" de Webpack 5
            },
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};