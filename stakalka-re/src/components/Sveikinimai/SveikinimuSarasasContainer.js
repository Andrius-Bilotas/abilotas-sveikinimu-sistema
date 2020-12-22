import React, { Component } from 'react';
import axios from 'axios';
import SveikinimoCardComponent from './SveikinimoCardComponent';

export default class SveikinimuSarasasContainer extends Component {
    constructor() {
        super();
        this.state = {
            sveikinimai: []
        }
    }

    componentDidMount() {
        document.title = "Sveikinimai";
        axios.get('/stakalka-ap/api/sveikinimai')
            .then(res => {
                this.setState({sveikinimai: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <main className="container pt-3">
                <div className="row">
                    {
                        this.state.sveikinimai.map(sveikinimas => {
                            return (
                                <SveikinimoCardComponent sveikinimas={sveikinimas} />
                            )
                        })
                    }
                </div>
            </main>
        );
    }

}