import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import Navbar2 from "../layouts/Navbar2";
import logo from "../assets/img/userM.svg";

import plus from "../assets/img/plusSM.svg";
import PinInput from "react-pin-input";

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



export default class StaffManagement extends Component {
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
                  add Staff
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                  <contains>
              <div
                    className="iconStaffManagement align-items-center" 
                  >
                    <img src={plus} alt="logo" />
                  </div>
                  <h3 className="text-center mt-3 mb-3 DB">
                    กรอกข้อมูลพนักงาน
                  </h3></contains>
                <div className="row g-3">
                  
                  <div className="col-6 form-group mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-control"
                      placeholder="First Name"
                      required
                    ></input>
                  </div>
                  <div className="col-6 form-group mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col form-group mt-2">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Phone"
                    required
                  ></input>
                </div>
                <select class="form-select mt-2" id="Role" required>
                      <option selected>Role...</option>
                      <option selected>Role...</option>
                    </select>
                <div className="text-center ">
                  <h4 className="text-center mt-3 mb-3 DB">
                    กรอก PIN ของคุณเพื่อใช้ในการเข้าสู่ระบบ
                  </h4>
                  <PinInput
                    length={6}
                    initialValue=""
                    secret={false}
                    onChange={(v) => console.log(v)}
                    type="alphanumeric"
                    inputMode="tel"
                    focus={true}
                    style={{ padding: "10px" }}
                    inputStyle={{ borderColor: "grey" }}
                    inputFocusStyle={{ borderColor: "green" }}
                    onComplete={(value, index) => {}}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
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
                <BranchNameSize>Staff Management</BranchNameSize>
              </MarginTop>
              <div className="col-lg-1 col-md-2"></div>
            </div>
          </div>
        </BgGradient>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2" />
            <div className="col">
              <div className="row row-cols-1 row-cols-md-2 g-4 p-4 text-center">
              <div className="col">
                  
                  <div className="card rounded-10 ">
                    <div className="card-body ">
                      <div className="iconStaffManagement align-items-center">
                        <img src={logo} alt="logo" />
                      </div>
                      <h3 className="card-title mt-3 mb-2">owner name</h3>
                      <h6 className="card-title ">owner</h6>
                      <div className="d-grid gap-2 col-6 mx-auto">
                      <button type="button" className="btn btn-outline rounded-all btnOrg"> edit </button></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  
                  <div className="card rounded-10 ">
                    <div className="card-body">
                      <div className="iconStaffManagement align-items-center">
                        <img src={logo} alt="logo" />
                      </div>
                      <h3 className="card-title mt-3 mb-2">demo2</h3>
                      <h6 className="card-title ">role</h6>
                      <div className="d-grid gap-2 col-6 mx-auto">
                      <button type="button" className="btn btn-outline rounded-all btnOrg"> edit </button></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 rounded-10 ">
                    <div className="card-body">
                      <div
                        className="iconStaffManagement align-items-center"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#addStaff"
                      >
                        <img src={plus} alt="logo" />
                      </div>

                      <h3 className="card-title mt-3 mb-2">add staff</h3>
                      <h6 className="card-title ">add staff</h6>
                      <div className="d-grid gap-2 col-6 mx-auto">
                      <button type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#addStaff" className="btn btn-outline rounded-all btnOrg "> Add staff </button></div>
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
