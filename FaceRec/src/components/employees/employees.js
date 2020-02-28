import React, { Component } from "react";
import styles from "./employees.module.css";
import { withRouter } from "react-router-dom";
import "./employees.module.css";

class Employees extends Component {
  viewProfile(employ) {
    this.props.history.push("history/profile/" + employ.id[0]);
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

  render() {
    return (
      <div>
        { this.props.employee && (
          <div>
            <div className="box-header with-border">
              <div className="img-responsive pad">
                <img
                  src={this.props.employee.img}
                  alt="Photo"
                  className={styles.pics}
                />
              </div>
              <h1 className="product-title text-center">
                {this.props.employee.first_name} {this.props.employee.last_name}
              </h1>
            </div>
            <div className="box-body">
              <h4>
                <i className="fa fa-building margin-r-5" />
                Department
              </h4>
              <h3 className="text-black">
                <blockquote>
                  <strong>{this.props.employee.department}</strong>
                </blockquote>
              </h3>
              <hr />

              <h4>
                <i className="fa fa-sign-in margin-r-5" /> Time In
              </h4>

              <h3 className="text-black">
                <blockquote>
                  <strong>
                    {this.ConvertDAte(this.props.employee.time_in)}
                  </strong>
                </blockquote>
              </h3>
              <hr />

              <h4>
                <i className="fa fa-sign-out margin-r-5" /> Time Out
              </h4>

              <h3 className="text-black">
                <blockquote>
                  <strong>
                    {this.ConvertDAte(this.props.employee.time_out)}
                  </strong>
                </blockquote>
              </h3>
            </div>
          </div>
        )}

        {this.props.employeeCCTV && (
          <div>
            <div
              className="box-body"
              onClick={() => this.viewProfile(this.props.employeeCCTV)}
            >
              <ul className="products-list product-list-in-box">
                <li className="item ">
                  <div className="row">
                    <div className="prodct-img col-xs-5 col-md-5 ">
                      <img
                        src={this.props.employeeCCTV.imgs}
                        alt="Photo"
                        className={styles.pics1}
                      />
                    </div>
                    <div className="col-xs-7 col-md-6">
                      <i className="fa fa-user margin-r-5" />
                      Name
                      <strong>
                        <h4 className="text-red">
                          {this.props.employeeCCTV.first_name}{" "}
                          {this.props.employeeCCTV.last_name}
                        </h4>
                      </strong>
                      <i className="fa fa-building margin-r-5" />
                      Department
                      <strong>
                        <h4 className="text-red">
                          {this.props.employeeCCTV.department}
                        </h4>
                      </strong>
                      <i className="fa fa-building margin-r-5" />
                      Department
                      <strong>
                        <h4 className="text-red">
                          {this.props.employeeCCTV.department}
                        </h4>
                      </strong>
                    </div>
                  </div>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Employees);
