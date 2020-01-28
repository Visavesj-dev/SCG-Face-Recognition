import React, { Component } from "react";

export default class login extends Component {
  render() {
    return (
      <div className="login-box ">
        {/* /.login-logo */}
        <div  style={{backgroundColor: "whitesmoke", borderRadius: 10 }}  className="login-box-body">
          <div className="login-logo  login">
            <b>Face</b>Recognition
          </div>
          <form action="../../index2.html">
            <div className="form-group has-feedback">
              <input
                type="username"
                className="form-control"
                placeholder="Username"
              />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              {/* /.col */}
              <div className="col-md-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
              {/* /.col */}
            </div>
          </form>
        </div>
        {/* /.login-box-body */}
      </div>
    );
  }
}
