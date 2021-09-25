import React from "react";
import logo from "../assets/img/logoMB.svg";
import styled from "styled-components";

import "../assets/css/merchantSide/NavTopWebPOS.css";

const BgNav = styled.div`
  height: 100px;
  background: #FFFFFF;
box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
border-radius: 12px;
margin: 15px;
`;


const NavTopWebPOS = () => {
  
  return (
    <BgNav className=" navbar fixed-top "><div className=" AllPD ">
            <img src={logo} class="img-fluid "  alt="" width="390"  />
           
          </div> 
      <div class="body">
        <div class="row row-cols-2">
       
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
export default NavTopWebPOS;
