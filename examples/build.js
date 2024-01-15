const { build } = require("esbuild");
const {
  nodeModulesPolyfillPlugin,
} = require("esbuild-plugins-node-modules-polyfill");
build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  outfile: "bin/index.js",
  loader: {
    ".node": "file",
  },
  platform: "node",
  plugins: [
    nodeModulesPolyfillPlugin({
      modules: {
        fs: true,
        path: true,
        crypto: true,
      },
    }),
  ],
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
