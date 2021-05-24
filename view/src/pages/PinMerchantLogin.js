import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import logo from "../asssets/img/merchantLOGO.svg";
import {Link} from 'react-router-dom';
import "../asssets/css/merchantSide/MerchantLOGO.css";
import PinInput from "react-pin-input";

const BtnOrange = styled.button`
  background-color: ${color.Button};
  border-style: none;
  border-radius: 20px;
  &:hover {
    background-color: ${color.ButtonOrange};
  }
`;
const logoMerchantPIN = styled.img`
  width: 100px;
  height: 100px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
`;
const BgGreen = styled.div`
  height: 300px;
  background: linear-gradient(180deg, #f7931e 0%, #ff7676 100%);
  border-radius: 0px 0px 35px 35px;
`;
const MarginTop = styled.div`
  margin-top: 15%;
`;
const Formsize = styled.form`
  padding: 20px;
`;
export default class Login extends Component {
  state = {
    value: "",
  };

  onChange = (value) => {
    this.setState({ value });
  };

  onClear = () => {
    this.setState({
      value: "",
    });
    this.pin.clear();
  };

  render() {
    const { value } = this.state;
    return (
      <BgGreen>
        <div className="container">
          <div className="position-absolute overlap-box row align-items-center">
            <div className="col-lg-3 col-md-2"></div>
            <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded-10">
              <Formsize action="/login" method="post">
                <div className="LoginMerchantPIN align-items-center">
                <Link className="body "to="/">
                  <img src={logo} /></Link>
                </div>
                <h4 className="text-center mt-3 mb-3">Merchant Name</h4>
                <h6 className="text-center mt-3 mb-3">
                  กรอง PIN เพื่อเข้าใช้งาน
                </h6>
                <div className="text-center ">
                  
                  <PinInput 
                    length={6}
                    initialValue=""
                    secret={true}
                    onChange={v => console.log(v)}
                    type="alphanumeric"
                    inputMode="tel"
                    focus={true}
                    style={{ padding: "10px" } }
                    inputStyle={{ borderColor: "blue" }}
                    inputFocusStyle={{ borderColor: "green" }}
                    onComplete={(value, index) => {}}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </div>
                <div className="text-center">{value}</div>

                <div className="col text-center form-group mt-2 d-grid gap-2 col-6 mx-auto">
                  <BtnOrange
                    className="btn btn-primary"
                    onClick={this.onClear}
                    type="submit"
                  >
                    clear
                  </BtnOrange>
                </div>
              </Formsize>
            </MarginTop>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </BgGreen>
    );
  }
}
