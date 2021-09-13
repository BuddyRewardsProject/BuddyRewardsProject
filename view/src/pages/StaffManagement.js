import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import Navbar2 from "../layouts/Navbar2";
import logo from "../assets/img/userM.svg";
import axios from "axios"
import $ from "jquery"
import { connect } from 'react-redux'

import message from 'antd/lib/message/index';
import plus from "../assets/img/plusSM.svg";
import PinInput from "react-pin-input";
const key = 'updatable';

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
class StaffManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: null,
      pin: null,
      staffList: []
    }
    this.modal_announcement = null;
    this.modal = null;
  }

  onHandlePinInput(pincode) {
    this.setState({
      pin: pincode
    })
  }

  openModel(e) {
    e.preventDefault();
    this.modal_announcement = document.getElementById("add");
    this.modal = new window.bootstrap.Modal(this.modal_announcement);
    this.modal.show();
  }

  handleClick(e) {
    e.preventDefault();
    this.modal.hide();
    var staffFirstName = $('#firstName').val()
    var staffLastName = $('#lastName').val()
    var staffPhone = $('#phone').val()
    var roleName = $('#roleName').val()

    var data = {
      staffFirstName: staffFirstName,
      staffLastName: staffLastName,
      staffPin: this.state.pin,
      staffPhone: staffPhone,
      roleId: roleName,
      branchId: this.props.auth.user.branchId
    }
    axios.post('/merchant/v1/branch/staff/add', {
      data
    })
      .then((response) => {
        if (response.data.status === "success") {
          message.success({ content: 'สำเร็จแล้ว!', key, duration: 2 });
          window.location.reload();
        } else {
          message.error({ content: 'เกิดข้อผิดพลาด!', key, duration: 2 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  removeUser(staffId){

    console.log(staffId)
    axios.post('/merchant/v1/branch/staff/remove', {
      staffId: staffId
    })
      .then((response) => {
        if (response.data.status === "success") {
          message.success({ content: 'สำเร็จแล้ว!', key, duration: 2 });
          window.location.reload();
        } else {
          message.error({ content: 'เกิดข้อผิดพลาด!', key, duration: 2 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios.post('/merchant/v1/branch/staff/init', { branchId: this.props.auth.user.branchId })
      .then((response) => {
        console.log(response.data)
        this.setState({
          roles: response.data.roles,
          staffList: response.data.staffList
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="addStaffLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addStaffLabel">
                  add Staff
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <contains>
                  <div className="iconStaffManagement align-items-center">
                    <img src={plus} alt="logo" />
                  </div>
                  <h3 className="text-center mt-3 mb-3">กรอกข้อมูลพนักงาน</h3></contains>
                <div className="row g-3">
                  <div className="col-6 form-group mt-2">
                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" required></input>
                  </div>
                  <div className="col-6 form-group mt-2">
                    <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" required></input>
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
                <select class="form-select mt-2" id="roleName" required>
                  <option selected>Choose...</option>
                  {this.state.roles !== null && this.state.roles.map(r =>
                    <option key={r.role_id} value={r.role_id}>{r.role_name}</option>
                  )}
                </select>
                <div className="text-center ">
                  <h4 className="text-center mt-3 mb-3 DB">
                    กรอก PIN ของคุณเพื่อใช้ในการเข้าสู่ระบบ
                  </h4>
                  <PinInput
                    length={6}
                    initialValue=""
                    secret={false}
                    onChange={(v) => this.onHandlePinInput(v)}
                    type="numeric"
                    inputMode="tel"
                    focus={true}
                    style={{ padding: "10px" }}
                    inputStyle={{ borderColor: "grey" }}
                    inputFocusStyle={{ borderColor: "green" }}
                    onComplete={(value, index) => { }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                <button type="button" class="btn btn-primary" onClick={(e) => this.handleClick(e)}>บันทึกข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <Navbar2 />
        <BgGradient>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-1 col-md-2 "></div>
              <MarginTop className="col">
                <BranchNameSize>Staff Management</BranchNameSize>
              </MarginTop>
              <div className="col-lg-1 col-md-2"></div>
            </div>
          </div>
        </BgGradient>
        <div className="container">
          <div className="row">
            
            <div className="col-lg-1 col-md-2" />
            
            <div className="col">
            <h2 className="text-end">ผู้ใช้งาน NoiD {this.props.pinAuth.staff.staffId} name {this.props.pinAuth.staff.firstName}</h2>
            
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3  g-3 p-3  text-center">
              <div className="col">
                  <div className="card h-100 rounded-10 ">
                    <div className="card-body">
                      <div className="iconStaffManagement align-items-center" onClick={(e) => this.openModel(e)}>
                        <img src={plus} alt="logo" />
                      </div>
                      <h3 className="card-title mt-3 mb-2">add staff</h3>
                      <h6 className="card-title ">เพิ่ม staff</h6>
                      <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" className="btn btn-outline rounded-all btnOrg" onClick={(e) => this.openModel(e)}> Add staff </button></div>
                    </div>
                  </div>
                </div>
                {this.state.staffList !== null && this.state.staffList.map((s,r) =>
                  <div className="col">
                    <div className="card rounded-10 ">
                      <div className="card-body ">
                        <div className="iconStaffManagement align-items-center">
                          <img src={logo} alt="logo" />
                        </div>
                        <h3 className="card-title mt-3 mb-2" key={s.first_name}>{s.first_name}</h3>
                        <h6 className="card-title" key={s.role_id}>
                          {s.role_id === 1 ? "Owner" : null}{s.role_id === 2 ? "Manger" : null}{s.role_id === 3 ? "Cashier" : null}
                        </h6>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button type="button" className="btn btn-outline-danger rounded-all" onClick={() => this.removeUser(s.staff_id)}> Delete </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
            <div className="col-lg-1 col-md-2" />

          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(StaffManagement)