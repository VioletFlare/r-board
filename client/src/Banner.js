import React, { Component } from 'react';
import axios from 'axios';

class Banner extends Component {

    constructor() {
        super();
        this.state = {
            isLoaded: false,
            url: "",
        }
    }


    componentDidMount() {
        axios.get('/api/getBannerUrl')
        .then((res) => {
            this.setState({ url: res.data.url })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <img className="banner" src={`${this.state.url}`}></img>
        )
    }
}

export default Banner;