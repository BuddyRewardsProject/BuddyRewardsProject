import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import logo from "../assets/img/logoM.svg";
import logoBW from "../assets/img/logoMBW.svg";
import { Link } from "react-router-dom";
import axios from "axios"
import $ from "jquery"
import sha512 from "js-sha512"
import message from 'antd/lib/message/index';
import { setUser } from "../actions/authActions";
import jwt from 'jsonwebtoken'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const SECRET_KEY = '2aaf1e7d17a8d4706225480585767166cabd'

const BtnOrange = styled.div`
  background: ${color.Gradient};
  border-style: none;
  font-size: 25px;
  border-radius: 99px;
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
  @media (min-width: 320px) and (max-width: 768px) {
  margin-top: 50%;
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleClick(e) {
    e.preventDefault();
    var userNameInput = $('#userName').val()
    var passwordInput = $('#password').val()
    var hash = sha512.hmac.create(SECRET_KEY);
    hash.update(passwordInput);
    this.login(userNameInput, hash.hex())
  }

  login(userName, password) {
    axios.post('/merchant/v1/login', {
      userName: userName,
      hashPassword: password
    })
      .then((response) => {
        if (response.data.status === "error") return message.error(response.data.errorMessage);
        this.props.setUser(jwt.decode(response.data.accessToken)) 
        localStorage.setItem("branchToken", response.data.accessToken);
        window.location.href = '/merchant/login/pin';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    $(document).on('keypress', (e) => {
      if (e.which === 13) {
        var userNameInput = $('#userName').val()
        var passwordInput = $('#password').val()
        var hash = sha512.hmac.create(SECRET_KEY);
        hash.update(passwordInput);
        this.login(userNameInput, hash.hex())
      }
    });
    console.log(this.props)
    localStorage.removeItem("pinToken");
  }

  render() {
    return (
      <BgGreen>
        <div className="container">
          <div className="position-absolute overlap-box row align-items-center">
            <div className="col-lg-3 col-md-2"></div>
            <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded-10">
              <div>
                <div>
                  {" "}
                  <Link className="body" to="/">
                    <img src={logo} alt="buddyrewards" width="200" />
                  </Link>
                </div>
                <div className="text-left fontSize25 mt-3 DbBold">เข้าสู่ระบบร้านค้า</div>
                <div className="col form-group ">
                  <label>Username</label>
                  <div>
                    <input
                      type="text"
                      name="Username"
                      id="userName"
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
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    ></input>
                  </div>
                </div>
                <div className="col text-center form-group mt-2 d-grid gap-2 col-6 mx-auto">
                  <BtnOrange className=" btn-primary " type="button" onClick={(e) => this.handleClick(e)}>
                   เข้าสู่ระบบ
                  </BtnOrange>
                </div>
              </div>
            </MarginTop>
            <div className="col-lg-3 col-md-2"></div>
            <Link className="body" to="/merchant/register">
              <h5 className="text-center ">
                ไม่มีบัญชีร้านค้าใช้มั้ย สมัครเลย! คลิก
              </h5>
              
            </Link>
          </div>
        </div>
        <footer class="text-center text-white fixed-bottom mt-3 mb-3"> <div><img src={logoBW} alt="buddyrewards" width="130" /></div>
                  
                   </footer>
                   
      </BgGreen>
      
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUser }, dispatch)
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)