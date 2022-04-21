const DATA = {
  cards: {
    currs: [
      {
        symbol: 'USD',
        link: 'https://pay.fondy.eu/s/a6gwOXJto6S6k',
      },
      {
        symbol: 'UAH',
        link: 'https://pay.fondy.eu/s/NE9Lf2U318AUclpz',
      },
      { symbol: 'EUR', link: 'https://pay.fondy.eu/s/NcoX' },
    ],
  },
  crypto: {
    currs: [
      {
        token: 'btc',
        wallet: 'bc1q70c7wqzqqhk0nzrux80c0etzhdhydqmkda79g9',
      },
      {
        token: 'eth',
        wallet: '0xc47f5F962b6816d204cb6DbFfbC78d146b42d66c',
      },
      {
        token: 'usdt',
        type: 'ERC-20',
        wallet: '0xc47f5F962b6816d204cb6DbFfbC78d146b42d66c',
      },
      {
        token: 'usdt',
        type: 'trc-20',
        wallet: 'TFc9GzkEK3dz9aB8K3pxxGuDPAGHZBzQqt',
      },
    ],
  },
  bank: {
    currs: [
      {
        label: 'UAH',
        symbol: 'uah',
        size: 24,
        account: `Bank: Oschadbank JSC
MFI 322669
Account № UA263226690000025236300755566
USREOU code 43542231
Recipient: State Agency of Ukraine on Arts and Art Education`,
      },
      {
        label: 'USD, EUR, GBP',
        symbol: 'multicurr',
        size: [72, 24],
        account: `SWIFT: COSBUAUKKIE
BENEFICIARY’S BANK: Branch # 10026/0143 JSC Oschadbank, Ukraine, Kyiv
BENEFICIARY State Agency of Ukraine on Arts and Artistic Education
Ukraine, Kyiv, 01001
Borysa Grinchenka Str., 1
IBAN UA263226690000025236300755566`,
      },
    ],
  },
}

export default DATA
