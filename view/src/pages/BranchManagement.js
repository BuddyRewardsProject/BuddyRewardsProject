import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import Navbar2 from "../layouts/Navbar2";
import logo from "../assets/img/merchantLOGO.svg";
import plus from "../assets/img/plusSM.svg";
import axios from "axios"
import $ from "jquery"
import { connect } from 'react-redux'

import message from 'antd/lib/message/index';
const key = 'updatable';

const BgGradient = styled.div`
  height: 200px;
  background: ${color.Gradient};
`;

const BranchNameSize = styled.h2`
  font-size: 48px;
  font-style: bold;
  color: white;
`;
const MarginTop = styled.div`
  margin-top: 15vh;
`;

class BranchManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      provinces: [],
      districts: [],
      districtFilter: null,
      repeatPassword: null,
      formValidation: {
        repeatPassword: true,
        buttonState: ''
      },
      branchList: []
    }
    this.modal_announcement = null;
    this.modal = null;
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
    var merchantUserName = $('#userName').val()
    var merchantPassword = $('#password').val()
    var repeatMerchantPassword = $('#repeatPassword').val()
    var firstName = $('#firstName').val()
    var lastName = $('#lastName').val()
    var phone = $('#phone').val()
    var pincode = $('#pincode').val()
    var branchName = $('#branchName').val()
    var categoryName = $('#categoryName').val()
    var branchPhone = $('#branchPhone').val()
    var provinceName = $('#provinceName').val()
    var districtName = $('#districtName').val()

    var data = {
      merchantUserName: merchantUserName,
      merchantPassword: merchantPassword,
      repeatMerchantPassword: repeatMerchantPassword,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      pincode: pincode,
      branchName: branchName,
      categoryName: categoryName,
      branchPhone: branchPhone,
      provinceName: provinceName,
      districtName: districtName,
      userToken: localStorage.getItem("branchToken")
    }
    axios.post('/merchant/v1/branch/branchmanagement/add', {
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

  removeBranch(branchId) {
    console.log(branchId)
    axios.post('/merchant/v1/branch/branchmanagement/remove', {
      branchId: branchId
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
    axios.post('/merchant/v1/branch/branchmanagement/init', { branchId: this.props.auth.user.merchantId })
      .then((response) => {
        console.log(response.data)
        this.setState({
          categories: response.data.categories,
          provinces: response.data.provinces,
          districts: response.data.districts,
          branchList: response.data.branchList
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onProvinceSelection(e) {
    var districts = this.state.districts.filter(district => {
      return district.province_id === parseInt(e.target.value)
    })
    this.setState({ districtFilter: districts })
  }
  onRepeatPasswordInput(e) {
    var password = $('#password').val()
    if (!password || password.length === 0 || password === null) return false;
    if (password === e.target.value) {
      this.setState(prevState => ({
        formValidation: {                   // object that we want to update
          ...prevState.formValidation,    // keep all other key-value pairs
          repeatPassword: true,
          buttonState: 'active'       // update the value of specific key
        }
      }))
      $('#repeatPassword').removeClass('is-invalid')
      $('#repeatPassword').addClass('is-valid')
    } else {
      this.setState(prevState => ({
        formValidation: {                   // object that we want to update
          ...prevState.formValidation,    // keep all other key-value pairs
          repeatPassword: false,
          buttonState: ''       // update the value of specific key
        }
      }))
      $('#repeatPassword').addClass('is-invalid')
      $('#repeatPassword').removeClass('is-valid')
    }
  }

  render() {
    return (
      <div>
        <div class="modal fade" id="add" tabindex="-1" aria-labelledby="addStaffLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title DBB" id="addStaffLabel">
                  เพิ่มสาขาย่อย
                </h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className="col bg-body">
                  <h5 className="text-left mt-3 DBB">กรุณากรอกบัญชีร้านค้าสาขาย่อย</h5>
                  <div>
                    <div className="col form-group mt-2">
                      <input type="text" name="userName" id="userName" className="form-control" placeholder="Merchant Username" required></input>
                    </div>
                    <div className="col form-group mt-2">
                      <input type="password" name="password" id="password" className="form-control" placeholder="Merchant Password" required></input>
                    </div>
                    <div className="col form-group mt-2">
                      <input type="password" name="repeatPassword" id="repeatPassword" className="form-control" placeholder="Repeat Merchant Password" onChange={(e) => this.onRepeatPasswordInput(e)} required></input>
                      {!this.state.formValidation.repeatPassword && <small className="invalid-feedback">Password not match</small>}
                    </div>
                    <h5 className="text-left mt-3 mb-3 DBB">ข้อมูลร้านค้า</h5>
                    <div className="col form-group mt-2">
                      <input type="text" name="branchName" id="branchName" className="form-control" placeholder="Branch Name" required></input>
                    </div>
                    <div className="col form-floating mt-2">
                      <select class="form-select" id="categoryName" required>
                        <option selected>Choose...</option>
                        {this.state.categories !== null && this.state.categories.map(c =>
                          <option key={c.category_id} value={c.category_id}>{c.category_name}</option>
                        )}
                      </select>
                      <label for="floatingInputInvalid">Merchant Category</label>
                    </div>
                    <div className="col form-group mt-2">
                      <input type="text" name="branchPhone" id="branchPhone" className="form-control" placeholder="Merchant Phone" required></input>
                    </div>
                    <div className="col form-floating mt-2">
                      <select class="form-select" id="provinceName" onChange={(e) => this.onProvinceSelection(e)} required>
                        <option selected>Choose...</option>
                        {this.state.provinces !== null && this.state.provinces.map(p =>
                          <option key={p.province_id} value={p.id}>{p.name_in_thai}</option>
                        )}
                      </select>
                      <label for="floatingInputInvalid">Province</label>
                    </div>
                    {this.state.districtFilter !== null &&
                      <div className="col form-floating mt-2">
                        <select className="form-select" id="districtName" required>
                          <option selected>Choose...</option>
                          {this.state.districtFilter.map(d =>
                            <option key={d.district_id} value={d.id}>{d.name_in_thai}</option>
                          )}
                        </select>
                        <label for="floatingInputInvalid">District</label>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ยกเลิก</button>
                <button type="button" class="btn btn-primary" onClick={(e) => this.handleClick(e)} disabled={!this.state.formValidation.buttonState}>บันทึกข้อมูล</button>
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
                {this.props.auth.user.masterAccount === 1 &&
                  <div className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <div
                          className="iconStaffManagement align-items-center"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#addStaff"
                          onClick={(e) => this.openModel(e)}
                        >
                          <img src={plus} alt="logo" />
                        </div>

                        <h5 className="card-title mt-3 mb-1">add branch</h5>
                        <h6 className="card-title" onClick={(e) => this.openModel(e)}> เพิ่มสาขาในบัญชี</h6>
                      </div>
                    </div>
                  </div>
                }
                {this.state.branchList !== null && this.state.branchList.map((s) =>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className="iconStaffManagement align-items-center">
                          <img src={logo} alt="logo" />
                        </div>
                        <h5 className="card-title mt-3 mb-1" key={s.branch_name}>{s.branch_name}</h5>
                        <h6 className="card-title" key={s.master_account}>
                          {s.master_account === 0 ? "สาขาย่อย" : null}{s.master_account === 1 ? "สาขาหลัก" : null}
                        </h6>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, null)(BranchManagement)