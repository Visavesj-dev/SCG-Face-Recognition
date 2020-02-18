import React, { Component } from "react";
import styles from "./history.module.css";
import { Calendar } from "react-date-range";

import { withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { HistoryFetch, EmployeesFetch } from "../../actions";

class History extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    //Change here
    this._isMounted = true;

    // this.lookupInterval = setInterval(() => {
    if (this._isMounted) {
      this.props.HistoryFetch(this.props.match.params.date);
    }
    // }, 500);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.lookupInterval);
  }

  viewProfile(history) {
    this.props.history.push("/history/profile/" + history.id[0]);
  }

  handleSelect(date) {
   
    var date = new Date(date);
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = yyyy + "-" + mm + "-" + dd;
    console.log(date);

    this.props.history.replace("/history/" + date);

    this.props.appReducer.app.forceUpdate()
  }

  ConvertDAte = times => {
    if (times != null) {
      var createdDate = times;
      var convert = createdDate.replace(
        /(\d{4}-\d{2}-\d{2})+(\D)+(\d{2}:\d{2})+(:\d{2}.\d{3}\D)/,
        "$1  $3"
      );

      convert = new Date(convert);
      const date = convert.toLocaleDateString();
      const time = convert.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
      return date + " " + time;
    } else {
      return null;
    }
  };

  showEmployee = () => {
    if (this.props.employees != null) {
      //ค่าที่เข้ามาห้ามเป็น null
      return (
        this.props.employees.recordsets &&
        this.props.employees.recordsets.map(historys => {
          return historys.map((historys, index) => {
            return (
              <tr key={index} onClick={() => this.viewProfile(historys)}>
                <td>{this.ConvertDAte(historys.time_in)}</td>
                <td>{this.ConvertDAte(historys.time_out)}</td>
                <td>
                  {historys.first_name} {historys.last_name}
                </td>
                <td>{historys.department}</td>
                <td>
                  <img src={historys.img} className={styles.pics}></img>
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
            <div>
              <h1 style={{ float: "left", marginTop: -5 }}>History Tables</h1>

              {/*  */}

              <button
                type="button"
                className="btn btn-info btn-lg"
                data-toggle="modal"
                data-target="#myModal"
                style={{ float: "right", marginTop: -5, marginBottom: 10 }}
              >
                Open Modal
              </button>
              <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                      <h4 className="modal-title">Select Date</h4>
                    </div>
                    <div className="modal-body">
                      <center data-dismiss="modal">
                        <Calendar onChange={this.handleSelect} />
                      </center>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

// function mapStateToProps(state) {
//   return { employees: state.employees };
// }

//Destructuring form
const mapStateToProps = ({ employees, appReducer }) => ({
  employees,
  appReducer
});

export default connect(mapStateToProps, { HistoryFetch })(withRouter(History));
