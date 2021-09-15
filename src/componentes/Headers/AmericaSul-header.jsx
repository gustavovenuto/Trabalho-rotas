import React from 'react'

import { Link } from 'react-router-dom';

//import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul> 
                    <li class="europa"><Link to="/">MENU</Link></li>
                    <li class="europa"><Link to="/ra">VOLTAR</Link></li>
                    <li class="america"><Link to="#">PATAGÔNIA</Link></li>
                    <li class="america"><Link to="#">CORDILHEIRA DOS ANDES</Link></li>
                    <li class="america"><Link to="#">CARTAGENA-COLÔMBIA</Link></li>
                    <li class="america"><Link to="/rp">PANTANAL</Link></li>
                    <li class="america"><Link to="#">VULCÃO QUILOTOA-EQUADOR</Link></li>
                </ul>
            </nav>
        </div>
    )
}