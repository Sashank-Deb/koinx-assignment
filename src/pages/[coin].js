import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import OverviewBox from "../../components/OverviewBox/OverviewBox";
import { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { getDummyCoinData } from "@/lib/dummyCoinData";

export async function getServerSideProps(context) {
  const slug = context.params?.coin || 'bitcoin';
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${slug}?tickers=false&sparkline=false&localization=false&community_data=false&developer_data=false`);
    if (!res.ok) {
      throw new Error(`CoinGecko API status: ${res.status}`);
    }
    const resp = await res.json();
    const coinData = {
      symbol: resp.symbol || slug,
      name: resp.name || slug,
      coin: resp.name || slug,
      image: resp.image?.large || resp.image?.small || '',
      description: resp.description?.en || '',
      inr_price: resp.market_data?.current_price?.inr || 0,
      inr_24h_change: resp.market_data?.price_change_percentage_24h_in_currency?.inr || 0,
      usd_price: resp.market_data?.current_price?.usd || 0,
      usd_24h_change: resp.market_data?.price_change_percentage_24h_in_currency?.usd || 0,
      rank: resp.market_data?.market_cap_rank || 1,
    };
    return { props: { coinData } };
  } catch (error) {
    // Serve data from local dummy API database
    const coinData = getDummyCoinData(slug);
    return { props: { coinData } };
  }
}

export default function Home({ coinData }) {
  useEffect(() => {
    if (coinData) {
      console.log("Coin Data:", coinData);
    }
  }, [coinData]);

  return (
    <>
      <Head>
        <title>{coinData?.name ? `${coinData.name} - KoinX` : "KoinX: Trusted Crypto Software"}</title>
        <meta 
          name="description" 
          content="Explore KoinX, the leading crypto tax software offering accurate tax reports and a user-friendly portfolio tracker." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Breadcrumbs coin={coinData?.name || coinData?.coin || 'bitcoin'} />
        <OverviewBox coinData={coinData} />
      </main>
    </>
  );
}
