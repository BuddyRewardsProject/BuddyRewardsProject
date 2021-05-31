import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import Navbar2 from "../layouts/Navbar2";
import logo from "../assets/img/merchantLOGO.svg";
import plus from "../assets/img/plusSM.svg";


const BgGradient = styled.div`
  height: 200px;
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

export default class BranchManagement extends Component {
  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="addStaff"
          tabindex="-1"
          aria-labelledby="addStaffLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addStaffLabel">
                  add Branch
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
              <div className="col form-group mt-2">
                    <input type="text" name="userName" id="userName" className="form-control" placeholder="Merchant Username" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="password" name="password" id="password" className="form-control" placeholder="Merchant Password" required></input>
                  </div>
                  
                  <h5 className="text-left mt-3 mb-3 DBB">ข้อมูลเจ้าของร้าน</h5>
                  <div className="row g-3">
                    <div className="col-6 form-group mt-2">
                      <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" required></input>
                    </div>
                    <div className="col-6 form-group mt-2">
                      <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" required></input>
                    </div></div>
                  <div className="col form-group mt-2">
                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" required></input>
                  </div>
                  <h5 className="text-left mt-3 mb-3 DBB">ข้อมูลร้านค้า</h5>
                  <div className="col form-group mt-2">
                    <input type="text" name="merchantName" id="merchantName" className="form-control" placeholder="Merchant Name" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="text" name="branchName" id="branchName" className="form-control" placeholder="Branch Name" required></input>
                  </div>
               
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary DB"
                  data-bs-dismiss="modal"
                >
                  ยกเลิก
                </button>
                <button type="button" class="btn btn-primary DB">
                  บันทึกข้อมูล
                </button>
              </div>
            </div>
          </div>
        </div>
        <Navbar2 />
        <BgGradient>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-1 col-md-2"></div>
              <MarginTop className="col">
                <BranchNameSize>Branch Management</BranchNameSize>
              </MarginTop>
              <div className="col-lg-1 col-md-2"></div>
            </div>
          </div>
        </BgGradient>
        
        <div className="container">
      
  
          <div className="row">
            <div className="col-lg-3 col-md-2" />
            <div className="col">
              <div className="row row-cols-1 row-cols-md-1 g-4 p-4 text-center">
              <div className="col">
                  <div className="card">
                    <div className="card-body">
                    <div className="row justify-content-md-left">
    <div className="col-md-auto lg-auto">
    <img src={logo} alt="logo" />
    </div>
    <div className="col-md-auto lg-auto topbt ">
    <h2 className="card-title ">MerchantName </h2>
  
    <button type="button" className="btn btn-outline rounded-all btnOrg "> edit </button>
    </div>
  
  </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div className="iconStaffManagement align-items-center">
                        <img src={logo} alt="logo" />
                      </div>
                      <h5 className="card-title mt-3 mb-1">MerchantName</h5>
                      <h6 className="card-title ">BranchName</h6>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <div
                        className="iconStaffManagement align-items-center"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#addStaff"
                      >
                        <img src={plus} alt="logo" />
                      </div>

                      <h5 className="card-title mt-3 mb-1">add branch</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}
