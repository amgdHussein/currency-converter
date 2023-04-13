function convert(amount, from, to) {
  /**
   * equation =
   * usd 1 -> egp 31.052037
   * usd 1 -> aed 3.672507
   * aed 3.672507 -> egp 31.052037
   * aed 1 -> egp 31.052037 / 3.672507 = 8.38615
   * * */

  const currency = this.getCurrency();

  const ratio = currency.data[to].value / currency.data[from].value;
  return amount * ratio;
}

function getCurrency() {
  const url = 'https://api.currencyapi.com/v3/latest';
  const apiKey = '0C0OJNokKnYijdpAVEMxs5uHD2zVyZbtmgRXyWZQ';
  const res = UrlFetchApp.fetch(`${url}?apikey=${apiKey}`);

  const currency = JSON.parse(res.getContentText());
  return currency;
}
