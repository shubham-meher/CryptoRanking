import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import moment from 'moment';
import Spinner from './Spinner';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export default function HistoryChart  () {
        const {coinId} = useParams ();
        const [chart, setChart] = useState({});
        
        const handle1D=()=>{
          chartData('1');
          setFormat('MMMM Do , h:mm:ss a')
        }
        const handle1W=()=>{
          chartData('7');
          setFormat('MMMM Do')
        }
        const handle1M=()=>{
          chartData('30');
          setFormat('MMMM Do')
        }
        const handle1Y=()=>{
          chartData('365');
          setFormat('MMMM YYYY')
        }
        const [loading, setloading] = useState(false);
        const [format, setFormat] = useState('MMMM Do , h:mm:ss a');
        const chartData = async (days) => {
            let url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
            setloading(true);
            let data = await fetch(url);
            let parsedata = await data.json();
            setloading(false);
            setChart(parsedata);
          }
          useEffect(() => {
            chartData('1');
            // eslint-disable-next-line
          }, []);
        const coinChartData = chart.prices?.map(value => ({ x: value[0],
          y: value[1].toFixed(2)}));
          console.log(coinChartData);
           const options = {
            responsive: true
            }
            const data = {
              labels: coinChartData?.map(value => moment(value.x).format(format)),
            datasets: [
            {
                fill:true,
                label: coinId,
                data: coinChartData?.map(val=>val.y),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ]
            }
            
  return (
    <>
    <div   >
            <div className="btn-group  " role="group" aria-label="Default button group" style={{margin : '50px 0px',zIndex:'0'}}>
            <button type="button" className="btn btn-outline-success rounded mx-3" onClick={handle1D}>1 D</button>
            <button type="button" className="btn btn-outline-success rounded mx-3" onClick={handle1W}>1 W</button>
            <button type="button" className="btn btn-outline-success rounded mx-3" onClick={handle1M}>1 M</button>
            <button type="button" className="btn btn-outline-success rounded mx-3" onClick={handle1Y}>1 Y</button>
            </div>
            <div style={{overflow : 'auto'}}>

    <div id='chart' style={{margin : 'auto', overflow : 'hidden',width:'80%'}}>
    {loading && <div id="spinner" style={{alignItems:'center',display:'flex',justifyContent:'space-around'}}><Spinner/></div>}
      <Line options={options} data={data} />
    </div>
            </div>
    </div>
    </>
  )
}


