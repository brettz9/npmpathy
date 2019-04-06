import {jml, body} from './node_modules/jamilih/dist/jml-es.js';
import HTMLWidgets from './external/HTMLWidgets/htmlwidgets.js';
import semver from './external/semver/index.es.js';

const map = new Map([
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
  ['form', {$on: {
    submit () {
      // new URLSearchParams();
    }
  }}, [
    input({label: 'Name', name: 'name'}),
    input({label: 'Version', name: 'version', input () {
      // eslint-disable-next-line import/no-named-as-default-member
      if (semver.valid(this.value)) {
        this.setCustomValidity('');
        return;
      }
      this.setCustomValidity(_('Invalid_Semver'));
      this.reportValidity();
    }}),
    textarea({label: 'Description', name: 'description'})
  ]]
], body);
