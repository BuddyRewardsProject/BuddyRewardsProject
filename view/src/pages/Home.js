import React, { Component } from "react"
import axios from "axios"
import Navbar from "../layouts/Navbar";


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            merchantId: null,
            merchantName: null
        }
    }
    componentDidMount() {

        axios.get('http://localhost:3001/home')
            .then((response) => {
                // handle success
                this.setState({
                    merchantId: response.data.results.merchantId,
                    merchantName: response.data.results.merchantName
                })
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
            <Navbar></Navbar>
                <div className="container">
                    <div className="row text-center">
                        <div className="col col-lg-3"></div>
                        <div className="col">
                            <h1>ร้านค้าที่ใช้บริการกับทางเรา</h1>
                            {this.state.merchantId} {this.state.merchantName}
                        </div>
                        <div className="col col-lg-3"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home