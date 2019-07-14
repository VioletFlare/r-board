import React, { Component } from 'react';
import axios from 'axios';

class Banner extends Component {

    state = {
        isLoaded: false,
        url: "",
    }

    componentDidMount() {
        axios.get('/getBannerUrl')
        .then((res) => {
            this.setState({ url: res.url })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <img className="banner" src="banner/0.png"></img>
        )
    }
}

export default Banner;