import React, { Component } from "react";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Login from "./components/login/login";
import Body from "./components/body/body";
import History from "./components/history/history";
import Cctv from "./components/cctv/cctv";
import Profile from "./components/profile";

//React-router-dom
import {
  BrowserRouter as Router,
  Route,
  Redirect
  // Switch
} from "react-router-dom";

//redux
import { connect } from "react-redux";
import { setApp } from "./actions/AppAction";

class App extends Component {
  componentDidMount() {
    this.props.setApp(this);
  }

  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };

  redirectToHome = () => {
    return <Redirect to="/home" />;
  };

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Menu />

          {/* สร้าง route ผ่าน rounte dom */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Body} />
          <Route exact path="/history" component={History} />
          <Route exact path="/cctv" component={Cctv} />
          <Route exact path="/history/profile/:id" component={Profile} />
          <Route exact path="/history/:date" component={History} />

          {/* Redirect to login */}
          {/* <Route exact={true} path="/" component={this.redirectToLogin} />
      <Route exact={true} path="*" component={this.redirectToLogin} /> */}

          {/* Redirect to Home */}
          <Route exact={true} path="/" component={this.redirectToHome} />
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
