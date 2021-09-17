import React from 'react'

import { Link } from 'react-router-dom';

//import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul> 
                    <li><Link to="/">MENU</Link></li>
                    <li><Link to="/ras">VOLTAR</Link></li>
                    <li><Link to="#">HIDROGRAFIA</Link></li>
                    <li><Link to="#">FAUNA</Link></li>
                    <li><Link to="#">FLORA</Link></li>
                    <li><Link to="#">DESMATAMENTO</Link></li>
                </ul>
            </nav>
        </div>
    )
}