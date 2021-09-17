import React, { Component } from "react";
import axios from "axios";
import Navbar from "../../layouts/NavbarCustomer";
import Footer from "../../layouts/Footer";
import Navigation from "../../layouts/Navigation";
import color from "../../config/color";
import styled from "styled-components";
import logo from "../../assets/img/logoC.svg";
import liff from "@line/liff";
import Navbarmimige from "../../layouts/Navbarmimige";
import { Helmet } from "react-helmet";

const BtnOrange = styled.button`
  background-color: ${color.Button};
  border-style: none;
  border-radius: 20px;
  &:hover {
    background-color: ${color.ButtonOrange};
  }
`;
const BgOrg = styled.div`
  height: 300px;
  background: ${color.Gradient};
  border-radius: 0px 0px 35px 35px;
`;

const BgMimige = styled.div`
  height: 20px;
  background: ${color.white};
  border-radius: 0px 0px 10px 10px;
`;
const MarginTop = styled.div`
  margin-top: 50px;
`;

class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantId: null,
      merchantName: null,
    };
  }

  componentDidMount() {
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
      <BgOrg>
        <Navbarmimige>
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            ></meta>
          </Helmet>
        </Navbarmimige>
        <Navigation history={this.props.history}
        ></Navigation>
        <h1>{liff.getOS()}</h1>
        <h1>
          <p id="width"></p>
          <p id="height"></p>
        </h1>
        <h1>{liff.getLanguage()}</h1>
        <h1>{liff.getOS()}</h1>
        <h1>{liff.getOS()}</h1>
      </BgOrg>
    );
  }
}

export default CustomerRegister;
