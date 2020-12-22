import React from 'react';

function PaslaugosTeikejasComponent({ teikejas }) {
    return (
        <tr>
            <th scope="row">{teikejas.id}</th>
            <td>{teikejas.pavadinimas}</td>
            <td>{teikejas.miestas}</td>
            <td>{teikejas.imonesKodas}</td>
            <td>{teikejas.ivertinimas}</td>
            <td>{teikejas.tipas}</td>
            <td>{teikejas.kaina} EUR</td>
        </tr>
    )
}

export default PaslaugosTeikejasComponent;