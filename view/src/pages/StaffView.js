import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import Navbar2 from "../layouts/Navbar2";

import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logoutPin } from '../actions/pinActions'
import branch from "../assets/img/icon/branch.svg";
import dash from "../assets/img/icon/Bdash.svg";
import pos from "../assets/img/icon/pos.svg";
import staff from "../assets/img/icon/staff.svg";


const BtnOrange = styled.button`
  background-color: ${color.Button};
  border-style: none;
  font-size: 25px;
  border-radius: 99px;
  color: white;
  &:hover {
    background-color: ${color.ButtonOrange};
    color: white;
  }
`;

const BgGradient = styled.div`
  height: 300px;
  background: ${color.Gradient};
`;
const MarginTop = styled.div`
  margin-top: 8%;
`;
const BranchNameSize = styled.h2`
  font-size: 48px;
  font-style: bold;
  color: white;
`;

class StaffView extends Component {

  handleClick(e){
    e.preventDefault();
    this.props.logoutPin()
    window.location.href = '/merchant/login/pin'
  }

  render() {
    return (
      <div>
        <Navbar2 />
        <BgGradient>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-1 col-md-2"></div>
              <MarginTop className="col">
                <BranchNameSize className="text-center">{this.props.auth.user.branchName}</BranchNameSize>
              </MarginTop>
              <div className="col-lg-1 col-md-2"></div>
            </div>
          </div>
        </BgGradient>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2" />
            <div className="col">
              <div className="row row-cols-1 row-cols-md-2 g-4 p-4">
              <div className="col">
              <Link to="/merchant/branch/webPOS">
                  <div className="card h-100  card rounded-10  ">
                    <div className="card-body ">
                      <div className="iconStaffManagement align-items-center">
                        <img src={pos} alt="WebPOS" />
                      </div>
                      <h2 className="card-title mt-2 mb-2 text-center">
                        web POS
                      </h2>
                      <h3 className="card-title mt-2 mb-2 text-center">
                      เว็บโพส
                      </h3>
                    </div>
                  </div></Link>
                </div> <Link to="/merchant/branch/Dashboard">
                <div className="col">
                  <div className="card h-100 card rounded-10  ">
                    <div className="card-body">
                      <div className="iconStaffManagement align-items-center">
                        <img src={dash} alt="Dashboard" />
                      </div>
                      <h2 className="card-title mt-2 mb-2 text-center">
                      Dashbroad
                      </h2>
                      <h3 className="card-title mt-2 mb-2 text-center">
                      แดชบอร์ด
                      </h3>
                    </div>
                  </div>
                </div></Link>
                <Link to="/merchant/branch/staff-Management"><div className="col">
                  <div className="card dashMenuBody h-100 card rounded-10 "  >
                    <div className="card-body ">
                      <div className="iconStaffManagement align-items-center">
                        <img src={staff} alt="staff Management" />
                      </div>
                      <h2 className="card-title mt-2 mb-2 text-center">
                      Staff Management
                      </h2>
                      <h3 className="card-title mt-2 mb-2 text-center">
                      จัดการพนักงาน
                      </h3>
                    </div>
                  </div>
                </div>
                </Link>
                <div className="col">
                <Link to="/merchant/branch/branch-Management">
                  <div className="card h-100 card rounded-10 ">
                    <div className="card-body">
                      <div className="iconStaffManagement align-items-center">
                        <img src={branch} alt="branch" />
                      </div>
                      <h2 className="card-title mt-2 mb-2 text-center">
                      Branch Management
                      </h2>
                      <h3 className="card-title mt-2 mb-2 text-center">
                      จัดการสาขา
                      </h3>
                    </div>
                  </div></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2" />
            <BtnOrange type="button" className="btn btn-outline rounded-all" onClick={(e) => this.handleClick(e)}>ออกจากระบบพนักงาน</BtnOrange>
          </div>         
        </div>
      </div>
    );
  }
}

const mapDispatch = { logoutPin };
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatch)(StaffView)
