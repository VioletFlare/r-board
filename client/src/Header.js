import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';
import Form from './Form';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar/>
                <Banner/>
                <hgroup>
                    <h1>/board/ - Board</h1>
                </hgroup>
                <Form/>
            </header>
        )
    }
}

export default Header;


        