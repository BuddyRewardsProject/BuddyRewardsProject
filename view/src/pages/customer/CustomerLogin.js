import React, { Component } from "react";
import axios from "axios";
import logoKMUTT from "../../assets/img/kmutt.svg";
import logo from "../../assets/img/logoC.svg";

import styled from "styled-components";

import message from 'antd/lib/message/index';


const key = 'updatable';

const success = () => {
  message.success({
    content: '‏‏‎‏‏‎สำเร็จ',
    duration: 3,
    className: 'custom-class',
    style: {
      color: '#FB8549',
      icon:'info',
      fontSize: '15px',

    },
  });
};

const HEADER = styled.text`
font-size: 35px;
color:#6B6B6B;

`;

class CustomerLogin extends Component {
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
            <div class="container">
              <div class="row row-cols-2">
                <div className="leftPD ">
                  <img src={logo} alt="buddyrewards" width="150" />
                </div>
                <div className="text-end paddingTop15">
                  <img src={logoKMUTT} alt="buddyrewards" width="120" />
                </div>
              </div>
            </div>
            <div className="text-center"></div>
            <HEADER className=" paddingTop15 ">เข้าสู่ระบบ</HEADER>

            <div className="">
              <div className="text-left fromfontsize20">username</div>
              <input
                type="text"
                name="nickname"
                id="customernickName"
                className="form-control  fromfontsize15"
                placeholder="username"
                required
              ></input>
            </div>


            <div className="text-left fromfontsize20">Password</div>
            <div className="">
              <input
                type="Password"
                name="Password"
                id="customerRePassword"
                className="form-control"
                placeholder="Password"
                required
              ></input>
            </div>

            
            <div className="paddingTop15">
              <button type="button" className="  btnQRBack"
               onClick={() => success() }>
                login
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

export default CustomerLogin;
