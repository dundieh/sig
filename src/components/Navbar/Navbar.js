import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact" rel="noreferrer">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about" rel="noreferrer">
                                About
                            </a>
                        </li>
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0 ma3">
                        Credit: <a class="btn" target='_blank' rel="noreferrer" href='https://www.facebook.com/groups/311111149267612/permalink/318030751908985'>الدارسين في المانيا</a>
                    </form> */}
                </div>
            </nav>
        );
    }
}

export default Navbar;
