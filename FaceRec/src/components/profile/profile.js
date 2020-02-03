import React, { Component } from "react";
import axios from "axios";
import { ComposableTask } from "face-api.js";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get("http://localhost:3000/products/" + this.props.match.params.id)
        .then(res => this.setState({ profile: res.data }));
    }
  }

  render() {
    const { productName, department, thumbnail } = this.state.profile;

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>Profile</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="fa fa-dashboard" /> Home
              </a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li className="active">User profile</li>
          </ol>
        </section>
        {/* Main content */}

        <section className="content">
          <div className="row">
            <div className="col-md-12 ">
              {/* Profile Image */}
              <div className="box box-primary">
                <div className="box-body box-profile">
                  <img
                    className="profile-user-img img-responsive img-circle"
                    src={thumbnail}
                    style={{ height: 175, width: 150 }}
                  />
                  <h2 className=" text-center">{productName}</h2>
                  <h3 className="text-muted text-center">{department}</h3>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              {/* About Me Box */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">About Me</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <strong>
                    <i className="fa fa-book margin-r-5" /> Education
                  </strong>
                  <p className="text-muted">
                    B.S. in Computer Science from the University of Tennessee at
                    Knoxville
                  </p>
                  <hr />
                  <strong>
                    <i className="fa fa-map-marker margin-r-5" /> Location
                  </strong>
                  <p className="text-muted">Malibu, California</p>
                  <hr />
                  <strong>
                    <i className="fa fa-pencil margin-r-5" /> Skills
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
                    <i className="fa fa-file-text-o margin-r-5" /> Notes
                  </strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam fermentum enim neque.
                  </p>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

export default Profile;
