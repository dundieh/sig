import React from 'react';
import './Navbar.css';

class Navig extends React.Component {
    
    render() {
        return (
            <nav className='links ma3'>
                <a className='f3 pa3 pointer' href='/' rel='noreferrer'>Home</a>
                <a className='f3 pa3 pointer' href='/about' rel='noreferrer'>About</a>
            </nav>
        );
    }
}

export default Navig;
