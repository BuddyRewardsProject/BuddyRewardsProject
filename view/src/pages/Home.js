import React, { Component } from "react";
import axios from "axios";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";
import liff from "@line/liff";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantId: null,
      merchantName: null,
      user: {},
    };
  }

  componentDidMount() {
    console.log(this.props.user);
    <meta name="theme-color" content="#ecd96f"></meta>
    document.getElementById("width").innerHTML =
      "Screen width is " + window.screen.width;
    document.getElementById("height").innerHTML =
      "Screen Height: " + window.screen.height;
    axios
      .get("/home")
      .then((response) => {
        // handle success
        this.setState({
          merchantId: response.data.results.merchantId,
          merchantName: response.data.results.merchantName,
        });
        console.log(response.data[0]);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }

  render() {
    
    return (
      <>
        <Navbar></Navbar>
        <div className="container">
          <div className="row text-center"><h1>ร้านค้าที่ใช้บริการกับทางเรา</h1>
            <div className="col col-lg-3"></div>
            <div className="col">
              
              {this.state.merchantId} {this.state.merchantName}
            </div>
            <div className="col col-lg-3"></div>

            <header className="App-header">
              <div className="support">
                <p>ชื่อ </p>
                <p>Line ID </p>
                <img alt="pic" src="" />
              </div>
            </header>
            <div>
              <img
                src="https://www.starbucks.co.th/stb-media/2020/10/starbucks_corporation_logo.png"
                width="100"
                alt="Starbuck"
              />
              <img
                src="https://pbs.twimg.com/profile_images/1346682940126728193/JnfAFFkV_400x400.jpg"
                width="93"
                alt="Okaju"
              />
              <img
                src="data:image/png;base64,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"
                width="90"
                alt="Kbank"
              />
               <h1>
          <div id="width"></div>
          <div id="height"></div>
          <div>ปุ่มด่วน shortscut</div>
        </h1>
             
              <Link to="/customer/home">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="button"
                    className="btn btn-outline rounded-all btnOrg"
                  >
                    customerHome
                  </button>
                </div>
              </Link>
              <Link to="/customer/register">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="button"
                    className="btn btn-outline rounded-all btnOrg"
                  >
                    customerRegister
                  </button>
                </div>
              </Link>
              <Link to="/merchant/login">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="button"
                    className="btn btn-outline rounded-all btnOrg"
                  >
                    Login
                  </button>
                </div>
              </Link>
              <Link to="/customer/mycard">
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button
                    type="button"
                    className="btn btn-outline rounded-all btnOrg"
                  >
                    my card
                  </button>
                </div>
              </Link>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="button"
                  className="btn btn-outline rounded-all btnOrg"
                  onClick={() => liff.closeWindow()}
                >
                  close
                </button>
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  type="URL on LINE browser"
                  className="btn btn-outline rounded-all btnOrg"
                  onClick={() =>
                    liff.openWindow({
                      url: "https://line.me",
                      external: false,
                    })
                  }
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
