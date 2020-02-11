import React, { Component } from "react";
import axios from "axios";
import styles from "./body.module.css";

import Employeelist from "../employeelist/employeelist";

// Import face profile
class Body extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      dates: new Date(),
      employees: null
    };

    setInterval(() => {
      this.setState({ dates: new Date() });
    }, 1000);
  }
  componentDidMount() {
    //Change here

    this._isMounted = true;

    this.lookupInterval = setInterval(() => {
      // Internal Database
      // axios.get("http://localhost:3000/products").then(res => {
      //   {
      //     if (this._isMounted) {
      //       this.setState({ employees: res.data });
      //     }
      //   }
      // });

      // External Database
      // axios.get("http://192.168.137.1:8000/history").then(res => {
      //   {
      //     if (this._isMounted) {
      //       this.setState({ employees: res.data });
      //     }
      //   }
      // });

      axios.get("http://localhost:3030").then(res => {
        {
          if (this._isMounted) {
            this.setState({ employees: res.data });
          }
        }
      });
    }, 500);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.lookupInterval);
  }
  render() {
    return (
      <div className="content-wrapper">
        <div className={styles.bg}>
          {/* Content Header (Page header) */}
          {/* Main content */}
          <section className="content">
            {/* Main row */}
            <div className="row" style={{ height: "auto" }}>
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
                          <div id="world-map-markers" style={{ height: 100 }} />
                        </div>
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.box-body */}
                </div>
              </div>
              {/* Employeelist */}
              <Employeelist employees={this.state.employees} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Body;
