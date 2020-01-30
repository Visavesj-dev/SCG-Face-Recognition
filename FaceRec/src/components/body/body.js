import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./body.module.css";

//camera
import Webcam from "react-webcam";
import {
  loadModels,
  getFullFaceDescription,
  createMatcher
} from "../../api/face";
import Employeelist from "../employeelist/employeelist";

// Import face profile
const JSON_PROFILE = require("../../descriptors/bnk48.json");
const ice = require("../../descriptors/ice.json");

const WIDTH = 500;
const HEIGHT = 400;
const inputSize = 160;

class Body extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.webcam = React.createRef();

    this.state = {
      date: new Date(),
      dates: new Date(),
      products: "",

      //  camera
      fullDesc: null,
      detections: null,
      descriptors: null,
      faceMatcher: null,
      match: null,
      facingMode: null
    };

    setInterval(() => {
      this.setState({ dates: new Date() });
    }, 1000);
  }

  componentDidMount() {
    this._isMounted = true;

    setInterval(() => {
      axios.get("http://localhost:3000/products").then(res => {
        {
          if (this._isMounted) {
            this.setState({ products: res.data });
          }
        }
      });
    },1000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  //camera

  componentWillMount = async () => {
    await loadModels();
    this.setState({ faceMatcher: await createMatcher(ice) });
    this.setInputDevice();
  };

  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async devices => {
      let inputDevice = await devices.filter(
        device => device.kind === "videoinput"
      );
      if (inputDevice.length < 2) {
        await this.setState({
          facingMode: "user"
        });
      } else {
        await this.setState({
          facingMode: { exact: "environment" }
        });
      }
      this.startCapture();
    });
  };

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, 1500);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  capture = async () => {
    if (!!this.webcam.current) {
      await getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      ).then(fullDesc => {
        if (!!fullDesc) {
          this.setState({
            detections: fullDesc.map(fd => fd.detection),
            descriptors: fullDesc.map(fd => fd.descriptor)
          });
        }
      });

      if (!!this.state.descriptors && !!this.state.faceMatcher) {
        let match = await this.state.descriptors.map(descriptor =>
          this.state.faceMatcher.findBestMatch(descriptor)
        );
        this.setState({ match });
      }
    }
  };

  render() {
    const { detections, match, facingMode } = this.state;
    let videoConstraints = null;
    let camera = "";
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      };
      if (facingMode === "user") {
        camera = "Front";
      } else {
        camera = "Back";
      }
    }
    let drawBox = null;
    if (!!detections) {
      drawBox = detections.map((detection, i) => {
        let _H = detection.box.height;
        let _W = detection.box.width;
        let _X = detection.box._x;
        let _Y = detection.box._y;
        return (
          <div key={i}>
            <div
              style={{
                position: "absolute",
                border: "solid",
                borderColor: "red",
                height: _H,
                width: _W,
                transform: `translate(${_X}px,${_Y}px)`
              }}
            >
              {!!match && !!match[i] ? (
                <p
                  style={{
                    backgroundColor: "blue",
                    border: "solid",
                    borderColor: "blue",
                    width: _W,
                    marginTop: 0,
                    color: "#fff",
                    transform: `translate(-3px,${_H}px)`
                  }}
                >
                  {match[i]._label}
                </p>
              ) : null}
            </div>
          </div>
        );
      });
    }
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
                    <h3 className="box-title">Camera #1</h3>
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
                  {/* /.box-header */}
                  <div className="box-body no-padding">
                    <div className="row">
                      <div className="col-md-12 ">
                        <div className="pad">
                          <h1 className="text-muted mt-4 text-right">
                            {this.state.dates.toLocaleTimeString()}
                          </h1>
                          {/* carmera */}
                          {/* <div
        className="Camera"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p>Camera: {camera}</p>
        <div
          style={{
            width: WIDTH,
            height: HEIGHT
          }}
        >
          <div style={{ position: 'relative', width: WIDTH }}>
            {!!videoConstraints ? (
              <div style={{ position: 'absolute' }}>
                <Webcam
                  audio={false}
                  width={WIDTH}
                  height={HEIGHT}
                  ref={this.webcam}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
              </div>
            ) : null}
            {!!drawBox ? drawBox : null}
          </div>
        </div>
      </div> */}
                          {/*  */}
                          {/* Map will be created here */}
                          <div id="world-map-markers" style={{ height: 250 }} />
                        </div>
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.box-body */}
                </div>
              </div>

              {/* Employeelist */}
              <Employeelist products={this.state.products} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Body;
