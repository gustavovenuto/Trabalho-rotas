import React from 'react';

import './pages.css';
import Header from '../Headers/Pantanal-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function Pantanal() {
    return (
        <div class="container1">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="Pantanal"/>
            </div>

        </div>
    )
}