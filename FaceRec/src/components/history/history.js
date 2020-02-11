import React, { Component } from "react";
import axios from "axios";
import styles from "./history.module.css";
import { withRouter } from "react-router-dom";

class History extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      history: null
    };
  }

  async componentDidMount() {
    //Change here
    this._isMounted = true;
    // External Database
    await axios.get("http://localhost:3030").then(res => {
      // axios.get("http://192.168.137.1:8000/history").then(res => {
      // await axios.get("http://localhost:3000/products").then(res => {
      if (this._isMounted) {
        const script = document.createElement("script");

        script.src = "js/content.js";
        script.async = true;

        document.body.appendChild(script);
        console.log(this._isMounted);
        {
          this.setState({ history: res.data });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  viewProfile(history) {
    // this.props.history.push("history/profile/" + history.id);
    this.props.history.push("history/profile/" + history.id);
  }

  showEmployee = () => {
    if (this.state.history != null) { //ค่าที่เข้ามาห้ามเป็น null 
      return (
        //Change here

        this.state.history.recordsets &&
        this.state.history.recordsets.map(historys => {
          return historys.map((historys,index) => {
        
        //test
        //     this.state.history &&
        // this.state.history.map(historys => {
        //test
            return (
              <tr key={index} onClick={() => this.viewProfile(historys)}>
                 <td>
                  {historys.first_name} {historys.last_name}
                </td>
                <td>
                  {historys.first_name} {historys.last_name}
                </td>
                <td>
                  {historys.first_name} {historys.last_name}
                </td>
                <td>{historys.department}</td>
                <td>
                  <img src={historys.picture} className={styles.pics}></img>
                </td> 
             
              </tr>
            );
          
        })
        
      })
      );
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className={styles.bg}>
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>History Tables</h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard" /> Home
                </a>
              </li>
              <li>
                <a href="#">Tables</a>
              </li>
              <li className="active">Data tables</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="row">
              <div className="col-xs-12">
                <div className="box" style={{ overflowX: "scroll" }}>
                  {/* /.box-header */}
                  <div className="box-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>Date/Time In</th>
                          <th>Date/Time Out</th>
                          <th>Name of Employee</th>
                          <th>Department</th>
                          <th>Picture</th>
                        </tr>
                      </thead>
                      <tbody>{this.showEmployee()}</tbody>
                    </table>
                  </div>
                  {/* /.box-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}

export default withRouter(History);
