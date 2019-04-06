import {jml, body} from './node_modules/jamilih/dist/jml-es.js';
import HTMLWidgets from './external/HTMLWidgets/htmlwidgets.js';

const _ = (s) => s;
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
    input({label: 'Version', name: 'version'}),
    textarea({label: 'Description', name: 'description'})
  ]]
], body);
