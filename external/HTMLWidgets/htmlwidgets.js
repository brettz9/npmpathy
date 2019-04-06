const nbsp = '\u00A0';

export default class HTMLWidgets {
  constructor ({_, ns} = {}) {
    Object.assign(this, {_, ns}, {
      _: (s) => s,
      ns: ''
    });
  }
  input ({label, name}) {
    return ['div', [
      ['label', [
        this._(this.ns + label), nbsp.repeat(2),
        ['input', {name, $on: {
          change () {

          }
        }}]
      ]]
    ]];
  }
}
