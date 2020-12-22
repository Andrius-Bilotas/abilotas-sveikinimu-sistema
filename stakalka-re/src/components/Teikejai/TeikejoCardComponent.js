import React from 'react';
import { Link } from 'react-router-dom';

function TeikejoCardComponent({teikejas}) {
    return (
        <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
            <div className="card-body text-center">
                <h5 className="card-title">{teikejas.pavadinimas}</h5>
                <p className="card-text"><b>Tipas: {teikejas.tipas}</b></p>
                <p className="card-text">Miestas: {teikejas.miestas}</p>
                <p className="card-text">Įvertinimas: {teikejas.ivertinimas}</p>
                <Link 
                to={`/paslaugos/${teikejas.id}`} 
                className="btn btn-primary"
                >
                    Plačiau
                </Link>
            </div>
        </div>
    );
}

export default TeikejoCardComponent;