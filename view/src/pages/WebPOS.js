import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import NavTopWebPOS from "../layouts/NavTopWebPOS";
import "../assets/css/merchantSide/webPOS.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutPin } from "../actions/pinActions";
import branch from "../assets/img/icon/branch.svg";
import barcodeScan from "../assets/img/icon/barcodeScan.png";
import pos from "../assets/img/icon/pos.svg";
import staff from "../assets/img/icon/staff.svg";

const BtnOrange = styled.button`
  background-color: ${color.Button};
  width: 290px;

  border-style: none;
  font-size: 25px;
  border-radius: 99px;
  color: white;
  &:hover {
    background-color: ${color.ButtonOrange};
    color: white;
  }
`

const BtnClear = styled.button`
  background-color: #eaeaea;
  width: 99px;

  border-style: none;
  font-size: 25px;
  border-radius: 99px;
  color: #5f5f5f;
 
`
const BtnOK = styled.button`
  background-color: #59DD9A;
  width: 290px;
  
  border-style: none;
  font-size: 25px;
  border-radius: 99px;
  color: white;
 
`
const MarginTop = styled.div`
  margin: 130px;
`
const Card = styled.div`
  background: #f7f7f7;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin: 15px;
`;

class WebPOS extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.logoutPin();
    window.location.href = "/merchant/login/pin";
  }

  render() {
    document.body.style.backgroundColor = "#F5F6FA";
    return (
      <div>
        <NavTopWebPOS></NavTopWebPOS>
        <MarginTop></MarginTop>

        <Card className="text-center">
          <div>
            <img
              src={barcodeScan}
              class="img-fluid paddingBarCodeIcon"
              alt="barcodeScan"
              width="450px"
            />
          </div>
          <div className="HeaderWebPOS">สแกนรหัสจาก QR ลูกค้า</div>
          <h3> เข้าสู่ระบบโดย {this.props.pinAuth.staff.firstName} #{this.props.pinAuth.staff.staffId}</h3>
          <div className="outterInput"><input className="inPutWidth inputFontSize DbBold"></input></div>
          <div className="paddingBtm"><BtnClear >ลบ</BtnClear></div>
          <div className="paddingBtm"><BtnOK >ตกลง</BtnOK></div>
          
        </Card>
        <div className="text-center">
          <BtnOrange
            type="button"
            className=""
            onClick={(e) => this.handleClick(e)}
          >
            ออกจากระบบพนักงาน
          </BtnOrange>
        </div>
      </div>
    );
  }
}

const mapDispatch = { logoutPin };
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatch)(WebPOS);
