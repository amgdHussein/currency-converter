function doGet() {
  const filename = 'home-page';
  const template = HtmlService.createTemplateFromFile(filename);
  return template.evaluate();
}

function include(filename) {
  const html = HtmlService.createHtmlOutputFromFile(filename);
  return html.getContent();
}

function processForm(form) {
  // TODO: convert, send data to form
  const cost = convert(form.amount, form.from, form.to);
  return {
    cost: cost.toFixed(3),
    symbol: CURRENCY_MAP[form.to].symbol,
  };
}

function createDropdown() {
  const html = HtmlService.createHtmlOutput();

  const content = Object.values(CURRENCY_MAP)
    .map(value => `<option value="${value.code}">${value.name}</option>`)
    .join('');

  html.setContent(content);
  return html.getContent();
}
