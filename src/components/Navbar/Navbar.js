import React from 'react';
import './Navbar.css';

class Navig extends React.Component {
    
    render() {
        return (
                    <header role="banner">
                        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                            <div class="container">
                            <a class="navbar-brand" href="/">Studiend</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarsExample05">
                                <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">Contact</a>
                                </li>
                                </ul>
                                <ul class="navbar-nav ml-auto">
                                <li class="nav-item cta-btn">
                                    <a class="nav-link" target='_blank' rel='noreferrer' href="https://www.facebook.com/groups/311111149267612">Facebook Group</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>
                    </header>
        );
    }
}

export default Navig;
