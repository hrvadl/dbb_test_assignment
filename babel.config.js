module.exports = function (api) {
  api.cache(false)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@modules': ['./modules'],
            '@design': ['./design'],
            '@screens': ['./screens'],
            '@lib': ['./lib'],
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  }
}
