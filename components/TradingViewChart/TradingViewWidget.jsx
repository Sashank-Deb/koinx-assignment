// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ symbol = "btc", interval = 30 }) {
  const container = useRef();
  useEffect(() => {
    const containerRef = container.current;
    if (!containerRef) return;
    containerRef.innerHTML = '<div class="tradingview-widget-container__widget" style="height: calc(100% - 32px); width: 100%;"></div>';
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const formattedSymbol = symbol 
      ? (symbol.includes(':') ? symbol : `BITSTAMP:${symbol.toUpperCase()}USD`)
      : "BITSTAMP:BTCUSD";

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: formattedSymbol,
      interval: String(interval),
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "rgba(255, 255, 255, 1)",
      gridColor: "rgba(66, 66, 66, 0.06)",
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      calendar: false,
      hide_volume: false,
      support_host: "https://www.tradingview.com"
    });

    containerRef.appendChild(script);

    return () => {
      if (containerRef) {
        containerRef.innerHTML = '';
      }
    };
  }, [interval, symbol]);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
