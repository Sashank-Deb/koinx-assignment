import React from 'react';
import styles from './OverviewBox.module.scss'
import TradingViewWidget from '../TradingViewChart/TradingViewWidget';
import Image from 'next/image';

const OverviewBox = ({coinData}) => {  

  return (
    <article className={styles.wrapper}>
      <div className={styles.currencyContainer}>
        <div>
          <Image src={coinData.image} height={50} width={50} alt={coinData.coin + "icon"}/>
          <p>
            {coinData.coin}
            <span>{}</span>
          </p>
          <p>Rank #{coinData.rank}</p>
        </div>
      </div>
      <TradingViewWidget symbol={coinData.symbol} interval={30}/>
    </article>
  )
}

export default OverviewBox;
