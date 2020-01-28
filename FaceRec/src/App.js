import React, { Component } from 'react'
import Header from './components/header/header'
import Menu from './components/menu/menu'
import Login from './components/login/login';
import Body from './components/body/body';
import History from './components/history/history'
import Employee from './components/employee/employee';

//React-router-dom
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Footer from './components/footer/footer';





export default class App extends Component {
 
  redirectToLogin = () => {
    return <Redirect to="/login" /> ;
    
  }
  
  redirectToHome = () => {
    return <Redirect to="/home" />
  }

  
  
  render() {
    return (
      <Router>
      <div>
      <Header /> 
      
      <Menu />

      {/* สร้าง route ผ่าน rounte dom */}
      <Route exact path='/login' component={Login} />
      <Route exact path='/home' component={Body} />
      <Route exact path='/history' component={History} />
      <Route exact path='/employee' component={Employee} />

      {/* Redirect to login */}
      {/* <Route exact={true} path="/" component={this.redirectToLogin} />
      <Route exact={true} path="*" component={this.redirectToLogin} /> */}
      
      {/* Redirect to Home */}
      <Route exact={true} path="/" component={this.redirectToHome} />

        
       
        
      </div>
      </Router>
    )
  }
}
