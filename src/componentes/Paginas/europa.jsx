import React from 'react';

import './pages.css';
import Header from '../Headers/Home-header';

import Titulo from '../Titulo/Titulo.jsx';

export default function Europa() {
    return (
        <div class="container5">
            <header>
                <Header/>
            </header>

            <div className="title">
                <Titulo texto="Europa"/>
            </div>

        </div>
    )
}