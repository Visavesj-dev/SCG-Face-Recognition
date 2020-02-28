import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Login from "./components/login/login";
import Body from "./components/body/body";
import History from "./components/history/history";
import Cctv from "./components/cctv/cctv";
import Profile from "./components/profile";

//import contants
import { server, YES } from "./constants";

//React-router-dom
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

//redux
import { connect } from "react-redux";
import { setApp } from "./actions/AppAction";

const isLoggedIn = () => {
  return localStorage.getItem(server.LOGIN_PASSED) == YES;
};

// Protected Route
const SecuredRoute = (
  { component: Component, ...rest } // รับ component ตัวลูก
) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() === true ? ( // login อยู่ไหม
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

class App extends Component {
  componentDidMount() {
    this.props.setApp(this);
  }

  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };

  render() {
    return (
      <Router forceRefresh={true}>
        <div>
          {isLoggedIn() && <Header />}
          {isLoggedIn() && <Menu />}
          <Switch>
            {/* สร้าง route ผ่าน rounte dom */}
            <Route path="/login" component={Login} />
            <SecuredRoute path="/home" component={Body} />
            <SecuredRoute exact={true} path="/history" component={History} />
            <SecuredRoute path="/cctv" component={Cctv} />
            <SecuredRoute path="/history/profile/:id" component={Profile} />
            <SecuredRoute path="/history/:date" component={History} />

            {/* Redirect to login */}
            <Route exact={true} path="/" component={this.redirectToLogin} />
            <Route path="*" component={this.redirectToLogin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setApp
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
