import React, { Component } from 'react';
import axios from 'axios';
import NaujasSveikinimasComponent from './NaujasSveikinimasComponent';

export default class NaujasSveikinimasContainer extends Component {
    constructor() {
        super();
        this.state = {
            vardasPavarde: "",
            tekstas: "",
            paveiksliukas: "",
            data: "",
            tipas: "",
            laikas: "",
            audio: ""
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
                this.props.history.push("/administracija");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <main className="container pt-5">
                <NaujasSveikinimasComponent
                 handleChange={this.handleChange} 
                 handleSubmit={this.handleSubmit}
                 vardasPavarde={this.state.vardasPavarde}
                 tekstas={this.state.tekstas}
                 paveiksliukas={this.state.paveiksliukas}
                 data={this.state.data}
                 tipas={this.state.tipas}
                 laikas={this.state.laikas}
                 audio={this.state.audio}
                 />
            </main>
        );
    }
}