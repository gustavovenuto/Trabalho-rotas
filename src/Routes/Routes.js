import React from 'react';
//import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Header from '../Header/Header.jsx';
import Home from '../componentes/Paginas/Home';
import America from '../componentes/Paginas/America';
import AmericaSul from '../componentes/Paginas/AmericaSul';
import Pantanal from '../componentes/Paginas/Pantanal';


function Routes() {
  return (
    <div>
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/ra" component={America} />
                <Route exact path="/ras" component={AmericaSul} />
                <Route exact path="/rp" component={Pantanal} />
            </Switch>
          </BrowserRouter>

    </div>
  );
}

export default Routes;