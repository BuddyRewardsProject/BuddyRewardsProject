import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import logo from "../assets/img/merchantLOGO.svg";
import { Link } from 'react-router-dom';
import "../assets/css/merchantSide/MerchantLOGO.css";
import PinInput from "react-pin-input";
import { connect } from 'react-redux'
import { logout } from '../actions/authActions'
import axios from "axios"
import message from 'antd/lib/message/index';
import { setStaff } from '../actions/pinActions'
import jwt from 'jsonwebtoken';
import { bindActionCreators } from 'redux'

const BtnOrange = styled.button`
  background-color: ${color.Button};
  border-style: none;
  border-radius: 20px;
  color: white;
  &:hover {
    background-color: ${color.ButtonOrange};
  }
`;
const BgGreen = styled.div`
  height: 300px;
  background: linear-gradient(180deg, #f7931e 0%, #ff7676 100%);
  border-radius: 0px 0px 35px 35px;
`;
const MarginTop = styled.div`
  margin-top: 15%;
  @media (min-width: 320px) and (max-width: 768px) {
  margin-top: 50%;
  }
`;

class PinMerchantLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: null,
      pinState: null
    }
  }

  onChange = (value) => {
    this.setState({
      pin: value
    })
  };

  onClear = () => {
    this.pin.clear();
    this.setState({
      pin: null
    })
  };

  handleClick(e) {
    e.preventDefault();
    this.props.logout()
  }

  componentWillMount() {
    var data = {
      branchId: this.props.auth.user.branchId
    }
    axios.post('/merchant/v1/login/pin/check',
      data
    )
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({
            pinState: "success"
          })
        } else {
          this.setState({
            pinState: "unsuccess"
          }, () => {
            window.location.href = '/merchant/login/pin/reset'
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loginPin() {
    var data = {
      pincode: this.state.pin
    }

    axios.post('/merchant/v1/login/pin',
      data
    )
      .then((response) => {
        if(response.data.status === "success"){
          this.props.setStaff(jwt.decode(response.data.pinToken)) 
          localStorage.setItem("pinToken", response.data.pinToken);
          window.location.href='/merchant/branch';
        } else {
          message.error({ content: 'เกิดข้อผิดพลาด!', duration: 2 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    return (
      <>
        {
          this.state.pinState === null ?
            <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <BgGreen>
              <div className="container">
                <div className="position-absolute overlap-box row align-items-center">
                  <div className="col-lg-3 col-md-2"></div>
                  <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded-10">
                    <div>
                      <div className="LoginMerchantPIN align-items-center">
                        <Link className="body " to="/">
                          <img src={logo} alt="logo" /></Link>
                      </div>
                      <h1 className="text-center mt-3 mb-3">Merchant Name</h1>
                      <h4 className="text-center mt-3 mb-3">
                        กรอก PIN เพื่อเข้าใช้งาน
                </h4>
                      <div className="text-center ">
                        <PinInput
                          length={6}
                          initialValue=""
                          secret={true}
                          onChange={v => this.onChange(v)}
                          type="alphanumeric"
                          inputmode="tel"
                          focus={true}
                          style={{ padding: "10px" }}
                          inputStyle={{ borderColor: "blue" }}
                          inputFocusStyle={{ borderColor: "green" }}
                          onComplete={(value, index) => {this.loginPin()}}
                          autoSelect={true}
                          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                          ref={p => (this.pin = p)}
                        />
                      </div>
                      <div className="text-center">{this.state.pin}</div>
                      <div className="col text-center form-group mt-2 d-grid gap-2 col-6 mx-auto">
                        <BtnOrange className="btn" onClick={this.onClear} type="button">clear</BtnOrange>
                      </div>
                    </div>
                    <div className="col text-center form-group mt-2 d-grid  mx-auto">
                      <BtnOrange className="btn" type="button" onClick={(e) => this.handleClick(e)}>LOGOUT</BtnOrange></div>
                  </MarginTop>
                  <div className="col-lg-3 col-md-2"></div>
                </div>
              </div>

            </BgGreen>
        }
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setStaff, logout }, dispatch)
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(PinMerchantLogin)