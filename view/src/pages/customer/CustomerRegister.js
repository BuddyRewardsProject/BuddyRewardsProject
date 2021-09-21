import React, { Component } from "react";
import axios from "axios";
import logoKMUTT from "../../assets/img/kmutt.svg";
import logo from "../../assets/img/logoC.svg";

import { BrowserRouter, Switch, Route } from "react-router-dom";
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

class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customernickName: null,
      customerFirstName: null,
      customerLastName: null,
      customerEmail: null,
      customerPassword: null,
      customerPhoneNumber: null,
      customerGender: null,
      customerDOB: null,

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
            <HEADER className=" paddingTop15 ">สมัครสามาชิก</HEADER>

            <div className="">
              <div className="text-left fromfontsize20">ชื่อเล่นของคุณ</div>
              <input
                type="text"
                name="nickname"
                id="customernickName"
                className="form-control  fromfontsize15"
                placeholder="ชื่อเล่นของคุณ"
                required
              ></input>
            </div>
            <div className="text-left fromfontsize20">ชื่อจริง</div>
            <div className="">
              <input
                type="text"
                name="firstname"
                id="customerFirstName"
                className="form-control"
                placeholder="ชื่อจริง"
                required
              ></input>
            </div>
            <div className="text-left fromfontsize20">นามสุกล</div>
            <div className="">
              <input
                type="text"
                name="LastName"
                id="customerLastName"
                className="form-control"
                placeholder="นามสุกล"
                required
              ></input>
            </div>
            <div className="text-left fromfontsize20">E-mail</div>
            <div className="">
              <input
                type="text"
                name="Email"
                id="customerEmail"
                className="form-control"
                placeholder="E-mail"
                required
              ></input>
            </div>

            <div className="text-left fromfontsize20">Password</div>
            <div className="">
              <input
                type="Password"
                name="Password"
                id="customerPassword"
                className="form-control"
                placeholder="Password"
                required
              ></input>
            </div>

            <div className="text-left fromfontsize20">Re Password</div>
            <div className="">
              <input
                type="Password"
                name="Password"
                id="customerRePassword"
                className="form-control"
                placeholder="Re-Password"
                required
              ></input>
            </div>

            <div className="text-left fromfontsize20">เบอร์โทรศัพท์</div>
            <div className="">
              <input
                type="tel"
                name="Password"
                id="customerPhoneNumber"
                className="form-control"
                placeholder="เบอร์โทรศัพท์"
                required
              ></input>
            </div>
            <div className="text-left fromfontsize20">เพศ</div>
            <div>
              <select class="form-select" id="customerGender" required>
                <option selected>male</option>
                <option>Female</option>
                <option>not define</option>
              </select>
            </div>
            <div className="text-left fromfontsize20">วัน เดือน ปี เกิด</div>
            <div>
              <input
                type="date"
                id="customerDOB"
                className="form-control"
                min="1000-01-01"
                max="2019-12-31"
              ></input>
            </div>
            <div className="paddingTop15">
              <button type="button" className="  btnQRBack"
               onClick={() => success() }>
                ยืนยัน
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
