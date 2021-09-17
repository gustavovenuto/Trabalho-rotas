import React from 'react'

import { Link } from 'react-router-dom';

//import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">VOLTAR</Link></li>
                    <li><Link to="#">AMÉRICA DO NORTE</Link></li>
                    <li><Link to="#">AMÉRICA CENTRAL</Link></li>
                    <li><Link to="/ras">AMÉRICA DO SUL</Link></li>
                    <li><Link to="#">EQUADOR</Link></li>
                    <li><Link to="#">INFERIORES</Link></li>
                </ul>
            </nav>
        </div>
    )
}