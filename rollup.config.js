import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS as DEFAULT_BABEL_EXTENSIONS } from "@babel/core";

import pkg from "./package.json";
import { DEFAULT_EXTENSIONS } from "@babel/core";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.tsx",
  external: ['react', 'react-dom', (id) => id.includes('@babel/runtime')],
  plugins: [
    resolve(),
    typescript({
      clean: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, "ts", "tsx"],
      exclude: "node_modules/**",
      babelHelpers: 'runtime',
    }),
  ],
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
  ],
};
