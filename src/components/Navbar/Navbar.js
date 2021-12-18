import React from 'react';
import './Navbar.css';

class Navig extends React.Component {
    
    render() {
        return (
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About</li></a>
                    <a href="/contact"><li>Contact</li></a>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navig;
