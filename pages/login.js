// import { Typography } from "@material-ui/core";
import {Typography} from "react-native-material-ui"
import React from "react";
import LoginCard from "../components/loginCard";
import logo from '../logo.svg';
import {Link, Route} from 'react-router-dom';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class LoginPage extends React.Component {
  render(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
      }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

{/* <div>
      <div style={{ padding: "0", height: "40vh",display:'flex',alignItems:'center',justifyContent:'center',backgroundImage:'linear-gradient(180deg, #01ab98, #59b860)'}}>
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
        <div className="login-title">
          <Typography
            align="left"
            style={{ color: "#fff", fontWeight: "bold", fontSize: "30px" }}
          >
            Welcome, Back
          </Typography>
          <Typography
            align="left"
            style={{ marginBottom: "5%", color: "#fff" }}
          >
            Sign In to continue
          </Typography>
        </div>
</div>

      <div style={{
          backgroundImage: "linear-gradient(180deg, #59b860, #01ab98)",
          height: "60vh"}}>
          {console.log("this.props.setLectures",this.props.setLectures)}
         <LoginCard setLectures ={this.props.setLectures}/>
        </div>
    </div> */}