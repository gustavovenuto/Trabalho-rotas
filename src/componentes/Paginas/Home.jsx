import React from 'react';

import Header from '../Headers/Home-header';

import Titulo from '../Titulo/Titulo.jsx';

import './pages.css';

export default function Home() {
    return (
        <div class="containerHome">
            <header>
                <Header/>
            </header>

            <main>
                <div className="title">
                    <Titulo texto="Pagina inicial"/>
                </div>
            </main>

        </div>
    )
}