import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import styled from "styled-components";

import logo from "../../assets/img/logoC.svg";


const Bg = styled.body`
  height: 100vh;
  padding: 15px;
  background: linear-gradient(180deg, #f7931e 0%, #ff7676 100%);
`;

const Wspace = styled.body`
  height: 70%;

  border-radius: 10px 10px 10px 10px;
`;
const TEXT = styled.text`
  font-size: 20px;
  color: #6b6b6b;
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
    this.changeMerchantBgColor("#F7931E", "#FF7676");
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://palett.es/API/v1/palette", requestOptions)
      .then(response => response.json())
      .then(result =>{
console.log(result)
      } )
      .catch(error => console.log('error', error));

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
      "linear-gradient(180deg, #FF7676 0%, #F7931E 100%)";
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = "#FFFFFF";
  }

  changeMerchantBgColor(primaryColor, secondColor) {
    document.getElementById(
      "merchantQrColor"
    ).style.background = `linear-gradient(180deg, ${primaryColor} 0%, ${secondColor} 100%)`;
  }

  render() {
    function goBack() {
      window.history.back();
    }

    return (
      <Bg id="merchantQrColor">
        <btnCF></btnCF>
        <Helmet>
          <title>my QR</title>
        </Helmet>

        <Wspace>
          <div className="container">
            <div className=" text-center ">
              <div>
                <img
                  src={logo}
                  className="paddingTop15"
                  alt="buddyrewards"
                  width="140"
                />
              </div>

              <div>
                <img
                  className="paddingTop15"
                  src="https://cdn.discordapp.com/attachments/490161799501709313/891602669389631499/LzSKgAAAABJRU5ErkJggg.png"
                  alt="buddyrewards"
                  width="140"
                />
              </div>
              <div className="row ">
                <TEXT>demo qr 156898</TEXT>

                <TEXT> แสดง QR กับร้านค้าเพื่อสะสมแต้ม </TEXT>
              </div>

              <div>
                <button className="btnQRBack  " onClick={() => goBack()}>
                  ย้อนกลับ
                </button>
              </div>
            </div>
          </div>
        </Wspace>
      </Bg>
    );
  }
}

export default CustomerQR;
