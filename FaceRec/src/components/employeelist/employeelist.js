import React, { Component } from "react";
import Employees from "../employees/employees";
import { Link } from "react-router-dom";

class Employeelist extends Component {
  showEmployee() {
    return (
      this.props.products &&
      this.props.products.map(product => {
        return <Employees key={product.id} product={product} />;
      })
    );
  }

  render() {
    const overflow = {
      width: "auto",
      height: 596,
      overflowY: "scroll"
    };
    return (
      <div className="col-md-5">
        {/* Employee LIST */}
        <div className="box box-primary">
          <div className="box-header with-border">
            <h3 className="box-title">Recently Employee</h3>
            <div className="box-tools pull-right">
              <button
                type="button"
                className="btn btn-box-tool"
                data-widget="collapse"
              >
                <i className="fa fa-minus" />
              </button>
              <button
                type="button"
                className="btn btn-box-tool"
                data-widget="remove"
              >
                <i className="fa fa-times" />
              </button>
            </div>
          </div>
          <div style={overflow}>
            {/* /.box-header */}
            {this.showEmployee()}
            {/* /.box-body */}
          </div>
          <div className="box-footer text-center">
            <Link to="/history" className="uppercase">
              View History
            </Link>
          </div>
          {/* /.box-footer */}
        </div>
      </div>
    );
  }
}

export default Employeelist;
