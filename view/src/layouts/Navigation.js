import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faStar,
  faWallet,
  faQrcode,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import colorNavBottom from "../config/colorNavBottom";
import styled from "styled-components";
import liff from "@line/liff";
import { Link } from "react-router-dom";

const BgGreen = styled.div`
  
  background: ${colorNavBottom.Gradient};
  padding: env(safe-area-inset-bottom);
  border-radius: 0px 0px 0px 0px;
`;
const BtnOrange = styled.button`
  background-color: ${colorNavBottom.Button};
  border-style: none;
  border-radius: 30px;
  box-shadow: #F7931E 0px 0px 10px 0px;
  font-size: 25px;
  &:hover {
    background-color: ${colorNavBottom.ButtonOrange};
  }
`;
const tabs = [
  {
    route: "/customer/home",
    icon: faStar,
    label: "Home",
  },
  {
    route: "/customer/register",
    icon: faUserCircle,
    label: "register",
  },
  {
    route: "/customer/register",
    icon: faUserCircle,
    label: "register",
  },
];

const Navigation = (props) => {
  const redirect = (link) => {
    props.history.push(link);
  };

  return (
    <BgGreen className="fixed-bottom ipx">
      <div className="row d-flex flex-column row justify-content-center align-items-center">
        <div class="container">
          <div class="row row-cols-3 ">
            <div
              class="col text-center fs-3 "
              
              onClick={() => redirect("/customer/register")}
            ><div class="grey">
              <FontAwesomeIcon icon={faStar}  /></div>
              <div class="col text-center ">หน้าแรก</div>
            
</div>
            <div
              class="col text-center  justify-content-center align-items-center"
              
            >
             
              <div class="col text-center "><BtnOrange className="btn btn-primary justify-content-center align-items-center" onClick={() => alert("ไงงง\nยังทำไม่เสร็จเลยย")}>สะสมแต้ม</BtnOrange></div>
            </div>
            <div
              class="col text-center fs-3"
              onClick={() => redirect("/customer/mycard")}
            ><div class="grey">
              <FontAwesomeIcon icon={faWallet} /></div>
              <div class="col text-center ">บัตรของคุณ</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container "></div>
    </BgGreen>
  );
};
export default Navigation;
