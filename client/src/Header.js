import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar/>
                <Banner/>
                <hgroup>
                    <h1>/board/ - Board</h1>
                </hgroup>
            </header>
        )
    }
}

export default Header;


        