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
  background: #6FCF97;
  border-radius: 0px 0px 35px 35px;
`;
const MarginTop = styled.div`
  margin-top: 20vh;
`;
const Formsize = styled.form`
  padding: 40px;
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
                <h5 className="text-left mt-3 mb-3">ลงทะเบียนร้านค้า</h5>
                <form action="/register" method="post" noValidate>
                  <div className="col form-group mt-2">
                    <label>Category Name</label>
                    <div>
                      <input type="text" name="CategoryName" id="_cname" className="form-control" placeholder="Category Name" required></input>
                    </div>
                  </div>
                  <div className="col form-group mt-2">
                    <label>Merchant Name</label>
                    <div>
                      <input type="text" name="MerchantName" id="_mname" className="form-control" placeholder="Merchant Name" required></input>
                    </div>
                  </div>
                  <div className="col form-group mt-2">
                    <label>Branch Name</label>
                    <div>
                      <input type="text" name="BranchName" id="_bname" className="form-control" placeholder="Branch Name" required></input>
                    </div>
                  </div>
                  <div className="col form-group mt-2">
                    <label>Username</label>
                    <div>
                      <input type="text" name="Username" id="_busername" className="form-control" placeholder="Username" required></input>
                    </div>
                  </div>
                  <div className="col form-group mt-2">
                    <label>Password</label>
                    <div>
                      <input type="password" name="Password" id="_bpassword" className="form-control" placeholder="Password" required></input>
                    </div>
                  </div>
                  <div className="col text-center form-group mt-2">
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
