import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link'



export default function Navbar() {
  const [parseData, setparseData] = useState();
  
  const fetchData= async ()=>{
    let url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=32&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=2'
   let data=await fetch(url);
   let parsedata=await data.json();
   setparseData(parsedata);
   
   
  }
  useEffect(() => {
    fetchData();
   // eslint-disable-next-line
    
   }, []);
   
   const [filteredData, setfilteredData] = useState([]);
   const handleFilter=(event)=>{
    const newfilter=parseData?.filter((value)=>{
      return value.name.toLowerCase().includes(event.target.value?.toLowerCase())
    }) 
    
    if(event.target.value === ''){
      setfilteredData([])
   }
   else{
    setfilteredData(newfilter)
   }
   }
   const handleOnCLick=()=>{
    setfilteredData([]);
   }
   const [forHome, setforHome] = useState('nav-link active');
   const [forMarket, setForMarket] = useState('nav-link');
   const [forChooseUs, setForChooseUs] = useState('nav-link');
   const handleHome=()=>{
    setForMarket('nav-link');
    setForChooseUs('nav-link');
    setforHome('nav-link active');
   }
   const handleMarket=()=>{
    setForMarket('nav-link active');
    setForChooseUs('nav-link');
    setforHome('nav-link');
   }
   const handleChooseUS=()=>{
    setForMarket('nav-link');
    setForChooseUs('nav-link active');
    setforHome('nav-link');
   }
  return (
    <div >
      <nav id='navbarr'className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ zIndex : '1',width:'100vw',margin:'0px'}}>
  <div className="container-fluid" style={{color:'white',width:'100vw',margin:'0px'}}>
    <HashLink className="navbar-brand" to="/#homepage"><strong>CryptoR</strong></HashLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul id='navitems'className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '24vw', gap:'1.5vw' }}>
        <li className="nav-item" >
          <HashLink className={forHome} aria-current="page" to="/#homepage" onClick={handleHome}><strong>Home</strong></HashLink>
        </li>
        <li className="nav-item">
          <HashLink className={forMarket} to="/#tablecoin" onClick={handleMarket}><strong>Market</strong></HashLink>
        </li>
        <li className="nav-item">
          <HashLink className={forChooseUs} to="/#chooseus" onClick={handleChooseUS}><strong>Choose Us</strong></HashLink>
        </li>
      </ul>
    </div>
  </div>
  <form id='search' className="d-flex " style={{position : 'fixed', top : '14px',right:'6.5vw' , zIndex : '1'}}>
        <input  id='input' name='input' className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={handleFilter}/>
      </form>
{filteredData?.length!==0 &&  (<div className="dataResult" style={{position : 'fixed',top : '50px',right:'0px',backgroundColor:"#2C3E50"}} >
  {filteredData?.map((item)=>{
    return  <div id="searchlist" ><Link to={`/coin/${item.id}`} style={{textDecoration:'none'}} onClick={handleOnCLick} ><div style={{padding:"7px", textAlign:"left"}}><span style={{paddingLeft:"15px", color:"white"}}><img src={item.image} alt="" style={{height:"23px", width:"23px",marginRight:'10px'}} /> {item.name}</span></div></Link></div>
  })}
</div>)}
</nav>

    </div>
  )
}
