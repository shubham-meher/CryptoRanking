import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";
import Chart from './Chart';
import Spinner from './Spinner';

export default function CrypDetail() {
  const { coinId } = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setloading] = useState(false);
  const cryptodata = async () => {
    let url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setloading(false);
    setCoin(parsedata);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    cryptodata();
    // eslint-disable-next-line
  }, [coinId]);
 
    return (
      <>
      {loading && <div id="spinner" style={{alignItems:'center',display:'flex',justifyContent:'space-around',marginTop:'80px'}}><Spinner/></div>}
      <div className='container' id='Container' style={{ marginTop: "8%", display: 'flex', flexDirection: 'row', justifyContent:'center',color:'white',padding:'0px'}}> 
        <div className="image" style={{ marginTop: '2.3%',width:'25%',display: 'flex', flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center',gap:'0.7rem' }}>
          {coin.image ? <img style={{height : '220px', width : '220px'}}src={coin.image.large} alt={coin.id} id='detailimage' /> : null}
          <p style={{ textTransform: "uppercase",marginBottom:'0px',fontSize:'1.75rem'}}><strong>{coin.name}</strong>({coin.symbol})</p>
          <p style={{fontSize:'1.4rem'}}>Rank: #{coin.market_cap_rank}</p>
        </div>
        <div className="info" id="info" style={{ height: '340px', width: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center',marginTop: '2.3%' }}>
          <div id="detailheading" style={{ display: 'flex', justifyContent: 'space-between',fontSize:'1.2rem' }}> 
            <div className="p-2" >Current Price:{' '}<span style={{color:'#0ecb81'}}>{coin.market_data ?"$" + numberWithCommas(coin.market_data.current_price.usd.toFixed(2)) : ""}</span></div>
            <div className="p-2" >Market Cap:{' '}<span style={{color:'#0ecb81'}}>{coin.market_data ?"$" + numberWithCommas(coin.market_data.market_cap.usd.toFixed(2)) : ""}</span></div>
            <div className="p-2" >Price Change(1H):{' '}<span style={{color:coin.market_data ? coin.market_data.price_change_percentage_24h.toFixed(2)>0?'#0ecb81':'#FF0000': ""}}>{coin.market_data ?coin.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}</span></div>
          </div>
          <div className="description" id="description" style={{ height: '300px', width: '800px', overflow: 'auto', textAlign: 'left', padding: '0px',fontSize:'1.2rem',marginTop:'30px' }}>
            <p style={{color:'white'}} dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
            ></p>
          </div>
        </div>
      </div>
      <Chart key={coin.name} />
      </>
    )
           
}

