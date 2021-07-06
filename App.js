// import './App.css';
import { NativeRouter,Redirect,Switch, Route } from "react-router-native";
// import Lectures from "./pages/lectures";
import { NavigationContainer } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './pages/login'
import SignUp from './pages/signUp'
// import ForgotPassword from './pages/forgotPassword'
import React from 'react';
import axios from 'axios';
export default class App extends React.Component {
  state={};
  componentDidMount() {
    axios.get("lectures").then(
      (res) => {
        console.log('componentdidmount')
        console.log(res.data,'res daata in  lecures')
        this.setLectures(res.data)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setLectures = lectures =>{
    this.setState({
      lectures:lectures
    })
    console.log('setstate',lectures)

  }
  render(){

  
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
      // <NativeRouter>
      //   <Route path="/login">
      //     <Login setLectures={this.setLectures} />
      //   </Route>
      //   <Route path="/lectures">
      //     <Lectures lectures={this.state.lectures} setLectures={this.setLectures}/>
      //   </Route>
      //   <Route path="/signUp">
      //     <SignUp/>
      //   </Route>
      //   <Route path="/forgot">
      //     <ForgotPassword/>
      //   </Route>
      //   <Route path="/" component={Login}/>
      //   <Route path="/signup" component={SignUp}/>
      //   </NativeRouter>
  );
}
}