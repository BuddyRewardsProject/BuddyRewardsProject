import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import colorNavBottom from "../config/colorNavBottom";
import styled from "styled-components";

const BgGreen = styled.div`
  height: 70px;
  background: ${colorNavBottom.Gradient};
  border-radius: 0px 0px 0px 0px;
`;
const tabs = [
  {
    route: "/customer/home",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/customer/register",
    icon: faUserCircle,
    label: "register",
  },
];

const Navigation = (props) => {
  return (
    <BgGreen className="fixed-bottom ipx" >
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <FontAwesomeIcon size="4x" icon={faUserCircle} />
        <div></div>
      </div>
      
      <div className="container "></div>
    </BgGreen>
  );
};
export default Navigation;
