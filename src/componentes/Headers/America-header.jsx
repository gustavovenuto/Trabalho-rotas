import React from 'react'

import { Link } from 'react-router-dom';

//import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="europa"><Link to="/">VOLTAR</Link></li>
                    <li class="america"><Link to="#">AMÉRICA DO NORTE</Link></li>
                    <li class="america"><Link to="#">AMÉRICA CENTRAL</Link></li>
                    <li class="america"><Link to="/ras">AMÉRICA DO SUL</Link></li>
                    <li class="america"><Link to="#">EQUADOR</Link></li>
                    <li class="america"><Link to="#">INFERIORES</Link></li>
                </ul>
            </nav>
        </div>
    )
}