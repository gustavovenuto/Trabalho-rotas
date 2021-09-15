import React from 'react'

import { Link } from 'react-router-dom';

//import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul> 
                    <li class="europa"><Link to="/">MENU</Link></li>
                    <li class="europa"><Link to="/ras">VOLTAR</Link></li>
                    <li class="america"><Link to="#">HIDROGRAFIA</Link></li>
                    <li class="america"><Link to="#">FAUNA</Link></li>
                    <li class="america"><Link to="#">FLORA</Link></li>
                    <li class="america"><Link to="#">DESMATAMENTO</Link></li>
                </ul>
            </nav>
        </div>
    )
}