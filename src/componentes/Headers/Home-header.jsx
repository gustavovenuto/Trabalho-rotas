import React from 'react'

import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li class="america"><Link to="/ra">America</Link></li>
                    <li class="asia"><Link to="/#">Asia</Link></li>
                    <li class="oceania"><Link to="#">OCEANIA</Link></li>
                    <li class="antartica"><Link to="#">ANTÁRTICA</Link></li>
                    <li class="europa"><Link to="#">EUROPA</Link></li>
                </ul>
            </nav>
        </div>
    )
}