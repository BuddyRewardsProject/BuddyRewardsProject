import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import NavTopMyCard from "../../layouts/NavTopMyCard";
import styled from "styled-components";
import Navigation from "../../layouts/Navigation";
import logo from "../../assets/img/logoC.svg";

const Bg = styled.body`
  height: 100vh;
  padding: 15px;
  background: linear-gradient(180deg, #f7931e 0%, #ff7676 100%);
`;
const Wspace = styled.body`
  height: 70%;
  padding-top: 15px;
  border-radius: 10px 10px 10px 10px;
  
`;
const logoBDC = styled.div`
padding: 15px;
`;

class CustomerQR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantId: null,
      merchantName: null,
    };
  }

  componentDidMount() {
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
    document.body.style.backgroundColor =
      "linear-gradient(180deg, #F7931E 0%, #FF7676 100%)";
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = "#FFFFFF";
  }

  render() {
    function goBack() {
      window.history.back();
    }

    return (
      <Bg className="fixed-top ">
        <Helmet>
          <title>my QR</title>
        </Helmet>

        <Wspace>
          <div className="container">
            <div className="row text-center ">
              <logoBDC>
                <img src={logo} alt="buddyrewards" width="140" />
              </logoBDC>
              <logoBDC>
                <img src="https://maesot.kpru.ac.th/wp-content/uploads/2018/01/maesot.png" alt="buddyrewards" width="140" />
              </logoBDC>
              
              <span className="second-word-formatting"> </span>
              <div>
                <input
                  type="text"
                  name="nickname"
                  id="nickName"
                  className="form-control"
                  placeholder="nickname"
                  required
                ></input>
              </div>

              <div>
                <input
                  type="text"
                  name="firstname"
                  id="firstName"
                  className="form-control"
                  placeholder="firstname"
                  required
                ></input>
              </div>

              <div className="col col-lg-3"></div>

              <div className="col col-lg-3"></div>
              <div></div>
              <button
                type="button"
                className="btn btn-outline rounded-all btnOrg"
                onClick={() => goBack()}
              >
                ย้อนกลับ
              </button>
            </div>
          </div>
        </Wspace>
      </Bg>
    );
  }
}

export default CustomerQR;
