import React, { Component } from 'react';
import axios from 'axios';
import TeikejoCardComponent from './TeikejoCardComponent';

export default class TeikejuListContainer extends Component {
    constructor() {
        super();
        this.state = {
            teikejoForma: false,
            pavadinimas: "",
            miestas: "",
            imonesKodas: "",
            ivertinimas: "",
            tipas: "",
            teikejai: []
        }
    }

    rodytiSleptiForma = () => {
        this.setState({teikejoForma: !this.state.teikejoForma});
    }

    componentDidMount() {
        document.title = "Paslaugu teikejai";
        axios.get('/registras-bandymas/api/teikejai')
            .then(res => {
                this.setState({teikejai: res.data})
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
        axios.post('/registras-bandymas/api/teikejai', {pavadinimas: this.state.pavadinimas, miestas: this.state.miestas, imonesKodas: this.state.imonesKodas, ivertinimas: this.state.ivertinimas, tipas: this.state.tipas})
            .then(res => {
                this.setState({teikejai: res.data});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <main className="container pt-3">
                <div className="row">
                    <button className="btn btn-primary" onClick={this.rodytiSleptiForma}>Sukurti teikeją</button>
                </div>
                <div className="row pt-3">
                    {
                    this.state.teikejoForma ?
                    <form className="pt-3" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="tipas"><b>Tipas</b></label>
                            <select value={this.state.tipas} className="form-control" name="tipas" id="tipas" onChange={this.handleChange}>
                                <option value=""></option>
                                <option value="imone">Įmonė</option>
                                <option value="privatus_asmuo">Privatus asmuo</option>
                                <option value="valstybine">Valstybinė</option>
                            </select>
                            <label htmlFor="pavadinimas"><b>Pavadinimas</b></label>
                            <input name="pavadinimas" type="text" className="form-control" value={this.state.pavadinimas} onChange={this.handleChange}/>
                            <label htmlFor="miestas"><b>Miestas</b></label>
                            <input name="miestas" type="text" className="form-control" value={this.state.miestas} onChange={this.handleChange}/>
                            <label htmlFor="imonesKodas"><b>Įmonės kodas</b></label>
                            <input name="imonesKodas" type="text" className="form-control" value={this.state.imonesKodas} onChange={this.handleChange}/>
                            <label htmlFor="ivertinimas"><b>Įvertinimas</b></label>
                            <input name="ivertinimas" type="text" className="form-control" value={this.state.ivertinimas} onChange={this.handleChange}/>
                            <button type="submit" className="btn btn-primary mt-3">Pridėti teikėją</button>
                        </div>
                    </form> 
                    : <span></span>
                    }
                </div>
                <div className="row">
                    {this.state.teikejai.map(teikejas => {
                        return (
                            <TeikejoCardComponent teikejas={teikejas} />
                        )
                    })}
                </div>
            </main>
        );
    }
}