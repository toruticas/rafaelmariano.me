module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx'],
        alias: {
          features: './features',
          components: './components',
        },
      },
    ],
  ],
  presets: [
    'next',
  ],
};
