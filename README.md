# npmpathy

GUI for `package.json`

PROJECT NOT YET FUNCTIONAL.

## To-dos

1. Allow editing of `package.json`
  1. Allow overwriting existing
  1. Adding new properties
  1. Delete existing
  1. Ensure non-recognized fields can be edited as JSON

## Possible to-dos (or wish-list)

Some wishes, but not necessarily with plans to follow-through!

0. Be sure to update project description in README and our
    `package.json` if we expand the scope
1. Keep stand-alone but also make plug-in for Atom (with handler for
    `package.json` type?).
1. Integrate [npm-gui](https://www.npmjs.com/package/npm-gui) for dependencies.
1. Integrate [npm-scripts-gui](https://www.npmjs.com/package/npm-scripts-gui)
    for scripts execution.
1. Save pipelines of dependencies, scripts for reuse across projects (e.g.,
    adding ESLint dependencies and "eslint" script, for Rollup, etc.)
1. Pull-down to switch between `package.json` of other open repos in Atom.
1. JSON-Schema-driven ESLint (and options) editing (npmpathy desired to
    function not only for npm, but related).
1. Add [license-checker](https://www.npmjs.com/package/license-checker)
1. Make a pseudo-standard field (under `directories`?) for `changes` to
    point to a `CHANGES.md` file (and check common names listed at
    <https://docs.npmjs.com/files/package.json#files>).
