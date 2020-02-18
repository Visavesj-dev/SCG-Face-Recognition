import React, { Component } from "react";
import styles from "./body.module.css";

//import component
import Employeelist from "../employeelist/employeelist";

//redux
import { connect } from "react-redux";
import { EmployeesFetch } from "../../actions";

// Import face profile
class Body extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      dates: new Date()
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.lookupInterval = setInterval(() => {
      if (this._isMounted) {
        this.props.EmployeesFetch();
        this.setState({ dates: new Date() });
      }
    }, 500);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.lookupInterval);
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          {/* Main row */}
          <div className="row">
            {/* Left col */}
            <div className="col-md-7">
              {/* MAP & BOX PANE */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Face Station Camera</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <div className="row">
                    <div className="col-md-12 ">
                      <div className="pad">
                        <h1 className="text-muted mt-4 text-right">
                          {this.state.dates.toLocaleTimeString()}
                        </h1>
                        {/* <img src="http://192.168.137.1:8000/video_feed" style={{borderRadius: 30}}></img>  */}
                        {/* Map will be created here */}
                        <div id="world-map-markers" />
                      </div>
                    </div>
                  </div>
                  {/* /.row */}
                </div>
                {/* /.box-body */}
              </div>
            </div>
            {/* Employeelist */}
            <Employeelist employees={this.props.employees} />
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { employees: state.employees };
}

export default connect(mapStateToProps, { EmployeesFetch })(Body);
