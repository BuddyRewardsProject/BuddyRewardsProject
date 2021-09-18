import React, { Component } from "react";
import axios from "axios";
import Navbar from "../../layouts/NavbarCustomer";
import logo from "../../assets/img/logoC.svg";
import Navigation from "../../layouts/Navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import colorNavBottom from "../../config/colorNavBottom";



const BtnOrange = styled.button`
  background-color: ${colorNavBottom.Button};
  border-style: none;
  border-radius: 20px;
  &:hover {
    background-color: ${colorNavBottom.ButtonOrange};
  }
`;
const BgGreen = styled.div`
  height: 70px;
  background: ${colorNavBottom.Gradient};
  border-radius: 0px 0px 0px 0px;
`;

class CustomerRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantId: null,
      merchantName: null,
      name: "",
      userLineID: "",
      pictureUrl: "",
    };
  }

  componentDidMount = async () => {
    await window.liff.init({ liffId: "1656382933-9DzLvxlE" }).catch((err) => {
      alert(err);
    });
    if (window.liff.isLoggedIn()) {
      let user = await window.liff.getProfile();
      const accessToken = window.liff.getAccessToken();
      console.log(accessToken);
      this.setState({
        user: user,
      });
    } else {
      window.liff.login();
    }
  };

  render() {
    
    return (
      <>
        <div className="container">
        
          {this.state.user ?
          <>
          <p>ชื่อ {this.state.user.displayName}</p>
          <p>Line ID {this.state.user.userId}</p>
          <img alt="pic" src={this.state.user.pictureUrl} />
          </>
          :
          <div>loading</div>
  }
          <div className="row text-left">
            <div>
              <img
                src={logo}
                className="logo-paddingCustomer"
                alt="buddyrewards"
                width="170"
              />
            </div>
            <div>
              <input
                type="text"
                name="nickname"
                id="nickName"
                className="form-control "
                placeholder="nickname"
                required
              ></input>
            </div>

            <div>
              <input
                type="text"
                name="firstname"
                id="firstName"
                className="form-control"
                placeholder="firstname"
                required
              ></input>
            </div>

            <div>ddd</div>
            <button type="button" className="btn rounded-all btnOrg">
              LINE LOGIN
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerRegister;
