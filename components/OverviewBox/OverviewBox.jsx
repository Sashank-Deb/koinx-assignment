import React from 'react';
import styles from './OverviewBox.module.scss';
import TradingViewWidget from '../TradingViewChart/TradingViewWidget';
import Image from 'next/image';

const OverviewBox = ({ coinData }) => {  
  if (!coinData) return null;

  const coinName = coinData.name || coinData.coin || "Bitcoin";
  const coinSymbol = coinData.symbol ? coinData.symbol.toUpperCase() : "BTC";
  const coinRank = coinData.rank || 1;
  const coinImage = coinData.image || "/KoinXLogo.svg";

  const usdPrice = typeof coinData.usd_price === 'number' 
    ? coinData.usd_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : '$0.00';

  const inrPrice = typeof coinData.inr_price === 'number'
    ? coinData.inr_price.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })
    : '₹0';

  const change24h = typeof coinData.usd_24h_change === 'number'
    ? coinData.usd_24h_change.toFixed(2)
    : '0.00';

  const isPositive = parseFloat(change24h) >= 0;

  return (
    <article className={styles.wrapper}>
      <div className={styles.currencyHeader}>
        <div className={styles.coinTitleGroup}>
          {coinImage && (
            <Image src={coinImage} unoptimized height={36} width={36} alt={`${coinName} icon`} />
          )}
          <h1 className={styles.coinName}>{coinName}</h1>
          <span className={styles.coinSymbol}>{coinSymbol}</span>
        </div>
        <span className={styles.rankBadge}>Rank #{coinRank}</span>
      </div>

      <div className={styles.priceContainer}>
        <div className={styles.usdRow}>
          <span className={styles.usdPrice}>{usdPrice}</span>
          <span className={`${styles.changeBadge} ${isPositive ? styles.positive : styles.negative}`}>
            {isPositive ? `▲ ${change24h}%` : `▼ ${Math.abs(change24h)}%`}
          </span>
          <span className={styles.timeframe}>(24H)</span>
        </div>
        <div className={styles.inrPrice}>{inrPrice}</div>
      </div>

      <div className={styles.divider} />

      <div className={styles.chartHeader}>
        <h2>{coinName} Price Chart ({coinSymbol})</h2>
      </div>

      <div className={styles.chartContainer}>
        <TradingViewWidget symbol={coinSymbol} interval={30} />
      </div>
    </article>
  );
};

export default OverviewBox;
