import React, { Component } from 'react';
import SveikinimaiAdministrationComponent from './SveikinimaiAdministrationComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SveikinimaiAdministrationContainer extends Component {
    constructor() {
        super();
        this.state = {
             sveikinimai: [] 
            };
    }

    componentDidMount() {
        axios.get('/stakalka-ap/api/sveikinimai')
            .then((response) => {
                this.setState({ sveikinimai: response.data });
                //console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <main className="container pt-3">
                <div className="row pb-3">
                    <Link 
                    to={`/administracija/naujas`} 
                    className="btn btn-primary"
                    >
                        Pridėti sveikinimą
                    </Link>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sveikintojas</th>
                                <th scope="col">Tekstas</th>
                                <th scope="col">Data</th>
                                <th scope="col">Laikas</th>
                                <th scope="col">Tipas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.sveikinimai.map((sveikinimas) => {
                                    return (
                                    <SveikinimaiAdministrationComponent 
                                        sveikinimas = {sveikinimas}
                                    />
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