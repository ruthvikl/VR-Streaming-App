import React, { Component } from 'react';
// import { Typography } from "@material-ui/core";
import ForgotCard from '../components/forgotCard';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';

class ForgotPassword extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
      <div
        style={{ padding: "0", height: "40vh",display:'flex',alignItems:'center',justifyContent:'center',backgroundImage:'linear-gradient(180deg, #01ab98, #59b860)'}}
      >
        <div className="topright-btn" >
         <a><Link to={"/login"} style={{textDecoration:'none',color:'#fff'}}> <span>SIGN IN</span></Link></a>
         <a><Link to={"/signup"} style={{textDecoration:'none',color:'#fff'}}> <span>SIGN UP</span></Link></a>
        </div>
        <div>
        <img
          src={logo}
          style={{width:'30%'}}
          alt="logo"
        ></img>
        </div>
</div>

      <div style={{
          backgroundImage: "linear-gradient(180deg, #59b860, #01ab98)",
          height: "60vh"}}>
      
        <ForgotCard/>
        </div>
    </div>
         );
    }
}
 
export default ForgotPassword;