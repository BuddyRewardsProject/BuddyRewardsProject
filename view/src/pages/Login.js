import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import logo from "../asssets/img/logoM.svg";
import { Link } from "react-router-dom";

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
  background: ${color.Gradient};
  border-radius: 0px 0px 35px 35px;
`;
const MarginTop = styled.div`
  margin-top: 15%;
`;
const Formsize = styled.form`
  padding: 20px;
`;
export default class Login extends Component {
  render() {
    return (
      <BgGreen>
        <div className="container">
          <div className="position-absolute overlap-box row align-items-center">
            <div className="col-lg-3 col-md-2"></div>
            <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded-10">
              <Formsize action="/login" method="post">
                <div>
                  {" "}
                  <Link className="body " to="/">
                    <img src={logo} alt="buddyrewards" width="200" />
                  </Link>
                </div>
                <h3 className="text-left mt-3 mb-3 DBB">เข้าสู่ระบบร้านค้า</h3>
                <div className="col form-group mt-2">
                  <label>Username</label>
                  <div>
                    <input
                      type="text"
                      name="Username"
                      id="_rname"
                      className="form-control"
                      placeholder="Username"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col form-group mt-2">
                  <label>Password</label>
                  <div>
                    <input
                      type="password"
                      name="Password"
                      id="_rpassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col text-center form-group mt-2 d-grid gap-2 col-6 mx-auto">
                  <BtnOrange className="btn btn-primary" type="submit">
                    login
                  </BtnOrange>
                </div>
              </Formsize>
              <Link className="col text-center form-group mt-2 d-grid gap-2 col-6 mx-auto" to="/merchant/PinMerchantLogin">
                <BtnOrange className="btn btn-primary" >
                  PIN
                </BtnOrange>
              </Link>
            </MarginTop>
            <div className="col-lg-3 col-md-2"></div>
            <Link className="body DB" to="/merchant/register">
              <h5 className="text-center ">
                ไม่มีบัญชีร้านค้าใช้มั้ย สมัครเลย! คลิก
              </h5>
            </Link>
          </div>
        </div>
      </BgGreen>
    );
  }
}
