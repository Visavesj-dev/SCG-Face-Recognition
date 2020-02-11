import React, { Component } from "react";
import styles from "./cctv.module.css";

//import components 
import Employeelist from "../employeelist/employeelist";

//redux
import { connect } from "react-redux";
import { EmployeesFetch } from "../../actions";

class Cctv extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.props.EmployeesFetch();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className={styles.bg}>
          {/* Content Header (Page header) */}
          {/* Main content */}
          <section className="content">
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <div className="col-md-8">
                {/* MAP & BOX PANE */}
                <div className="box box-primary">
                  <div className="box-header with-border">
                    <h3 className="box-title">CCTV Station</h3>
                  </div>
                  {/* /.box-header */}
                  <div className="box-body no-padding " style={{ height: 650 }}>
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="pad">
                          {/* <img src="http://192.168.137.1:8000/video_feed" style={{borderRadius: 30}}></img>  */}
                          {/* Map will be created here */}
                          <div className="timeline-body">
                            <div
                              className="embed-responsive embed-responsive-16by9"
                              style={{ height: 625 }}
                            >
                              <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/tMWkeBIohBs"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.box-body */}
                </div>
              </div>
              <Employeelist employeeCCTV={this.props.employees} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { employees: state.employees };
}

export default connect(mapStateToProps, { EmployeesFetch })(Cctv);
