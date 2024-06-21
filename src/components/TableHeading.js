import React from 'react'

function TableHeading() {
  return (
    <div  id='market' >
    <div >
      <table id='tableheading' className="table table-borderless" style={{width: '76vw',margin: 'auto'}}>
  <tbody>
    <tr  id='tableheading'className='d-flex justify-content-evenly'style={{color:'black', borderRadius:'8px 8px 0px 0px'}} >
      <th className='TabH' style={{ textAlign : 'left', fontSize : '1.8rem', width : '300px'}}>Coin</th>
      <th className='TabH' style={{ textAlign : 'right', fontSize : '1.8rem', width : '300px'}}>Price</th>
      <th className='TabH' style={{ textAlign : 'right ', fontSize : '1.8rem', width : '300px'}}>1H Change</th>
      <th className='TabH' style={{ textAlign : 'right ', fontSize : '1.8rem',width : '300px'}}>MarketCap</th>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  )
}

export default TableHeading
