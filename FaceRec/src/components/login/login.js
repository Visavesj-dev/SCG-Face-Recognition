import React, { Component } from "react";
import { login, autoLogin } from "./../../actions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: "",
       password: ""
    }
  }

  componentDidMount(){
    this.props.autoLogin(this.props.history);
  }

  showError = ()=>{
    return (
      <div className="alert alert-danger alert-dismissible">
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h4><i className="icon fa fa-ban" /> Error!</h4> Incorrect Username or Password
    </div>
    )
  }
  
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
              onChange={(e)=> this.setState({username: e.target.value})}
                type="username"
                className="form-control"
                placeholder="Username"
              />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input
              onChange={(e)=> this.setState({password: e.target.value})}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>

             {/* Ternery condition */}
             {this.props.LoginReducer.isError ? this.showError() : null }

            <div className="row">
              {/* /.col */}
              <div className="col-md-12">
                <button
                onClick={(e)=> {
                  e.preventDefault()
                  this.props.login(this.props.history , this.state)
                }}
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

const mapStateToProps = ({ LoginReducer }) => ({ LoginReducer })

const mapDispatchToProps = {
  login, autoLogin
}

export default connect(mapStateToProps , mapDispatchToProps)(Login)

