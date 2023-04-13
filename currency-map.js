const CURRENCY_MAP = {
  USD: {
    name: 'US Dollar',
    symbol: '$',
    code: 'USD',
  },
  CAD: {
    name: 'Canadian Dollar',
    symbol: '$',
    code: 'CAD',
  },
  EUR: {
    name: 'Euro',
    symbol: '€',
    code: 'EUR',
  },
  AED: {
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ.‏',
    code: 'AED',
  },
  AFN: {
    name: 'Afghan Afghani',
    symbol: '؋',
    code: 'AFN',
  },
  ALL: {
    name: 'Albanian Lek',
    symbol: 'Lek',
    code: 'ALL',
  },
  AMD: {
    name: 'Armenian Dram',
    symbol: 'դր.',
    code: 'AMD',
  },
  ARS: {
    name: 'Argentine Peso',
    symbol: '$',
    code: 'ARS',
  },
  AUD: {
    name: 'Australian Dollar',
    symbol: '$',
    code: 'AUD',
  },
  AZN: {
    name: 'Azerbaijani Manat',
    symbol: 'ман.',
    code: 'AZN',
  },
  BAM: {
    name: 'Bosnia-Herzegovina Convertible Mark',
    symbol: 'KM',
    code: 'BAM',
  },
  BDT: {
    name: 'Bangladeshi Taka',
    symbol: '৳',
    code: 'BDT',
  },
  BGN: {
    name: 'Bulgarian Lev',
    symbol: 'лв.',
    code: 'BGN',
  },
  BHD: {
    name: 'Bahraini Dinar',
    symbol: 'د.ب.‏',
    code: 'BHD',
  },
  BIF: {
    name: 'Burundian Franc',
    symbol: 'FBu',
    code: 'BIF',
  },
  BND: {
    name: 'Brunei Dollar',
    symbol: '$',
    code: 'BND',
  },
  BOB: {
    name: 'Bolivian Boliviano',
    symbol: 'Bs',
    code: 'BOB',
  },
  BRL: {
    name: 'Brazilian Real',
    symbol: 'R$',
    code: 'BRL',
  },
  BWP: {
    name: 'Botswanan Pula',
    symbol: 'P',
    code: 'BWP',
  },
  BYN: {
    name: 'Belarusian Ruble',
    symbol: 'руб.',
    code: 'BYN',
  },
  BZD: {
    name: 'Belize Dollar',
    symbol: '$',
    code: 'BZD',
  },
  CDF: {
    name: 'Congolese Franc',
    symbol: 'FrCD',
    code: 'CDF',
  },
  CHF: {
    name: 'Swiss Franc',
    symbol: 'CHF',
    code: 'CHF',
  },
  CLP: {
    name: 'Chilean Peso',
    symbol: '$',
    code: 'CLP',
  },
  CNY: {
    name: 'Chinese Yuan',
    symbol: 'CN¥',
    code: 'CNY',
  },
  COP: {
    name: 'Colombian Peso',
    symbol: '$',
    code: 'COP',
  },
  CRC: {
    name: 'Costa Rican Colón',
    symbol: '₡',
    code: 'CRC',
  },
  CVE: {
    name: 'Cape Verdean Escudo',
    symbol: 'CV$',
    code: 'CVE',
  },
  CZK: {
    name: 'Czech Republic Koruna',
    symbol: 'Kč',
    code: 'CZK',
  },
  DJF: {
    name: 'Djiboutian Franc',
    symbol: 'Fdj',
    code: 'DJF',
  },
  DKK: {
    name: 'Danish Krone',
    symbol: 'kr',
    code: 'DKK',
  },
  DOP: {
    name: 'Dominican Peso',
    symbol: 'RD$',
    code: 'DOP',
  },
  DZD: {
    name: 'Algerian Dinar',
    symbol: 'د.ج.‏',
    code: 'DZD',
  },
  EEK: {
    name: 'Estonian Kroon',
    symbol: 'kr',
    code: 'EEK',
  },
  EGP: {
    name: 'Egyptian Pound',
    symbol: 'ج.م.‏',
    code: 'EGP',
  },
  ERN: {
    name: 'Eritrean Nakfa',
    symbol: 'Nfk',
    code: 'ERN',
  },
  ETB: {
    name: 'Ethiopian Birr',
    symbol: 'Br',
    code: 'ETB',
  },
  GBP: {
    name: 'British Pound Sterling',
    symbol: '£',
    code: 'GBP',
  },
  GEL: {
    name: 'Georgian Lari',
    symbol: 'GEL',
    code: 'GEL',
  },
  GHS: {
    name: 'Ghanaian Cedi',
    symbol: 'GH₵',
    code: 'GHS',
  },
  GNF: {
    name: 'Guinean Franc',
    symbol: 'FG',
    code: 'GNF',
  },
  GTQ: {
    name: 'Guatemalan Quetzal',
    symbol: 'Q',
    code: 'GTQ',
  },
  HKD: {
    name: 'Hong Kong Dollar',
    symbol: '$',
    code: 'HKD',
  },
  HNL: {
    name: 'Honduran Lempira',
    symbol: 'L',
    code: 'HNL',
  },
  HRK: {
    name: 'Croatian Kuna',
    symbol: 'kn',
    code: 'HRK',
  },
  HUF: {
    name: 'Hungarian Forint',
    symbol: 'Ft',
    code: 'HUF',
  },
  IDR: {
    name: 'Indonesian Rupiah',
    symbol: 'Rp',
    code: 'IDR',
  },
  ILS: {
    name: 'Israeli New Sheqel',
    symbol: '₪',
    code: 'ILS',
  },
  INR: {
    name: 'Indian Rupee',
    symbol: 'টকা',
    code: 'INR',
  },
  IQD: {
    name: 'Iraqi Dinar',
    symbol: 'د.ع.‏',
    code: 'IQD',
  },
  IRR: {
    name: 'Iranian Rial',
    symbol: '﷼',
    code: 'IRR',
  },
  ISK: {
    name: 'Icelandic Króna',
    symbol: 'kr',
    code: 'ISK',
  },
  JMD: {
    name: 'Jamaican Dollar',
    symbol: '$',
    code: 'JMD',
  },
  JOD: {
    name: 'Jordanian Dinar',
    symbol: 'د.أ.‏',
    code: 'JOD',
  },
  JPY: {
    name: 'Japanese Yen',
    symbol: '￥',
    code: 'JPY',
  },
  KES: {
    name: 'Kenyan Shilling',
    symbol: 'Ksh',
    code: 'KES',
  },
  KHR: {
    name: 'Cambodian Riel',
    symbol: '៛',
    code: 'KHR',
  },
  KMF: {
    name: 'Comorian Franc',
    symbol: 'FC',
    code: 'KMF',
  },
  KRW: {
    name: 'South Korean Won',
    symbol: '₩',
    code: 'KRW',
  },
  KWD: {
    name: 'Kuwaiti Dinar',
    symbol: 'د.ك.‏',
    code: 'KWD',
  },
  KZT: {
    name: 'Kazakhstani Tenge',
    symbol: 'тңг.',
    code: 'KZT',
  },
  LBP: {
    name: 'Lebanese Pound',
    symbol: 'ل.ل.‏',
    code: 'LBP',
  },
  LKR: {
    name: 'Sri Lankan Rupee',
    symbol: 'SL Re',
    code: 'LKR',
  },
  LTL: {
    name: 'Lithuanian Litas',
    symbol: 'Lt',
    code: 'LTL',
  },
  LVL: {
    name: 'Latvian Lats',
    symbol: 'Ls',
    code: 'LVL',
  },
  LYD: {
    name: 'Libyan Dinar',
    symbol: 'د.ل.‏',
    code: 'LYD',
  },
  MAD: {
    name: 'Moroccan Dirham',
    symbol: 'د.م.‏',
    code: 'MAD',
  },
  MDL: {
    name: 'Moldovan Leu',
    symbol: 'MDL',
    code: 'MDL',
  },
  MGA: {
    name: 'Malagasy Ariary',
    symbol: 'MGA',
    code: 'MGA',
  },
  MKD: {
    name: 'Macedonian Denar',
    symbol: 'MKD',
    code: 'MKD',
  },
  MMK: {
    name: 'Myanma Kyat',
    symbol: 'K',
    code: 'MMK',
  },
  MOP: {
    name: 'Macanese Pataca',
    symbol: 'MOP$',
    code: 'MOP',
  },
  MUR: {
    name: 'Mauritian Rupee',
    symbol: 'MURs',
    code: 'MUR',
  },
  MXN: {
    name: 'Mexican Peso',
    symbol: '$',
    code: 'MXN',
  },
  MYR: {
    name: 'Malaysian Ringgit',
    symbol: 'RM',
    code: 'MYR',
  },
  MZN: {
    name: 'Mozambican Metical',
    symbol: 'MTn',
    code: 'MZN',
  },
  NAD: {
    name: 'Namibian Dollar',
    symbol: 'N$',
    code: 'NAD',
  },
  NGN: {
    name: 'Nigerian Naira',
    symbol: '₦',
    code: 'NGN',
  },
  NIO: {
    name: 'Nicaraguan Córdoba',
    symbol: 'C$',
    code: 'NIO',
  },
  NOK: {
    name: 'Norwegian Krone',
    symbol: 'kr',
    code: 'NOK',
  },
  NPR: {
    name: 'Nepalese Rupee',
    symbol: 'नेरू',
    code: 'NPR',
  },
  NZD: {
    name: 'New Zealand Dollar',
    symbol: '$',
    code: 'NZD',
  },
  OMR: {
    name: 'Omani Rial',
    symbol: 'ر.ع.‏',
    code: 'OMR',
  },
  PAB: {
    name: 'Panamanian Balboa',
    symbol: 'B/.',
    code: 'PAB',
  },
  PEN: {
    name: 'Peruvian Nuevo Sol',
    symbol: 'S/.',
    code: 'PEN',
  },
  PHP: {
    name: 'Philippine Peso',
    symbol: '₱',
    code: 'PHP',
  },
  PKR: {
    name: 'Pakistani Rupee',
    symbol: '₨',
    code: 'PKR',
  },
  PLN: {
    name: 'Polish Zloty',
    symbol: 'zł',
    code: 'PLN',
  },
  PYG: {
    name: 'Paraguayan Guarani',
    symbol: '₲',
    code: 'PYG',
  },
  QAR: {
    name: 'Qatari Rial',
    symbol: 'ر.ق.‏',
    code: 'QAR',
  },
  RON: {
    name: 'Romanian Leu',
    symbol: 'RON',
    code: 'RON',
  },
  RSD: {
    name: 'Serbian Dinar',
    symbol: 'дин.',
    code: 'RSD',
  },
  RUB: {
    name: 'Russian Ruble',
    symbol: '₽.',
    code: 'RUB',
  },
  RWF: {
    name: 'Rwandan Franc',
    symbol: 'FR',
    code: 'RWF',
  },
  SAR: {
    name: 'Saudi Riyal',
    symbol: 'ر.س.‏',
    code: 'SAR',
  },
  SDG: {
    name: 'Sudanese Pound',
    symbol: 'SDG',
    code: 'SDG',
  },
  SEK: {
    name: 'Swedish Krona',
    symbol: 'kr',
    code: 'SEK',
  },
  SGD: {
    name: 'Singapore Dollar',
    symbol: '$',
    code: 'SGD',
  },
  SOS: {
    name: 'Somali Shilling',
    symbol: 'Ssh',
    code: 'SOS',
  },
  SYP: {
    name: 'Syrian Pound',
    symbol: 'ل.س.‏',
    code: 'SYP',
  },
  THB: {
    name: 'Thai Baht',
    symbol: '฿',
    code: 'THB',
  },
  TND: {
    name: 'Tunisian Dinar',
    symbol: 'د.ت.‏',
    code: 'TND',
  },
  TOP: {
    name: 'Tongan Paʻanga',
    symbol: 'T$',
    code: 'TOP',
  },
  TRY: {
    name: 'Turkish Lira',
    symbol: 'TL',
    code: 'TRY',
  },
  TTD: {
    name: 'Trinidad and Tobago Dollar',
    symbol: '$',
    code: 'TTD',
  },
  TWD: {
    name: 'New Taiwan Dollar',
    symbol: 'NT$',
    code: 'TWD',
  },
  TZS: {
    name: 'Tanzanian Shilling',
    symbol: 'TSh',
    code: 'TZS',
  },
  UAH: {
    name: 'Ukrainian Hryvnia',
    symbol: '₴',
    code: 'UAH',
  },
  UGX: {
    name: 'Ugandan Shilling',
    symbol: 'USh',
    code: 'UGX',
  },
  UYU: {
    name: 'Uruguayan Peso',
    symbol: '$',
    code: 'UYU',
  },
  UZS: {
    name: 'Uzbekistan Som',
    symbol: 'UZS',
    code: 'UZS',
  },
  VEF: {
    name: 'Venezuelan Bolívar',
    symbol: 'Bs.F.',
    code: 'VEF',
  },
  VND: {
    name: 'Vietnamese Dong',
    symbol: '₫',
    code: 'VND',
  },
  XAF: {
    name: 'CFA Franc BEAC',
    symbol: 'FCFA',
    code: 'XAF',
  },
  XOF: {
    name: 'CFA Franc BCEAO',
    symbol: 'CFA',
    code: 'XOF',
  },
  YER: {
    name: 'Yemeni Rial',
    symbol: 'ر.ي.‏',
    code: 'YER',
  },
  ZAR: {
    name: 'South African Rand',
    symbol: 'R',
    code: 'ZAR',
  },
  ZMK: {
    name: 'Zambian Kwacha',
    symbol: 'ZK',
    code: 'ZMK',
  },
  ZWL: {
    name: 'Zimbabwean Dollar',
    symbol: 'ZWL$',
    code: 'ZWL',
  },
};
