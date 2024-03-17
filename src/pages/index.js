import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TradingViewWidget from "../../components/TradingViewChart/TradingViewWidget";
import Navbar from "../../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <TradingViewWidget/>

      </main>
    </>
  );
}
