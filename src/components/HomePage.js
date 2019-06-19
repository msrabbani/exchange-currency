import React, { Component } from 'react'
import axios from 'axios'

class Homepage extends Component {
    constructor() {
    super()
        this.state = {
            dataApi: []
        }
    }

        componentDidMount(){
            this.getApi();
       }

        getApi = () => {
            axios.get('https://api.exchangeratesapi.io/latest')
                .then(res => {this.setState({
                    dataApi: res.data
                })
             })
        }
     

    render() {
        const { dataApi } = this.state
        return (
            <div>
            <h1>Home Page</h1>
                <pre><code>{JSON.stringify(dataApi, null, 4)}</code></pre>
            </div>
        )
    }
}

export default Homepage
