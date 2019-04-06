import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: './node_modules/semver',
    output: {
      format: 'esm',
      sourcemap: true,
      file: `external/semver/index.es.js`
    },
    plugins: [
      resolve(),
      commonjs()
    ]
  }
];
