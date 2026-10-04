const COIN_DATABASE = {
  bitcoin: {
    symbol: 'btc',
    name: 'Bitcoin',
    coin: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    description: 'Bitcoin is the first decentralized digital currency, enabling peer-to-peer transfers across the globe without intermediaries.',
    inr_price: 5642100,
    inr_24h_change: 2.51,
    usd_price: 67850.50,
    usd_24h_change: 2.51,
    rank: 1,
  },
  ethereum: {
    symbol: 'eth',
    name: 'Ethereum',
    coin: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    description: 'Ethereum is a decentralized open-source blockchain featuring smart contract functionality.',
    inr_price: 292800,
    inr_24h_change: 1.84,
    usd_price: 3520.75,
    usd_24h_change: 1.84,
    rank: 2,
  },
  solana: {
    symbol: 'sol',
    name: 'Solana',
    coin: 'Solana',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    description: 'Solana is a high-performance blockchain supporting builders around the world create crypto apps that scale today.',
    inr_price: 12080,
    inr_24h_change: 4.12,
    usd_price: 145.30,
    usd_24h_change: 4.12,
    rank: 5,
  },
  cardano: {
    symbol: 'ada',
    name: 'Cardano',
    coin: 'Cardano',
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    description: 'Cardano is a proof-of-stake blockchain platform designed to bring about positive global change.',
    inr_price: 37.40,
    inr_24h_change: -1.25,
    usd_price: 0.45,
    usd_24h_change: -1.25,
    rank: 10,
  },
  dogecoin: {
    symbol: 'doge',
    name: 'Dogecoin',
    coin: 'Dogecoin',
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
    description: 'Dogecoin is an open-source peer-to-peer cryptocurrency based on the Popular "doge" Internet meme.',
    inr_price: 10.00,
    inr_24h_change: -0.85,
    usd_price: 0.12,
    usd_24h_change: -0.85,
    rank: 8,
  }
};

export function getDummyCoinData(slug = 'bitcoin') {
  const key = slug.toLowerCase();
  if (COIN_DATABASE[key]) {
    return COIN_DATABASE[key];
  }

  const formattedName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    symbol: slug.slice(0, 4).toLowerCase(),
    name: formattedName,
    coin: formattedName,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    description: `${formattedName} price performance and chart overview.`,
    inr_price: 8300,
    inr_24h_change: 1.2,
    usd_price: 100.00,
    usd_24h_change: 1.2,
    rank: 99,
  };
}

export function getAllDummyCoins() {
  return Object.values(COIN_DATABASE);
}
