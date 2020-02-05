import React, { Component } from "react";
import styles from "./profile.module.css";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    //Change here
    axios
      // .get("http://192.168.137.1:3030" + this.props.match.params.id)
      .get("http://localhost:3000/products/" + this.props.match.params.id)
      // .get("http://192.168.137.1:8000/history" + this.props.match.params.id)
      .then(res => this.setState({ profile: res.data }));
  }

  render() {
    //Change here
    const { first_name, department, imgs, last_name } = this.state.profile;

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Profile</h1>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6 ">
              {/* Profile Image */}
              <div className="box box-primary" style={{ height: 685 }}>
                <div className="box-header with-border">
                  <div className="img-responsive pad">
                    <img src={imgs} alt="Photo" className={styles.pics} />
                  </div>
                  <h1
                    className="product-title text-center"
                    style={{ fontSize: 40, marginLeft: 5 }}
                  >
                    {first_name} {last_name}
                  </h1>
                </div>
                <div className="box-body">
                  <h4>
                    <i className="fa fa-building margin-r-5" />
                    Department
                  </h4>
                  <h3 className="text-black">
                    <blockquote>
                      <strong>{department}</strong>
                    </blockquote>
                  </h3>
                  <hr />

                  <h4>
                    <i className="fa fa-sign-in margin-r-5" /> Time In
                  </h4>

                  <h3 className="text-black">
                    <blockquote>
                      <strong>{department}</strong>
                    </blockquote>
                  </h3>
                  <hr />

                  <h4>
                    <i className="fa fa-sign-out margin-r-5" /> Time Out
                  </h4>

                  <h3 className="text-black">
                    <blockquote>
                      <strong>{department}</strong>
                    </blockquote>
                  </h3>
                </div>
                {/* /.box-body */}
              </div>
            </div>
            {/* /.col */}

            {/* /.box */}
            {/* About Me Box */}
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">About Me</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> สังกัดงาน
                  </strong>
                  <p className="text-muted">
                    B.S. in Computer Science from the University of Tennessee at
                    Knoxville
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> อายุ
                  </strong>
                  <p className="text-muted">Malibu, California</p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> อายุงาน
                  </strong>
                  <p>
                    <span className="label label-danger">UI Design</span>
                    <span className="label label-success">Coding</span>
                    <span className="label label-info">Javascript</span>
                    <span className="label label-warning">PHP</span>
                    <span className="label label-primary">Node.js</span>
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> เบอร์ติดต่อ
                  </strong>
                  <p>
                    Lorem ipsขconsectetur adipiscing elit. Etiam fermentum enim
                    neque.
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> หัวหน้างาน
                  </strong>
                  <p>
                    Lorem ipsขconsectetur adipiscing elit. Etiam fermentum enim
                    neque.
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> ประวัติการอบรม
                  </strong>
                  <p>
                    Lorem ipsขconsectetur adipiscing elit. Etiam fermentum enim
                    neque.
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> ​Sub-contractor
                  </strong>
                  <p>
                    Lorem ipsขconsectetur adipiscing elit. Etiam fermentum enim
                    neque.
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-file-text-o margin-r-5" /> สถานที่ทำงาน
                  </strong>
                  <p>
                    Lorem ipsขconsectetur adipiscing elit. Etiam fermentum enim
                    neque.
                  </p>
                </div>
                {/* /.box-body */}
              </div>
            </div>
          </div>
          {/* /.row */}
        </section>
      </div>
    );
  }
}

export default Profile;
