import React, { Component } from 'react'
import styled from 'styled-components'

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                    <div className="col bg-light">
                        <h1 className="text-center">Register</h1>
                        <form action="/register" method="post" noValidate>
                            <div className="col form-group mt-2">
                                <label>Branch Name</label>
                                <div>
                                    <input type="text" name="BranchName" id="_rbname" className="form-control" placeholder="Branch Name" required></input>
                                </div>
                            </div>
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
                            <div className="col text-center form-group mt-2">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-2"></div>
                </div>
            </div>
        )
    }
}
