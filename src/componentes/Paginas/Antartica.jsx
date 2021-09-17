import React from 'react';

import './pages.css';
import Header from '../Headers/Home-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function Antartica() {
    return (
        <div class="container4">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="Antártica"/>
            </div>

        </div>
    )
}