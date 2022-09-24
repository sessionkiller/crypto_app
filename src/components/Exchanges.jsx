import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { ExclamationCircleOutlined } from '@ant-design/icons'

import Loader from './Loader';
import { useState } from 'react';

const { Text } = Typography;
const { Panel } = Collapse;

const DUMMY = [
  {
    "uuid": "Qwsogvtv82FCd",
    "symbol": "BTC",
    "name": "Bitcoin",
    "color": "#f7931A",
    "iconUrl": "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg",
    "marketCap": "365536814152",
    "price": "19078.613725827217",
    "listedAt": 1330214400,
    "tier": 1,
    "change": "1.62",
    "rank": 1,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc",
    "volume": "38866039654",
    "btcPrice": "1",
    "numberOfMarkets": 11,
    "marketShare": 20,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "razxDUgYGNAdQ",
    "symbol": "ETH",
    "name": "Ethereum",
    "color": "#3C3C3D",
    "iconUrl": "https://cdn.coinranking.com/rk4RKHOuW/eth.svg",
    "marketCap": "163124704594",
    "price": "1335.5168819278538",
    "listedAt": 1438905600,
    "tier": 1,
    "change": "3.14",
    "rank": 2,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/razxDUgYGNAdQ+ethereum-eth",
    "volume": "19800474270",
    "btcPrice": "0.07000072967146087",
    "numberOfMarkets": 110,
    "marketShare": 70,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "HIVsRcGKkPFtW",
    "symbol": "USDT",
    "name": "Tether USD",
    "color": "#22a079",
    "iconUrl": "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
    "marketCap": "68041692934",
    "price": "1.0012801139721488",
    "listedAt": 1420761600,
    "tier": 1,
    "change": "0.26",
    "rank": 3,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
    "volume": "41291964416",
    "btcPrice": "0.000052481806506554",
    "numberOfMarkets": 91,
    "marketShare": 53,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "aKzUVe4Hh_CON",
    "symbol": "USDC",
    "name": "USDC",
    "color": "#7894b4",
    "iconUrl": "https://cdn.coinranking.com/jkDf8sQbY/usdc.svg",
    "marketCap": "49758609179",
    "price": "1.000870801924213",
    "listedAt": 1539043200,
    "tier": 1,
    "change": "0.07",
    "rank": 4,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/aKzUVe4Hh_CON+usdc-usdc",
    "volume": "3847144423",
    "btcPrice": "0.000052460352534383",
    "numberOfMarkets": 1100,
    "marketShare": 60,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "WcwrkfNI4FUAe",
    "symbol": "BNB",
    "name": "Binance Coin",
    "color": "#e8b342",
    "iconUrl": "https://cdn.coinranking.com/B1N19L_dZ/bnb.svg",
    "marketCap": "40080008819",
    "price": "276.6508709035223",
    "listedAt": 1503014400,
    "tier": 1,
    "change": "1.90",
    "rank": 5,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/WcwrkfNI4FUAe+binancecoin-bnb",
    "volume": "947547564",
    "btcPrice": "0.014500575087854146",
    "numberOfMarkets": 200,
    "marketShare": 59,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "-l8Mn2pVlRs-p",
    "symbol": "XRP",
    "name": "XRP",
    "color": "#000000",
    "iconUrl": "https://cdn.coinranking.com/B1oPuTyfX/xrp.svg",
    "marketCap": "21625317177",
    "price": "0.4922041698449021",
    "listedAt": 1421798400,
    "tier": 1,
    "change": "4.53",
    "rank": 6,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/-l8Mn2pVlRs-p+xrp-xrp",
    "volume": "4691827635",
    "btcPrice": "0.000025798738677674",
    "numberOfMarkets": 190,
    "marketShare": 1,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "vSo2fu9iE1s0Y",
    "symbol": "BUSD",
    "name": "Binance USD",
    "color": "#f0b90b",
    "iconUrl": "https://cdn.coinranking.com/6SJHRfClq/busd.svg",
    "marketCap": "21064884046",
    "price": "1.0014521339589322",
    "listedAt": 1563197940,
    "tier": 1,
    "change": "0.28",
    "rank": 7,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/vSo2fu9iE1s0Y+binanceusd-busd",
    "volume": "8527762887",
    "btcPrice": "0.000052490822884225",
    "numberOfMarkets": 11,
    "marketShare": 20,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "qzawljRxB5bYu",
    "symbol": "ADA",
    "name": "Cardano",
    "color": "#3cc8c8",
    "iconUrl": "https://cdn.coinranking.com/ryY28nXhW/ada.svg",
    "marketCap": "14326667008",
    "price": "0.4604796796361153",
    "listedAt": 1506902400,
    "tier": 1,
    "change": "1.98",
    "rank": 8,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/qzawljRxB5bYu+cardano-ada",
    "volume": "754626400",
    "btcPrice": "0.000024135908732863",
    "numberOfMarkets": 11,
    "marketShare": 20,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "zNZHO_Sjf",
    "symbol": "SOL",
    "name": "Solana",
    "color": "#9cddec",
    "iconUrl": "https://cdn.coinranking.com/yvUG4Qex5/solana.svg",
    "marketCap": "11833122223",
    "price": "33.36544039599552",
    "listedAt": 1586539320,
    "tier": 1,
    "change": "5.14",
    "rank": 9,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/zNZHO_Sjf+solana-sol",
    "volume": "1438836101",
    "btcPrice": "0.001748839872512742",
    "numberOfMarkets": 11,
    "marketShare": 20,
    "description": "<p>Description of <b>THE</b> coin</p>"
  },
  {
    "uuid": "a91GCGd_u96cF",
    "symbol": "DOGE",
    "name": "Dogecoin",
    "color": "#c2a633",
    "iconUrl": "https://cdn.coinranking.com/H1arXIuOZ/doge.svg",
    "marketCap": "8612027325",
    "price": "0.06491277389224524",
    "listedAt": 1391212800,
    "tier": 1,
    "change": "4.99",
    "rank": 10,
    "lowVolume": false,
    "coinrankingUrl": "https://coinranking.com/coin/a91GCGd_u96cF+dogecoin-doge",
    "volume": "1633273502",
    "btcPrice": "0.000003402384199664",
    "numberOfMarkets": 99,
    "marketShare": 20,
    "description": "<p>Description of <b>THE</b> coin</p>"
  }
 
];

const Exchanges = () => {
  const [ exchangesList, setExchangesList] = useState(DUMMY);

  return (
    <>
      <h1 style={{color: 'red', textAlign: 'center'}}><ExclamationCircleOutlined /> <span>Dummy Data</span></h1>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24} key={exchange.uuid}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;