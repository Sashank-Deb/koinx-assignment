import { getDummyCoinData } from '@/lib/dummyCoinData';

export default function handler(req, res) {
  const { coin } = req.query;
  const data = getDummyCoinData(coin || 'bitcoin');
  return res.status(200).json(data);
}
