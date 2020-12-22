import React, { Component } from 'react';
import axios from 'axios';
import VienoSveikinimoComponent from './VienoSveikinimoComponent';


export default class VienoSveikinimoContainer extends Component {
    constructor() {
        super();
        this.state = {
            sveikinimas: {}
        }
    }

    componentDidMount() {
        axios.get(`/stakalka-ap/api/sveikinimai/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ sveikinimas: res.data });
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <main className="container pt-3">
                <div className="row">
                    <VienoSveikinimoComponent sveikinimas={this.state.sveikinimas} />
                </div>
            </main>
        );
    }
}