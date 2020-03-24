import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <Link to = "/" >
        <header className="App-header">
            <h1 className = "pageHeader">MIXR</h1>
        </header>
    </Link>
)

export default Header;