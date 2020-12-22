import React from 'react';
//import { Link } from 'react-router-dom';

function NaujasSveikinimasComponent({ handleSubmit, handleChange, vardasPavarde, tekstas, data, laikas, audio, paveiksliukas, tipas }) {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="vardasPavarde"><b>Vardas ir Pavardė</b></label>
                <input name="vardasPavarde" type="text" className="form-control" value={vardasPavarde} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="tekstas"><b>Sveikinimo tekstas</b></label>
                <input name="tekstas" type="text" className="form-control" value={tekstas} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="paveiksliukas"><b>Paveiksliukas</b></label>
                <input name="paveiksliukas" type="text" className="form-control" value={paveiksliukas} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="audio"><b>Audio</b></label>
                <input name="audio" type="text" className="form-control" value={audio} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="data"><b>Data</b></label>
                <input name="data" type="text" className="form-control" value={data} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="laikas"><b>Laikas</b></label>
                <input name="laikas" type="text" className="form-control" value={laikas} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="tipas"><b>Tipas</b></label>
                <select value={tipas} className="form-control" name="tipas" id="tipas" onChange={(e) => handleChange(e)}>
                    <option value=""></option>
                    <option value="gyvas_sveikinimas">Gyvas sveikinimas</option>
                    <option value="tv_sveikinimas">TV Sveikinimas</option>
                    <option value="internetinis_sveikinimas">Internetinis sveikinimas</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default NaujasSveikinimasComponent;