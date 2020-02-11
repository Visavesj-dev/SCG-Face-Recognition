import React, { Component } from "react";
import styles from "./history.module.css";

import { withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { EmployeesFetch } from "../../actions";

class History extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Change here
    this._isMounted = true;

    if (this._isMounted) {
      this.props.EmployeesFetch();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;

    if (this._isMounted) {
      const script = document.createElement("script");

      script.src = "js/content.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }

  viewProfile(history) {
    this.props.history.push("history/profile/" + history.id);
  }

  showEmployee = () => {
    if (this.props.employees != null) {
      //ค่าที่เข้ามาห้ามเป็น null
      return (
        this.props.employees.recordsets &&
        this.props.employees.recordsets.map(historys => {
          return historys.map((historys, index) => {
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
          });
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

function mapStateToProps(state) {
  return { employees: state.employees };
}

export default connect(mapStateToProps, { EmployeesFetch })(
  withRouter(History)
);
