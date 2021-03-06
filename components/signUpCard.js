import React from "react";
import Card from 'react-native-paper';
import axios from 'axios';
import { Redirect, Route } from "react-router";
export default class SignUpCard extends React.Component {
  state={};
  
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email:this.email,
      username:this.email,
      given_name:this.firstName,
      family_name:this.lastName,
      password:this.password,
      permission_level:"student"
    };
    const headers ={
      'Content-Type': 'application/json',
    }
    console.log(data);
    axios
    .post("register", data,{headers:headers})
      .then((res) => {
      
        this.setState({ registered: true });
      })
      
      .catch((err) => {
        console.log(err);
      });
    
  }
  render() {
    if(this.state.registered)
    {
    return (
      <Route><Redirect to="/login"/></Route>
      
    );
          }
          else{
            return(
              <Card className="signup-card">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group m-3">
                  <label style={{ float: "left" }}>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your First Name"
                    onChange={(e) => (this.firstName = e.target.value)}
                    required
                  ></input>
                </div>
                <div className="form-group m-3">
                  <label style={{ float: "left" }}>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Last Name"
                    onChange={(e) => (this.lastName = e.target.value)}
                    required
                  ></input>
                </div>
                <div className="form-group m-3">
                  <label style={{ float: "left" }}>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email Address"
                    onChange={(e) => (this.email = e.target.value)}
                    required
                  ></input>
                </div>
                <div className="form-group m-3">
                  <label style={{ float: "left" }}>Password</label>
                  <input
                    type="password"
                    minlength="6"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={(e) => (this.password = e.target.value)}
                    required
                  ></input>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    required
                  />
                  <label
                    className="form-check-label "
                    for="flexCheckChecked"
                    style={{ float: "left", fontWeight: "bold" }}
                  >
                    By signing up you agree to our <span> conditions</span> and{" "}
                    <span style={{ color: "#01ab98" }}>privacy policy</span>
                  </label>
                </div>
                <button
                  className="btn btn-primary btn-block "
                  style={{
                    width: "80%",
                    backgroundImage: "linear-gradient(180deg, #59b860, #01ab98)",
                    border: "0px",
                    marginTop: "5%",
                  }}
                >
                  SIGN UP
                </button>
              </form>
            </Card>
            )
          }
  }
}
