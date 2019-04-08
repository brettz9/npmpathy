import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [
  resolve(),
  commonjs()
];

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: './node_modules/semver',
    output: {
      format: 'esm',
      sourcemap: true,
      file: `external/semver/index.es.js`
    },
    plugins
  },
  {
    input: './node_modules/validate-npm-package-name',
    output: {
      format: 'esm',
      sourcemap: true,
      file: `external/validate-npm-package-name/index.es.js`
    },
    plugins
  }
];
