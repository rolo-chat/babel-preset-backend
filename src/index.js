module.exports = () => ({
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: 14,
        },
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: "src",
        alias: {
          env: "./env",
          test: "./test",
          engine: "@rolo-chat/server-engine",
        },
      },
    ],
    "dynamic-import-node",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-classes",
    "@babel/plugin-transform-runtime",
  ],
});
