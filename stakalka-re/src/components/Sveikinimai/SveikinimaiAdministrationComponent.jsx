import React from 'react';
//import { Link } from 'react-router-dom';

function SveikinimaiAdministrationComponent({ sveikinimas }) {
    return (
        <tr>
            <th scope="row">{sveikinimas.id}</th>
            <td>{sveikinimas.vardasPavarde}</td>
            <td>{sveikinimas.tekstas}</td>
            <td>{sveikinimas.data}</td>
            <td>{sveikinimas.laikas}</td>
            <td>{sveikinimas.tipas}</td>
        </tr>
    );
}

export default SveikinimaiAdministrationComponent;