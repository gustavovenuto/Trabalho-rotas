import React from 'react';

import './pages.css';
import Header from '../Headers/Home-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function Asia() {
    return (
        <div class="container2">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="Ásia"/>
            </div>

        </div>
    )
}