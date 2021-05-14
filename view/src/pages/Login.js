import React, { Component } from 'react'
import styled from 'styled-components'
import color from '../config/color'

const BtnOrange = styled.button`
    background-color: ${color.Button};
    border-style: none;
    border-radius: 20px;
    &:hover{
         background-color: ${color.ButtonOrange};
    }
`
const BgGreen = styled.div`
    background-color: ${color.Green};
    height: 249px;
`
const MarginTop = styled.div`
    margin-top: 20vh;
`
const Formsize = styled.form`
    padding: 40px;
`
export default class Login extends Component {
    render() {
        return (
            <BgGreen>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-2"></div>
                    <MarginTop className="col bg-white shadow p-3 mb-5 bg-body rounded">
                        <Formsize action="/login" method="post">
                            <h1 className="text-center">Login</h1>
                            <div className="col form-group mt-2">
                                <label>Username</label>
                                <div>
                                    <input type="text" name="Username" id="_rname" className="form-control" placeholder="Username" required></input>
                                </div>
                            </div>
                            <div className="col form-group mt-2">
                                <label>Password</label>
                                <div>
                                    <input type="password" name="Password" id="_rpassword" className="form-control" placeholder="Password" required></input>
                                </div>
                            </div>
                            <div className="col text-center form-group mt-2 d-grid gap-2 col-6 mx-auto">
                                <BtnOrange className="btn btn-primary" type="submit">Submit</BtnOrange>
                            </div>
                        </Formsize>
                    </MarginTop>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
            </BgGreen>
        )
    }
}
