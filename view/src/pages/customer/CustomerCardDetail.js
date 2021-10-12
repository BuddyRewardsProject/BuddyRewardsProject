import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import color from "../../config/color";
import "../../assets/css/CustomerSide/Customer.css";
import Navigation from "../../layouts/Navigation";
import styled from "styled-components";

import merchantLOGO from "../../assets/img/icon/merchantPreLoad.svg";
const BgBanner = styled.div`
  height: 339px;
  background: ${color.Gradient};
  border-radius: 0px 0px 25px 25px;
`;
const Card = styled.div`

`;

class CustomerCardDetail extends Component {
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
          <title>Detail</title>
        </Helmet>
        
        <Navigation history={this.props.history}></Navigation>
        <BgBanner className="container ">
          
        <Card className="text-center">
          <img
              src={merchantLOGO}
              class=" margintop30"
              alt="barcodeScan"
              width="120px"
            />
            <div className="cardDetialHeaderText">marchant name</div>
            <div className="cardBGforDetial cardNamemiddleforDetial">คุณมี 5 แต้ม</div>
          </Card>

          <div className="HistoryBtn middleforHistoryBtn">ประวัติการสะสม</div>

        </BgBanner>
      </>
    );
  }
}

export default CustomerCardDetail;
