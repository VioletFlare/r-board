import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    render() {
        return (
            <div className="post">
                <form method="post" >
                   <label for="email">E-mail</label>
                   <input type="text" name="email"></input>
                   <label for ="subject">Subject</label>
                   <input type="text" name="subject"></input>
                   <label for="text">Text</label>
                   <textarea name="text"></textarea>
                </form>
            </div>
        )
    }
}

export default Form;