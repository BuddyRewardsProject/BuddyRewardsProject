import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import colorNavBottom from "../config/colorNavBottom";
import styled from "styled-components";

import { useEffect } from "react";

const BgNavB = styled.div`
  background: ${colorNavBottom.Gradient};
  
  padding: max(env(safe-area-inset-bottom));
  border-radius: 0px 0px 0px 0px;
`;
const CurrentPath = window.location.pathname; 



const BtnOrange = styled.button`
  background-color: ${colorNavBottom.Button};
  border-style: none;
  border-radius: 30px;
 
  font-family: DBHeaventDB, serif;
  
  box-shadow: #f7931e 0px 0px 9px 0px;
  font-size: 26px;
  width: 100%;
  &:hover {
    background-color: ${colorNavBottom.ButtonOrange};
  }
`;



var text1 = "หน้าแรก"
var iconColorHome = "NavBcolorIconSize"
var iconColorMyCard = "NavBcolorIconSize"
var textColorHome = "NavBcolorTextSize"
var textColorMyCard = "NavBcolorTextSize"
var isselect = "0"

const Navigation = (props) => {
  useEffect(() => {
    console.log(CurrentPath);
    
    if(CurrentPath === "/customer/home"){
      iconColorHome = "NavBcolorIconSizeSelect"
      iconColorMyCard= "NavBcolorIconSize"
      textColorHome = "NavBcolorTextSizeSelect"
      textColorMyCard = "NavBcolorTextSize"
      isselect = "1"
      console.log(isselect);
    }else if(CurrentPath === "/customer/mycard"){
      iconColorHome = "NavBcolorIconSize"
      iconColorMyCard= "NavBcolorIconSizeSelect"
      textColorHome = "NavBcolorTextSize"
      textColorMyCard = "NavBcolorTextSizeSelect"
      isselect = "2"
      console.log(isselect);
    }
    if(isselect === "1"){

      console.log("haha");
    }else if(isselect === "2"){
      console.log("hehe");
    }
  }, [])

  
  const redirect = (CurrentPath) => {
    props.history.push(CurrentPath);
    console.log(CurrentPath);
    if(CurrentPath === "/customer/home"){
      iconColorHome = "NavBcolorIconSizeSelect"
      iconColorMyCard= "NavBcolorIconSize"
      textColorHome = "NavBcolorTextSizeSelect"
      textColorMyCard = "NavBcolorTextSize"
      
    }else if(CurrentPath === "/customer/mycard"){
      iconColorHome = "NavBcolorIconSize"
      iconColorMyCard= "NavBcolorIconSizeSelect"
      textColorHome = "NavBcolorTextSize"
      textColorMyCard = "NavBcolorTextSizeSelect"
    }
  };



  return (
    <BgNavB className="fixed-bottom ipx ">
      <div className="row d-flex flex-column row justify-content-center align-items-center ">
        <div class="container mggt">
          <div class="row ">
            <div
              class="col text-center   "
              onClick={() => redirect("/customer/home")}
              
            >
              <div class= {iconColorHome} >
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div class={textColorHome +" col text-center mggt"}>{text1}</div>
              
            </div>
            <div class="col-5 text-center  justify-content-center align-items-center">
              <div class="col text-center  ">
                <BtnOrange
                  className="btn btn-primary justify-content-center align-items-center QRtextNavB"
                  onClick={() => redirect("/customer/myQR")}
                >
                  สะสมแต้ม
                </BtnOrange>
              </div>
            </div>
            <div
              class="col text-center  "
              onClick={() => redirect("/customer/mycard")}
            >
              <div class={iconColorMyCard}>
                <FontAwesomeIcon icon={faWallet} />
              </div>
              <div class={ textColorMyCard +" col text-center mggt "}>บัตรของคุณ</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container "></div>
    </BgNavB>
  );
};
export default Navigation;
