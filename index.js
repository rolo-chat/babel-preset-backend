module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'node 12',
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        engine: '@kaneoh/rolo-server-engine',
        root: 'src',
        alias: {
          env: './env',
          test: './test',
        },
      },
    ],
    'dynamic-import-node',
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-runtime",
  ],
});
