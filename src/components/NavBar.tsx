import React from 'react';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

function NavBar() {
    return(
        <div>
            <Navbar bg="dark">
                <Navbar.Brand>
                    Logo
                </Navbar.Brand>
            </Navbar>
        </div>        
    );
};

export default NavBar;
