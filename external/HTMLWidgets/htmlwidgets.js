const nbsp = '\u00A0';

export default class HTMLWidgets {
  constructor ({_, ns} = {}) {
    Object.assign(this, {_, ns}, {
      ct: 0,
      _: (s) => s,
      ns: ''
    });
  }
  textarea ({label, name}) {
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
        $on: {
          change () {

          }
        }
      }]
    ]];
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
