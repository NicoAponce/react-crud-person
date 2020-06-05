import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="nav justify-content-md-center _color_bg_dark">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/person" className="nav-link _color_text_white ">
                        PERSONA
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/place" className="nav-link _color_text_white">
                        LUGAR
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/province" className="nav-link _color_text_white">
                        PROVINCIA
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
