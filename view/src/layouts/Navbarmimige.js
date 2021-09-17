import React from "react";

import styled from "styled-components";
import color from "../config/color";
const BgMimige = styled.div`
  height: 20px;
  background: ${color.white};
  border-radius: 0px 0px 10px 10px;
`;


const Navbarmimige = () => {
  return (
    <BgMimige className="fixed-top justify-content-center align-items-center">
          <div className="text-center justify-content-center   align-items-center middle">
            
              ลงทะเบียน
            
          </div>
          


              
            {/*  <MarginTop className="bg-white shadow p-3 mb-5 bg-body rounded-7">
                <div>
                  <img src={logo} alt="buddyrewards" width="120" />
                </div>
              </MarginTop>*/}
          
          
        </BgMimige>
  );
};
export default Navbarmimige;