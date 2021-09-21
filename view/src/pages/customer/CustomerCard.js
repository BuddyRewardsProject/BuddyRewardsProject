import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import NavTopMyCard from "../../layouts/NavTopMyCard";
import "../../assets/css/CustomerSide/Customer.css";
import Navigation from "../../layouts/Navigation";
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
        <Navigation history={this.props.history}></Navigation>
        <div className="container ">
          <div className="margintopforcard">
            
            <div className="cardBG cardNamemiddle">บัตรสะสมแต้มจ้าาาา</div>
            <div className="cardBG cardNamemiddle">บัตรสะสมแต้มจ้าาาา</div>
            <div className="cardBG cardNamemiddle">บัตรสะสมแต้มจ้าาาา</div>
          </div>
        </div>
      </>
    );
  }
}

export default CustomerCard;
