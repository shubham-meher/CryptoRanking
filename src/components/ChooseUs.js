import React from 'react'
import illus from './illus.png'

function ChooseUs() {
  return (
    <section id='chooseus' style={{paddingTop : "100px",marginTop:'240px' }}>

    <div>
      <div className="container my-3">
        <h1 id='heading2' style={{fontSize: '7rem', marginBottom:'70px'}}>WHY <span id='choosegrad'>CHOOSE US</span></h1>
        <div id='chooseUs' style={{display : 'flex', justifyContent : 'space-evenly',color:'black'}}>
            <div style={{marginBottom:"40px"}}>

            
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">CONNECT YOUR WALLET</h5>
            <p className="card-text">Use Trust Wallet, Metamask or to connect to the app.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
            <div className="card-body">
            <h5 className="card-title">SELECT YOUR QUANTITY</h5>
            <p className="card-text">Upload your crypto and set a title, description and price.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">CONFIRM TRANSACTION</h5>
            <p className="card-text">Earn by selling your crypto on our marketplace.</p>
        </div>
        </div>
        </div>
        <div className='object' style={{zIndex :'-1'}}>

        <img id='bitcoinimage' src={illus} alt="" style={{width: '550px', height: '550px',}} />
        </div>
        <div>

            
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">RECEIVE YOUR OWN NFTS</h5>
            <p className="card-text">Invest all your crypto at one place on one platform.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">TAKE A MARKET TO SELL</h5>
            <p className="card-text">Discover, collect the right crypto collections to buy or sell.</p>
        </div>
        </div>
        <div className="card my-3" style={{width: '18rem',zIndex : '-1'}}>
        <div className="card-body">
            <h5 className="card-title">DRIVE YOUR COLLECTION</h5>
            <p className="card-text">We make it easy to Discover, Invest and manage.</p>
        </div>
        </div>
        </div>
      </div>
    </div>
        </div>
            </section>
  )
}

export default ChooseUs
