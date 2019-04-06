const nbsp = '\u00A0';
const noop = () => { /* */ };

export default class HTMLWidgets {
  constructor ({_, ns} = {}) {
    Object.assign(this, {_, ns}, {
      ct: 0,
      _: (s) => s,
      ns: ''
    });
  }
  textarea ({label, name, change = noop}) {
    this._ct++;
    const areaLabel = this._(this.ns + label);
    const textareaID = `${this.ns}-textarea-${this._ct}`;
    return ['div', [
      ['label', {for: textareaID}, [
        areaLabel
      ]],
      nbsp.repeat(2),
      ['textarea', {
        id: textareaID,
        name,
        // 'aria-label': areaLabel,
        // placeholder: areaLabel,
        $on: {change}
      }]
    ]];
  }
  input ({label, name, change = noop, input = noop}) {
    return ['div', [
      ['label', [
        this._(this.ns + label), nbsp.repeat(2),
        ['input', {name, $on: {change, input}}]
      ]]
    ]];
  }
}
