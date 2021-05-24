import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import color from "../config/color";
import logo from "../asssets/img/logoM.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios"
import $ from "jquery"

const BtnOrange = styled.button`
  background-color: ${color.Button};
  border-style: none;
  border-radius: 20px;
  &:hover {
    background-color: ${color.ButtonOrange};
  }
`;
const BgGreen = styled.div`
  height: 300px;
  background: ${color.Green};
  border-radius: 0px 0px 35px 35px;
`;
const MarginTop = styled.div`
  margin-top: 20vh;
`;

export default class Register extends Component {
  handleClick() {
    var fname = $('#_fname').val()
    var branchInfo = {
      branchId: 4,
      branchName: fname,
      branchLogo: "11111111111",
      detail: "ชาดีที่คุณไว้วางใจ",
      phone: "027777777",
      userName: "chapayombangbon",
      password: "345678",
      masterAccount: 1,
      districtId: 19,
      merchantId: 1,
      categoryMerchant: "test"
    }
    axios.post('http://localhost:3001/merchant/v1/register', {
      branchInfo
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <BgGreen >
          <div className="container">
            <div className="position-absolute overlap-box row align-items-center">
              <div className="col-lg-3 col-md-2"></div>
              <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded-10">
                <div > <Link className="body " to="/">
                  <img src={logo} alt="buddyrewards" width="200" />
                </Link>
                </div>
                <h3 className="text-left mt-3 mb-3">สมัครบัญชีร้านค้า</h3>
                <form action="/register" method="post" noValidate>
                  <div className="col form-group mt-2">
                    <input type="text" name="userName" id="userName" className="form-control" placeholder="Merchant Username" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="password" name="password" id="password" className="form-control" placeholder="Merchant Password" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="text" name="repeatPassword" id="repeatPassword" className="form-control" placeholder="Repeat Merchant Password" required></input>
                  </div>
                  <h5 className="text-left mt-3 mb-3">ข้อมูลเจ้าของร้าน</h5>
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
                  <h5 className="text-left mt-3 mb-3">ข้อมูลร้านค้า</h5>
                  <div className="col form-group mt-2">
                    <input type="text" name="branchName" id="branchName" className="form-control" placeholder="Merchant Name" required></input>
                  </div>
                  <div className="col form-floating mt-2">
                    <select class="form-select" id="categoryName" required>
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label for="floatingInputInvalid">Merchant Category</label>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="text" name="branchPhone" id="branchPhone" className="form-control" placeholder="Merchant Phone" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="text" name="districtName" id="districtName" className="form-control" placeholder="District" required></input>
                  </div>
                  <div className="col form-group mt-2">
                    <input type="text" name="provinceName" id="provinceName" className="form-control" placeholder="Province" required></input>
                  </div>
                  <div className="col text-center form-group mt-4 d-grid gap-2 col-6 mx-auto">
                    <BtnOrange className="btn btn-primary" type="submit">
                      Submit
                  </BtnOrange>
                  </div>
                </form>
              </MarginTop>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </BgGreen>
      </div>
    );
  }
}
