import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-3 col-md-2"></div>
                    <div className="col bg-light" padding="10px">
                        <h1 className="text-center">Login</h1>
                        <form action="/login" method="post">
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
                                <button className="btn btn-success" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        )
    }
}
