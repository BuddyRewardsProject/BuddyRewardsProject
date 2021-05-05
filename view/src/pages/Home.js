import React, { Component } from "react"
import axios from "axios"

class Home extends Component {

    constructor(props) {
        super(props)
        // this.state = {
        //     merchantId: null,
        //     merchantName: null
        // }
    }
    // componentDidMount() {
        
    //     axios.get('http://localhost:3001/merchant')
    //         .then((response) => {
    //             // handle success
    //             this.setState({
    //                 merchantId: response.data.results.merchantId,
    //                 merchantName: response.data.results.merchantName
    //             })
    //             console.log(response.data[0]);
    //         })
    //         .catch((error) => {
    //             // handle error
    //             console.log(error);
    //         })
    //         .then(() => {
    //             // always executed
    //         });
    // }
    render() {
        return (
            <>
                <div>home 
                    {/* {this.state.merchantId} {this.state.merchantName} */}
                    </div>
                <h1>โฮมเพจ</h1>
            </>
        )
    }
}

export default Home