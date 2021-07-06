import React from "react";
// import {Typography} from '@material-ui/core';
import logo from '../logo.svg';
import SignUpCard from '../components/signUpCard'
import {Link} from 'react-router-dom';

export default function TabsWrappedLabel() {
  return (
    <div style={{ overflowY: 'hidden'}}>
      <div style={{ padding: "0", height: "20vh", backgroundImage:'linear-gradient(180deg, #01ab98, #59b860)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="topright-btn" >
          <a><Link to={"/login"} style={{textDecoration:'none',color:'#fff'}}> <span>SIGN IN</span></Link></a>
          <a><Link to={"/signup"} style={{textDecoration:'none',color:'#fff'}}> <span>SIGN UP</span></Link></a>
        </div>
      <div>
        <img src={logo} alt="logo" style={{width:'30%'}}></img>
      </div>
      <div className="signup-title">
        <Typography align="left" style={{color:'#fff',fontWeight:'bold',fontSize:'30px'}}>
          Welcome, Back
        </Typography>
        <Typography align="left" style={{marginBottom:'5%',color:'#fff'}}>
          Sign In to continue
        </Typography>
      </div>
    </div>
    <div style={{backgroundImage:'linear-gradient(180deg, #59b860, #01ab98)',height:'70vh'}}>
      <SignUpCard/>
    </div>
  </div>
  );
}
