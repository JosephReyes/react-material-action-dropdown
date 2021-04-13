import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript()],
  external: ["react", "react-dom"],
};
