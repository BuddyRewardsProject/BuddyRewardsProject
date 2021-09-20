import React from "react";
import logo from "../assets/img/logoC.svg";
import styled from "styled-components";
import color from "../config/colorNavTop";
import "../assets/css/CustomerSide/NavTop.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BgNav = styled.div`
  height: 120px;
  background: ${color.Gradient};
  border-radius: 0px 0px 10px 10px;
`;

const NavbarTop = () => {
  return (
    <BgNav className="fixed-top ">
      <div class="container">
        <div class="row row-cols-2">
          <div className="leftPD ">
            <img src={logo} alt="buddyrewards" width="150" />
          </div> 
          <Link to="/customer/register" className="text-end  NavTopColorAndIconSize" >
         
            <FontAwesomeIcon icon={faUserCircle} />
          </Link>
        </div>
      </div>

      {/*  <MarginTop className="bg-white shadow p-3 mb-5 bg-body rounded-7">
                <div>
                  <img src={logo} alt="buddyrewards" width="120" />
                </div>
              </MarginTop>*/}
    </BgNav>
  );
};
export default NavbarTop;
