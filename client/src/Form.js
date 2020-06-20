import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(ev) {
        const changedElementName = ev.target.name,
            changedElementValue = ev.target.value;

        this.setState({
            [changedElementName]: changedElementValue
        });
    }

    async handleSubmit(ev) {
        axios.post(
            '/api/createPost', 
            this.state
        )
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

        ev.preventDefault();
    }

    render() {
        return (
            <form className="reply" onSubmit={this.handleSubmit}>
                <label for="email">E-mail</label>
                <input type="text" name="email" onChange={this.handleChange}></input>
                <label for ="subject">Subject</label>
                <input type="text" name="subject" onChange={this.handleChange}></input>
                <label for="text">Text</label>
                <textarea name="text" onChange={this.handleChange}></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Form;