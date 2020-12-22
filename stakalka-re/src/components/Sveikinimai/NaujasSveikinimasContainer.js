import React, { Component } from 'react';
import axios from 'axios';
import NaujasSveikinimasComponent from './NaujasSveikinimasComponent';

export default class NaujasSveikinimasContainer extends Component {
    constructor() {
        super();
        this.state = {
            tekstas: "",

        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post('/stakalka-ap/api/sveikinimai', this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <main className="container pt-5">
                <NaujasSveikinimasComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            </main>
        );
    }
}