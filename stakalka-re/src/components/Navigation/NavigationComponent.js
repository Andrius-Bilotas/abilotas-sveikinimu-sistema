import { Link } from 'react-router-dom';
import React from 'react';


function NavigationComponent(props) {

 

  return (
      <div>
        <header className="container-fluid py-3" style={{ backgroundColor: '#6495ED' }}>
          <div className="row">
            <ul className="nav">
              <li className="nav-item">
                <Link to='/' className="nav-link" style={{ color: 'black' }}>Sveikinimai</Link>
              </li>
              <li className="nav-item">
                <Link to='/vietos' className="nav-link" style={{ color: 'black' }}>Sveikinimų vietos</Link>
              </li>
            </ul>
          </div>
        </header>
        {props.children}
      </div>
  );
};

export default NavigationComponent;