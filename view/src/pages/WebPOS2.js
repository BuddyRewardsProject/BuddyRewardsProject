import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import NavTopWebPOS from "../layouts/NavTopWebPOS";
import "../assets/css/merchantSide/webPOS.css";

import { connect } from "react-redux";
import { logoutPin } from "../actions/pinActions";

import profile from "../assets/img/icon/profileD.svg";


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
  width: 129px;

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
  padding-top: 15px;
`;


const Cardinfo = styled.div`
  background: #ffffff;
  
  border-radius: 12px;
  margin-left: 15px;
  margin-right: 15px;
`;
class WebPOS2 extends Component {
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

           <Cardinfo>
           <img
              src={profile}
              class="img-fluid paddingBarCodeIcon"
              alt="barcodeScan"
              width="129px"
            />
            <div className="cardInfoWebPOS1">คุณ nickname #9999</div>
            <div className="cardInfoWebPOS2">9/9/2021 แต้มที่มีอยู่ #0</div>
           
          </Cardinfo>
         
          <div className="HeaderWebPOS">ระบุบยอดชำระ</div>
          
          <div className="outterInputPrice"><input className="inPutWidth2 inputFontSize DbBold"></input></div>
          <div className="paddingBtm"><BtnClear >ย้อนกลับ</BtnClear></div>
          <div className="paddingBtm"><BtnOK >ถัดไป</BtnOK></div>
          
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

export default connect(mapStateToProps, mapDispatch)(WebPOS2);
