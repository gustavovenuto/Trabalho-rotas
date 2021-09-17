import React from 'react';

import './pages.css';
import Header from '../Headers/Home-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function Oceania() {
    return (
        <div class="container3">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="Oceania"/>
            </div>

        </div>
    )
}