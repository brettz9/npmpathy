module.exports = {
  extends: [
    'ash-nazg/sauron-node',
    'plugin:testcafe/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [],
  env: {
    browser: true
  },
  overrides: [{
    files: ['index.js'],
    rules: {
      'node/no-unsupported-features/node-builtins': 0
    }
  }],
  settings: {
    polyfills: [
        'Array.isArray',
        'console',
        'document.querySelector',
        'document.querySelectorAll',
        'Error',
        'JSON',
        'Number.isInteger',
        'Number.isNaN',
        'Object.assign',
        'Object.create',
        'Object.defineProperty',
        'Object.defineProperties',
        'Object.getOwnPropertyDescriptor',
        'Object.entries',
        'Object.keys',
        'Object.setPrototypeOf',
        'Object.values',
        'Promise',
        'Set',
        'String.fromCodePoint',
        'Symbol.hasInstance',
        'Symbol.iterator',
        'Symbol.toStringTag',
        'URLSearchParams'
    ]
  },
  rules: {
    indent: ["error", 2]
  }
}
