import React from 'react';
import './Componente.css';
import ComponenteH11 from './Componente1';
import { Comp2 } from './Componente2';
import { Switch, Route, Link } from 'react-router-dom';

function Componente() {
  return (
    <div className="App">

      <div className="App-header">
        <nav>
          <Link to="/componente1" >
            <p>Ir Para Componente 1</p>
          </Link>
          <Link to="/componente2" >
            <p>Ir Para Componente 2</p>
          </Link>
        </nav>
        <Switch >
          <Route path="/componente1" component={ComponenteH11} />
          <Route path="/componente2" component={Comp2} />
        </Switch>
      </div>

    </div>
  );
}

export default Componente;