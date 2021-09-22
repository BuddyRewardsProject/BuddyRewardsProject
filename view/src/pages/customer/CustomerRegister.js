import React, { Component } from "react";
import axios from "axios";
import logoKMUTT from "../../assets/img/kmutt.svg";
import logo from "../../assets/img/logoC.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import $ from "jquery"
import message from 'antd/lib/message/index';
import color from "../../config/color";

const key = 'updatable';

// const success = () => {
//   message.success({
//     content: '‏‏‎‏‏‎สำเร็จ',
//     duration: 3,
//     className: 'custom-class',
//     style: {
//       color: '#FB8549',
//       icon:'info',
//       fontSize: '15px',    
//     },
//   });
// };
const ButtonSubmit = styled.button`
  color: white;
  background-color: ${color.Button};
  font-size: '15px';
  &:hover {
    background-color: ${color.ButtonOrange};
  }
`

const HEADER = styled.text`
font-size: 35px;
color:#6B6B6B;

`;

class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repeatPassword: null,
      formValidation: {
        repeatPassword: true,
        buttonState: ''
      }
    };
  }

  handleClick(e) {
    e.preventDefault();
    var customerFirstName = $('#firstName').val()
    var customerLastName = $('#lastName').val()
    var customerNickName = $('#nickName').val()
    var customerEmail = $('#email').val()
    var customerPassword = $('#password').val()
    var customerRepeatPassword = $('#repeatPassword').val()
    var customerPhone = $('#phone').val()
    var customerGender = $('#gender').val()
    var customerDOB = $('#dob').val()

    var data = {
      customerFirstName: customerFirstName,
      customerLastName: customerLastName,
      customerNickName: customerNickName,
      customerEmail: customerEmail,
      customerPassword: customerPassword,
      customerRepeatPassword: customerRepeatPassword,
      customerPhone: customerPhone,
      customerGender: customerGender,
      customerDOB: customerDOB
    }
    axios.post('/customer/v1/add', {
      data
    })
      .then((response) => {
        if (response.data.status === "success") {
          message.success({ content: 'สำเร็จแล้ว!', key, duration: 2 });
          window.location.href = '/customer/login';
        } else {
          message.error({ content: 'เกิดข้อผิดพลาด!', key, duration: 2 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onRepeatPasswordInput(e) {
    var password = $('#password').val()
    if (!password || password.length === 0 || password === null) return false;
    if (password === e.target.value) {
      this.setState(prevState => ({
        formValidation: {                   // object that we want to update
          ...prevState.formValidation,    // keep all other key-value pairs
          repeatPassword: true,
          buttonState: 'active'       // update the value of specific key
        }
      }))
      $('#repeatPassword').removeClass('is-invalid')
      $('#repeatPassword').addClass('is-valid')
    } else {
      this.setState(prevState => ({
        formValidation: {                   // object that we want to update
          ...prevState.formValidation,    // keep all other key-value pairs
          repeatPassword: false,
          buttonState: ''       // update the value of specific key
        }
      }))
      $('#repeatPassword').addClass('is-invalid')
      $('#repeatPassword').removeClass('is-valid')
    }
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
                id="nickName"
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
                id="firstName"
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
                id="lastName"
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
                id="email"
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
                id="password"
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
                id="repeatPassword"
                className="form-control"
                placeholder="Re-Password"
                onChange={(e) => this.onRepeatPasswordInput(e)}
                required
              ></input>
            </div>

            <div className="text-left fromfontsize20">เบอร์โทรศัพท์</div>
            <div className="">
              <input
                type="tel"
                name="Phone"
                id="phone"
                className="form-control"
                placeholder="เบอร์โทรศัพท์"
                required
              ></input>
            </div>
            <div className="text-left fromfontsize20">เพศ</div>
            <div>
              <select class="form-select" id="gender" required>
                <option selected>โปรดระบุเพศ</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="not define">not define</option>
              </select>
            </div>
            <div className="text-left fromfontsize20">วัน เดือน ปีเกิด</div>
            <div>
              <input
                type="date"
                id="dob"
                className="form-control"
                min="1000-01-01"
                max="2019-12-31"
              ></input>
            </div>
            <div className="paddingTop15">
              <ButtonSubmit type="button" className="btnQRBack"
                onClick={(e) => this.handleClick(e)} disabled={!this.state.formValidation.buttonState}>
                ยืนยัน
              </ButtonSubmit>

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
