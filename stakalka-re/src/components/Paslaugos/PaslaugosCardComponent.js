import React from 'react';
import { Link } from 'react-router-dom';

function PaslaugosCardComponent({paslauga}) {
    return (
        <div className="card mx-auto mb-5" style={{ width: '18rem' }}>
            <div className="card-body text-center">
                <h5 className="card-title">{paslauga.pavadinimas}</h5>
                <p className="card-text">{paslauga.nuotrauka}</p>
                <p className="card-text"><b>Kategorija: {paslauga.kategorija}</b></p>
                <p className="card-text">{paslauga.aprasymas}</p>
                <Link 
                to={`/paslaugos/${paslauga.id}`} 
                className="btn btn-primary"
                >
                    Plačiau
                </Link>
            </div>
        </div>
    );
}

export default PaslaugosCardComponent;