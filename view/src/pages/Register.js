import React, { Component } from 'react'

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
                                <label>Category Name</label>
                                <div>
                                    <input type="text" name="CategoryName" id="_cname" className="form-control" placeholder="Category Name" required></input>
                                </div>
                            </div>
                            <div className="col form-group mt-2">
                                <label>Merchant Name</label>
                                <div>
                                    <input type="text" name="MerchantName" id="_mname" className="form-control" placeholder="Merchant Name" required></input>
                                </div>
                            </div>
                            <div className="col form-group mt-2">
                                <label>Branch Name</label>
                                <div>
                                    <input type="text" name="BranchName" id="_bname" className="form-control" placeholder="Branch Name" required></input>
                                </div>
                            </div>
                            <div className="col form-group mt-2">
                                <label>Username</label>
                                <div>
                                    <input type="text" name="Username" id="_busername" className="form-control" placeholder="Username" required></input>
                                </div>
                            </div>
                            <div className="col form-group mt-2">
                                <label>Password</label>
                                <div>
                                    <input type="password" name="Password" id="_bpassword" className="form-control" placeholder="Password" required></input>
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
