import React, { Component } from "react";
import styled from "styled-components";
import color from "../config/color";
import Navbar2 from "../layouts/Navbar2";

const BgGradient = styled.div`
  height: 300px;
  background: ${color.Gradient};
`;
const MarginTop = styled.div`
    margin-top: 8%;
`
const BranchNameSize = styled.h2`
    font-size: 48px;
    font-style: bold;
    color: white;
`

export default class Login extends Component {
    render() {
        return (
            <div>
                <Navbar2 />
                <BgGradient>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-1 col-md-2"></div>
                            <MarginTop className="col">
                                <BranchNameSize>Simple cafe</BranchNameSize>
                            </MarginTop>
                            <div className="col-lg-1 col-md-2"></div>
                        </div>
                    </div>
                </BgGradient>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2" />
                        <div className="col">
                            <div className="row row-cols-1 row-cols-md-2 g-4 p-4">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Web POS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">Web POS</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2" />
                    </div>
                </div>
            </div>
        );
    }
}
