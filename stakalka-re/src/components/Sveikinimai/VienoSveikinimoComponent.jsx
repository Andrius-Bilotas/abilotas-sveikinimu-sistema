import React from 'react';

function VienoSveikinimoComponent({ sveikinimas }) {
    return (
        <div className="col">
            <p>{sveikinimas.paveiksliukas}</p>
            <h2>Sveikina: {sveikinimas.vardasPavarde}</h2>
            <p>Linki: {sveikinimas.tekstas}</p>
            <p>Data: {sveikinimas.data}</p>
            <p>Laikas: {sveikinimas.laikas}</p>
            <p>Įrašas: {sveikinimas.audio}</p>
            <p>Tipas: {sveikinimas.tipas}</p>
        </div>
    )
}

export default VienoSveikinimoComponent;