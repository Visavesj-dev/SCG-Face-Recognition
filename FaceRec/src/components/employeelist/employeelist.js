import React, { Component } from "react";
import Employees from "../employees/employees";
import { Link } from "react-router-dom";


class Employeelist extends Component {
  showEmployee() {
    if (this.props.employees != null) {
      return (
        this.props.employees.recordsets &&
        this.props.employees.recordsets.map(employee => {
          return employee.slice(employee.length - 1).map(employees => {
            //Show the last data
            if ( employees.status === 1){
              return  <Employees key={employees.id} employee={employees} /> ;
            }else if (employees.status === 0){
              return  <Employees key={employees.id} employee={employees} />;
            }
           
          });
        })
      );
    }
  }

  showEmployeeCCTV() {
    if (this.props.employeeCCTV != null) {
      return (
        this.props.employeeCCTV.recordsets &&
        this.props.employeeCCTV.recordsets.map(employee => {
          return employee
            .reverse()
            .slice(0, 10)
            .map(employees => {
              //Show the last data
              return <Employees key={employees.id} employeeCCTV={employees} />;
            });
        })
      );
    }
  }

  render() {
    const overflow = {
      width: "auto",
      height: "79vh",
      overflowY: "scroll"
    };
   
    return (
      <div> 
        {this.props.employees && (
          <div className="col-md-5">
          
            {/* Employee LIST */}
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Recently Employee</h3>
              </div>
              <div style={{ height: "81.6vh" }}>{this.showEmployee()}</div>
              {/* /.box-footer */}
            </div>
          </div>
        )}
        {/* Change Control Page */}
        {this.props.employeeCCTV && (
          <div className="col-md-4">
            {/* Employee LIST */}
            <div className="box box-primary">
              <div className="box-header with-border">
                <h3 className="box-title">Recently Employee</h3>
              </div>
              <div style={{ minHeight: "100%" }} style={overflow}>
                {this.showEmployeeCCTV()}
              </div>

              {/* /.box-footer */}
              <div className="box-footer text-center">
                <Link to="/history">View All Products</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Employeelist;



