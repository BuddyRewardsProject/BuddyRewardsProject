import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import NavTopMyCard from "../../layouts/NavTopMyCard";

import Navigation from '../../layouts/Navigation';
class CustomerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merchantId: null,
      merchantName: null,
    };
  }
  componentDidMount() {
    axios
      .get("/home")
      .then((response) => {
        // handle success
        this.setState({
          merchantId: response.data.results.merchantId,
          merchantName: response.data.results.merchantName,
        });
        console.log(response.data[0]);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }
  render() {
    return (
      <>
      <Helmet>
      <title>บัตรของคุณ</title>
    </Helmet>
    <NavTopMyCard></NavTopMyCard>
           <Navigation history={this.props.history}
        ></Navigation>
        <div className="container">
          <div className="row text-left">
            <h1>บัตรสะสมแต้มของคุณ</h1>
            <span className="second-word-formatting"> </span>
            <div>
              <input
                type="text"
                name="nickname"
                id="nickName"
                className="form-control"
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

            <div className="col col-lg-3"></div>

            <div className="col col-lg-3"></div>
            <div></div>
            <button
              type="button"
              className="btn btn-outline rounded-all btnOrg"
            >
             
              LINE LOGIN
            </button>
          </div>
        </div>
      </>
    );
  }
}


export default CustomerCard;
