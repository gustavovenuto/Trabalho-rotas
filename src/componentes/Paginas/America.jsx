import React from 'react';

import './pages.css';
import Header from '../Headers/America-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function America() {
    return (
        <div class="container1">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="América"/>
            </div>

        </div>
    )
}