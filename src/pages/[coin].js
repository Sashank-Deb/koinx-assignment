import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import OverviewBox from "../../components/OverviewBox/OverviewBox";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context) {
  // Fetch data from external API
  const slug  = context.params.coin || 'bitcoin';
  let coinData="";
  const res= await fetch(`https://api.coingecko.com/api/v3/coins/${slug}?tickers=false&sparkline=false&localization=false&community_data=false&developer_data=false`);
  const resp = await res.json();
  coinData = {
    "symbol":resp.symbol, 
    "name": slug,
    "image":resp.image?.large, 
    "description":resp.description?.en, 
    "inr_price": resp.market_data?.current_price.inr,
    "inr_24h_change": resp.market_data?.price_change_percentage_24h_in_currency.inr,
    "usd_price": resp.market_data?.current_price.usd,
    "usd_24h_change": resp.market_data?.price_change_percentage_24h_in_currency.usd,
    "rank": resp.market_data?.market_cap_rank,
  };
  // Pass data to the page via props
  return { props: { coinData } }
}

export default function Home({coinData}) {
  return (
    <>
      <Head>
        <title>KoinX: Trusted Crypto Software</title>
        <meta 
          name="description" 
          content="Explore KoinX, the leading crypto tax software offering accurate tax 
          reports and a user-friendly portfolio tracker. 
          Streamline your crypto finances with ease." 
          />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://www.koinx.com/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar/>
        <OverviewBox coinData={coinData}/>
      </main>
    </>
  );
}
