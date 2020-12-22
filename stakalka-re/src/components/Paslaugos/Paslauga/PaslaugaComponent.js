import React from 'react';

function PaslaugaComponent({ paslauga }) {
    return (
        <div className="col">
            <h2>{paslauga.pavadinimas}</h2>
            <p>{paslauga.nuotrauka}</p>
            <p>Kategorija: {paslauga.kategorija}</p>
            <h3>Aprašymas:</h3>
            <p>{paslauga.aprasymas}</p>
        </div>
    )
}

export default PaslaugaComponent;