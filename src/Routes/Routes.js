import React from 'react';
//import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Header from '../Header/Header.jsx';
import Home from '../componentes/Paginas/Home';
import America from '../componentes/Paginas/America';
import AmericaSul from '../componentes/Paginas/AmericaSul';
import Pantanal from '../componentes/Paginas/Pantanal';
import Asia from '../componentes/Paginas/Asia';
import Oceania from '../componentes/Paginas/Oceania';
import Antartica from '../componentes/Paginas/Antartica';
import Europa from '../componentes/Paginas/europa';


function Routes() {
  return (
    <div>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ra" component={America} />
                <Route exact path="/ras" component={AmericaSul} />
                <Route exact path="/rp" component={Pantanal} />
                <Route exact path="/asia" component={Asia} />
                <Route exact path="/oceania" component={Oceania} />
                <Route exact path="/antartica" component={Antartica} />
                <Route exact path="/europa" component={Europa} />
            </Switch>
          </BrowserRouter>

    </div>
  );
}

export default Routes;