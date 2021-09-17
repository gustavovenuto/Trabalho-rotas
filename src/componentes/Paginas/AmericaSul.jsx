import React from 'react';

import './pages.css';
import Header from '../Headers/AmericaSul-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function AmericaSul() {
    return (
        <div class="container1">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="América do sul"/>
            </div>

        </div>
    )
}