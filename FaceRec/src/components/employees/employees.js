import React, { Component } from "react";
import styles from "./employees.module.css";

class Employees extends Component {
  render() {
    const { productName, thumbnail } = this.props.product;

    return (
      <div className="box-body">
        <ul className="products-list product-list-in-box">
          <li className="item">
            <div className="img-responsive pad">
              <img src={thumbnail} alt="Photo" className={styles.pics} />
            </div>
            <div className="prodct-info">
              <a
                className="product-title"
                style={{ fontSize: 40, marginLeft: 10 }}
              >
                Mr. {productName}
              </a>
              {/* <span className="product-title"
                           >
                          {" "}
                          <br />
                          <div className="col-md-4">
                            <strong>
                              <i className="fa fa-user margin-r-5" />
                              ID
                            </strong>
                            <strong>
                              <p className="text-dark"> 590611023 </p>
                            </strong>
                          </div>
                          
                        </span> */}
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Employees;
