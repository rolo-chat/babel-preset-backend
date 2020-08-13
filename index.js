module.exports = () => ({
  presets: [
    [
      require('@babel/preset-env'), 
      {
        targets: 'node 12',
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      require('babel-plugin-module-resolver'),
      {
        root: 'src',
        alias: {
          env: './env',
          test: './test',
        },
      },
    ],
    {default: require('babel-plugin-dynamic-import-node')},
    require("@babel/plugin-proposal-object-rest-spread"),
    require("@babel/plugin-proposal-class-properties"),
    require("@babel/plugin-transform-classes"),
    require("@babel/plugin-transform-runtime"),
  ],
});
