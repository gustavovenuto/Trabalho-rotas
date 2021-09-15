import React from 'react';

//import './Pages.css';
import Header from '../Headers/Pantanal-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function Pantanal() {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="Pantanal"/>
            </div>

        </div>
    )
}