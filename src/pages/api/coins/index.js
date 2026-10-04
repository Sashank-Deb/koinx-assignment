import { getAllDummyCoins } from '@/lib/dummyCoinData';

export default function handler(req, res) {
  const coins = getAllDummyCoins();
  return res.status(200).json({ status: 'success', count: coins.length, data: coins });
}
