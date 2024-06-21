import React from 'react'
import {Link} from 'react-router-dom';




export default function Tabledata(props) {
  
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // console.log = console.warn = console.error = () => {};
  return (
    <>
    
    <div id='tablediv'>
    {props.parseData.map((item)=>{
      
      return (
        <>
      <Link to={`/coin/${item.id}`}  style={{textDecoration:"none", color:"black"}}>
        <table  className="table table-borderless" style={{width: '76vw',margin: 'auto'}}>
        <tbody >
       <tr id="tabledata"className='d-flex justify-content-evenly' style={{fontSize:'1.6rem',color:'white',padding:'20px 0px 20px 0px'}}>
      <th className='TabD' scope="row" style={{width : '300px', textAlign : 'left'}}><div className='d-flex'><div><img src={item.image} alt="" style={{height : '40px', width : '40px',marginLeft:'10px',marginRight:'10px'}} /></div><div>{item.name}</div></div></th>
      <td className='TabD' style={{width : '300px',textAlign :'right' }}>{"$"+numberWithCommas(item.current_price.toFixed(2))}</td>
      <td className='TabD' style={{width : '300px', textAlign :'right',paddingRight:"27px" ,color:item.price_change_percentage_24h.toFixed(2)>0?'#0ecb81':'#FF0000'}}>{item.price_change_percentage_24h.toFixed(2)>0?'+'+item.price_change_percentage_24h.toFixed(2):item.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='TabD' style={{width : '300px',textAlign :'right'}}>{"$"+numberWithCommas(item.market_cap)}</td>
  
    </tr>
  </tbody>
  <hr style={{padding:'0px', backgroundColor:'white',borderTop:'3px solid white' }} />
</table>

    </Link>
     </>
   )
  
  })}
  
    </div>
    
     
    </>
  )
}
