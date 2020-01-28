import React, { Component } from "react";
import axios from "axios";
import styles from "./history.module.css";

class History extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get("http://localhost:3000/products").then(res => {
      if (this._isMounted) {
        const script = document.createElement("script");

        script.src = "js/content.js";
        script.async = true;

        document.body.appendChild(script);
        console.log(this._isMounted);
        {
          this.setState({ products: res.data });
        }
      }
    });

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

 
  showEmployee = () => {
    return (
      this.state.products &&
      this.state.products.map(product => {
        return (
          <tr key={product.id} >
            <td>{product.dateIn}</td>
            <td>{product.dateOut}</td>
            <td>{product.productName}</td>
            <td>{product.department}</td>
            <td><img src={product.thumbnail}  className={styles.pics}></img> </td>
          </tr>
        );
      })
    );
  };

  render() {
    return (
      <div className="content-wrapper" >
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
                <div className="box" style={{overflowX: 'scroll'}}>
                  {/* /.box-header */}
                  <div className="box-body" >
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
                      <tbody >{this.showEmployee()}</tbody>
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

export default History;
