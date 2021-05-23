import React, { Component } from "react"
import { Helmet } from 'react-helmet'
import Navbar from "../layouts/Navbar";

class Profile extends Component {

    constructor(props){
        super(props)

    }
    render (){
        
        return (
            
            <>
            <Navbar></Navbar>
            <Helmet>
          <title>Profile</title>
            </Helmet>
            <div>Profile</div>
            <h1>โปรไฟล์</h1>
            </>
        )
    }
}

export default Profile