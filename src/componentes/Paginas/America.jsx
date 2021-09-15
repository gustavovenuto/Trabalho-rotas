import React from 'react';

//import './Pages.css';
import Header from '../Headers/America-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function America() {
    return (
        <div>
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="América"/>
            </div>

        </div>
    )
}