import {jml, body} from './node_modules/jamilih/dist/jml-es.js';
import HTMLWidgets from './external/HTMLWidgets/htmlwidgets.js';
import semver from './external/semver/index.es.js';
import validateNpmPackageName from
  './external/validate-npm-package-name/index.es.js';

const validate = (val, errorString, checker) => {
  if (checker(val)) {
    this.setCustomValidity('');
    return;
  }
  this.setCustomValidity(errorString);
  this.reportValidity();
};

const map = new Map([
  ['npmpathy', 'npmpathy'],
  ['Invalid_Name', 'Invalid Name'],
  ['Invalid_Semver', 'Invalid Semver']
]);
const _ = (s) => {
  if (!map.has(s)) {
    return s;
  }
  return map.get(s);
};
document.documentElement.lang = 'en-US';
document.title = _('NPMpathy');

const w = new HTMLWidgets({_});

const input = w.input.bind(w),
  textarea = w.textarea.bind(w);

jml('div', {role: 'main'}, [
  ['h1', [_('npmpathy')]],
  ['form', {$on: {
    submit () {
      // new URLSearchParams();
    }
  }}, [
    input({label: 'Name', name: 'name', input () {
      validate(this.value, _('Invalid_Name'), (v) => {
        // Todo: Option to allow this too:
        //    `validateNpmPackageName().validForOldPackages`;
        return validateNpmPackageName(v).validForNewPackages;
      });
    }}),
    input({label: 'Version', name: 'version', input () {
      validate(this.value, _('Invalid_Semver'), (v) => {
        // eslint-disable-next-line import/no-named-as-default-member
        return semver.valid(v);
      });
    }}),
    textarea({label: 'Description', name: 'description'})
  ]]
], body);
