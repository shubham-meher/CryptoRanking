import React from 'react'

import {FaFacebook} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <div style={{margin:"50px",color:'white'}}>
        <hr />
      <footer>
        <div className="container" style={{display:'flex',justifyContent:'center',margin:'20px auto'}} >
          <div style={{height:'48px',width:'48px',margin:'20px'}}>
            <FaFacebook id='fb' style={{height:"45px", width:"45px"}}/>
            </div>
            <div style={{height:'48px',width:'48px',margin:'20px'}}>
              <FaYoutube id='fb' style={{height:"47px", width:"47px"}}/>
            </div>
            <div style={{height:'48px',width:'48px',margin:'20px'}}>
              <FaTwitter id='fb' style={{height:"45px", width:"45px"}}/>
            </div>
        </div>
        <div className="container" style={{color:'white'}}>
            <p style={{margin:"20px", cursor:"pointer"}}  ><span className="footergrad" >Privacy</span></p>
            <p style={{margin:"20px", cursor:"pointer"}}  ><span className="footergrad" >Terms of Use</span></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
