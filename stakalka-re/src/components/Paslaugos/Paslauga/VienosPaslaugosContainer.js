import React, { Component } from 'react';
import axios from 'axios';
import PaslaugaComponent from './PaslaugaComponent';
import PaslaugosTeikejasComponent from './PaslaugosTeikejasComponent';

export default class VienosPaslaugosContainer extends Component {
    constructor() {
        super();
        this.state = {
            paslauga: {},
            teikejai: []
        }
    }

    componentDidMount() {
        axios.get(`/registras-bandymas/api/paslaugos/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ paslauga: res.data });
                axios.get(`/registras-bandymas/api/teikejai/${this.props.match.params.id}/teikejai`)
                    .then(res => {
                        this.setState({ teikejai: res.data })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <main className="container pt-3">
                <div className="row">
                    <PaslaugaComponent paslauga={this.state.paslauga} />
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <h3>Paslaugos teikėjai:</h3>
                    </div>
                </div>
                <div className="row pt-2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Pavadinimas</th>
                                <th scope="col">Miestas</th>
                                <th scope="col">Įmonės kodas</th>
                                <th scope="col">Įvertinimas</th>
                                <th scope="col">Tipas</th>
                                <th scope="col">Paslaugos kaina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.teikejai.map(teikejas => {
                                    return (
                                        <PaslaugosTeikejasComponent teikejas={teikejas} />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}