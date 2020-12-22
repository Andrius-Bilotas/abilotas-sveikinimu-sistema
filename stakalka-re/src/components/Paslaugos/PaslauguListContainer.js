import React, { Component } from 'react';
import axios from 'axios';
import PaslaugosCardComponent from './PaslaugosCardComponent';

export default class PaslauguListContainer extends Component {
    constructor() {
        super();
        this.state = {
            paslaugosForma: false,
            pavadinimas: "",
            nuotrauka: "",
            kategorija: "",
            aprasymas: "",
            paslaugos: []
        }
    }

    rodytiSleptiForma = () => {
        this.setState({paslaugosForma: !this.state.paslaugosForma});
    }

    componentDidMount() {
        document.title = "Paslaugu registras";
        axios.get('/registras-bandymas/api/paslaugos')
            .then(res => {
                this.setState({paslaugos: res.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        //console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/registras-bandymas/api/paslaugos', {pavadinimas: this.state.pavadinimas, nuotrauka: this.state.nuotrauka, kategorija: this.state.kategorija, aprasymas: this.state.aprasymas})
            .then(res => {
                this.setState({paslaugos: res.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <main className="container pt-3">
                {
                    this.state.paslaugos.length < 5 ?
                    <div className="alert alert-warning" role="alert">Reikia bent 5 paslaugų!</div>
                    :
                    <span></span>
                }
                <div className="row">
                    <button className="btn btn-primary" onClick={this.rodytiSleptiForma}>Sukurti paslaugą</button>
                </div>
                <div className="row pt-3">
                    {
                    this.state.paslaugosForma ?
                    <form className="pt-3" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="kategorija"><b>Kategorija</b></label>
                            <select value={this.state.kategorija} className="form-control" name="kategorija" id="kategorija" onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="IT">IT</option>
                                <option value="maistas">Maistas</option>
                                <option value="transportas">Transportas</option>
                                <option value="grozio_paslaugos">Grožio paslaugos</option>
                                <option value="ugdymo_paslaugos">Ugdymo paslaugos</option>
                            </select>
                            <label htmlFor="pavadinimas"><b>Pavadinimas</b></label>
                            <input name="pavadinimas" type="text" className="form-control" value={this.state.pavadinimas} onChange={this.handleChange}/>
                            <label htmlFor="aprasymas"><b>Aprašymas</b></label>
                            <input name="aprasymas" type="text" className="form-control" value={this.state.aprasymas} onChange={this.handleChange}/>
                            <label htmlFor="nuotrauka"><b>Nuotrauka</b></label>
                            <input name="nuotrauka" type="text" className="form-control" value={this.state.nuotrauka} onChange={this.handleChange}/>
                            <button type="submit" className="btn btn-primary mt-3">Pridėti paslaugą</button>
                        </div>
                    </form> 
                    : <span></span>
                    }
                </div>
                <div className="row">
                    {this.state.paslaugos.map(paslauga => {
                        return (
                            <PaslaugosCardComponent paslauga={paslauga} />
                        )
                    })}
                </div>
            </main>
        );
    }
}