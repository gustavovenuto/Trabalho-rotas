import React from 'react'

import { Link } from 'react-router-dom';

//import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul> 
                    <li><Link to="/">MENU</Link></li>
                    <li><Link to="/ra">VOLTAR</Link></li>
                    <li><Link to="#">PATAGÔNIA</Link></li>
                    <li><Link to="#">CORDILHEIRA DOS ANDES</Link></li>
                    <li><Link to="#">CARTAGENA-COLÔMBIA</Link></li>
                    <li><Link to="/rp">PANTANAL</Link></li>
                    <li><Link to="#">VULCÃO QUILOTOA-EQUADOR</Link></li>
                </ul>
            </nav>
        </div>
    )
}