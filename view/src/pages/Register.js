import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import color from "../config/color";
import logo from "../assets/img/logoM.svg";

import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios"
import $ from "jquery"
import PinInput from "react-pin-input";
import message from 'antd/lib/message/index';

const key = 'updatable';

const BtnOrange = styled.button`
  background-color: ${color.Button};
  border-style: none;
  border-radius: 20px;
  color: white;
  &:hover {
    background-color: ${color.ButtonOrange};
    color: white;
  }
`;
const BgGreen = styled.div`
  height: 300px;
  background: ${color.Green};
  border-radius: 0px 0px 35px 35px;
`;
const MarginTop = styled.div`
  margin-top: 15vh;
`;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      pin: null,
      provinces: null,
      districts: null,
      districtFilter: null,
      repeatPassword: null,
      formValidation: {
        repeatPassword: true,
        buttonState: ''
      }
    }
  }

  onHandlePinInput(pincode) {
    this.setState({
      pin: pincode
    })
  }

  handleClick(e) {
    e.preventDefault();
    var merchantUserName = $('#userName').val()
    var merchantPassword = $('#password').val()
    var repeatMerchantPassword = $('#repeatPassword').val()
    var ownerFirstName = $('#firstName').val()
    var ownerLastName = $('#lastName').val()
    var staffPhone = $('#phone').val()
    var merchantName = $('#merchantName').val()
    var branchName = $('#branchName').val()
    var rewardType = $('#rewardType').val()
    var categoryName = $('#categoryName').val()
    var branchPhone = $('#branchPhone').val()
    var provinceName = $('#provinceName').val()
    var districtName = $('#districtName').val()

    var data = {
      merchantUserName: merchantUserName,
      merchantPassword: merchantPassword,
      repeatMerchantPassword: repeatMerchantPassword,
      ownerFirstName: ownerFirstName,
      ownerLastName: ownerLastName,
      staffPhone: staffPhone,
      staffPin: this.state.pin,
      merchantName: merchantName,
      branchName: branchName,
      rewardType: rewardType,
      categoryName: categoryName,
      branchPhone: branchPhone,
      provinceName: provinceName,
      districtName: districtName
    }
    axios.post('/merchant/v1/register', {
      data
    })
      .then((response) => {
        if (response.data.status === "success") {
          message.success({ content: 'สำเร็จแล้ว!', key, duration: 2 });
          window.location.href = '/merchant/login';
        } else {
          message.error({ content: 'เกิดข้อผิดพลาด!', key, duration: 2 });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    axios.get('/merchant/v1/register/init')
      .then((response) => {
        this.setState({
          categories: response.data.categories,
          provinces: response.data.provinces,
          districts: response.data.districts
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
      <>
      
        <Navbar></Navbar>
        <BgGreen >
          
          <div className="container">
            
            <div className=" row align-items-center ">
              <div className="col-lg-3 col-md-2 "></div>
              <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded-10 ">
                <div > <Link className="body " to="/">
                  <img src={logo} alt="buddyrewards" width="200" />
                </Link>
                </div>
                <h3 className="text-left mt-3 mb-3 DB">สมัครบัญชีร้านค้า</h3>
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
                    <div className="text-center ">
                  <h6 className="text-center mt-3 mb-3 DB">
                    กรอก PIN ของคุณเพื่อเข้าใช้งาน
                  </h6>
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
                  <h5 className="text-left mt-3 mb-3 DBB">ข้อมูลร้านค้า</h5>
                  <div className="col form-group mt-2">
                    <input type="text" name="merchantName" id="merchantName" className="form-control" placeholder="Merchant Name" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="text" name="branchName" id="branchName" className="form-control" placeholder="Branch Name" required></input>
                  </div>
                  <div className="col form-floating mt-2">
                  <select class="form-select" id="rewardType" required>
                      <option selected>Choose...</option>
                      <option value="point">Point</option>   
                      <option value="stamp">Stamp</option>                 
                    </select>
                  <label for="floatingInputInvalid">Reward Type</label>
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
                  <div className="col text-center form-group mt-4 d-grid gap-2 col-6 mx-auto">
                    <BtnOrange className="btn" type="button" onClick={(e) => this.handleClick(e)} disabled={!this.state.formValidation.buttonState}>
                      Submit
                  </BtnOrange>
                  </div>
                </div>
              </MarginTop>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
         
        </BgGreen>
        
      </>
    );
  }
}
