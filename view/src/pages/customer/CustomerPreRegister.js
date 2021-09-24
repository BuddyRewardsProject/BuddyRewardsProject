import React, { Component } from "react";
import axios from "axios";
import logoKMUTT from "../../assets/img/kmutt.svg";
import logo from "../../assets/img/logoC.svg";
import Cover from "../../assets/img/CoverPreRegister.png";

import styled from "styled-components";

import message from "antd/lib/message/index";

const key = "updatable";

const success = () => {
  message.success({
    content: "‏‏‎‏‏‎สำเร็จ",
    duration: 3,
    className: "custom-class",
    style: {
      color: "#FB8549",
      icon: "info",
      fontSize: "15px",
    },
  });
};

const HEADER = styled.text`
  font-size: 35px;
  color: #6b6b6b;
`;
const HeaderImage = styled.div`
height: 260px;
  background-image: url(${Cover});
`;






class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantId: null,
      merchantName: null,
      name: "",
      userLineID: "",
      pictureUrl: "",
    };
  }
  /*
  componentDidMount = async () => {
    await window.liff.init({ liffId: "1656382933-9DzLvxlE" }).catch((err) => {
      alert(err);
    });
    if (window.liff.isLoggedIn()) {
      let user = await window.liff.getProfile();
      const accessToken = window.liff.getAccessToken();
      console.log(accessToken);
      this.setState({
        user: user,
      });
    } else {
      window.liff.login();
    }
  };
 */
  render() {
    
    return (
      <>
        <div className="container">
          <div className="row ">
            <HeaderImage>


            
            </HeaderImage>
              
           
        
            <div class="container marginTopM50">
              <div class="row row-cols-2">
                <div className="leftPD ">
                  <img src={logo} alt="buddyrewards" width="150" />
                </div>
                <div className="text-end paddingTop15">
                  <img src={logoKMUTT} alt="buddyrewards" width="120" />
                </div>
              </div>
            </div>
            <div className=""></div>
            <HEADER className=" paddingTop15 ">รวมบัตรสะสมแต้มไว้ในที่เดียว</HEADER>
<h3>พร้อมรับสิทธิ์ประโยชน์จาก ร้านค้าอีกมากมาย</h3>
            <div className="text-center paddingTop15">
              <button
                type="button"
                className="  btnPreRegister"
                onClick={() => success()}
              >
                สมัครสามาชิก
              </button>
            </div>
            <div className="paddingTop15"></div>
            <div className="paddingTop15"></div>
            <div className="paddingTop15"></div>
            <div className="paddingTop15"></div>
            <div className="paddingTop15"></div>
            <div className="paddingTop15"></div>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerRegister;
