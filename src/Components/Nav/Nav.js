import React from 'react';
import './Nav.css';

const Nav = () => {

    return (
        <div>
            <ul className="Nav-container">
                <li className="Nav-link"><a href="/">
                    <i className="fas fa-home"></i>HOME</a></li>
                <li className="Nav-link"><a className="item" href="/about">
                    <i className="fas fa-smile"></i>ABOUT</a></li>
                <li className="Nav-link"> <a className="item" href="/project">
                    <i className="fab fa-github"></i>PROJECT</a></li>
                <li className="Nav-link"> <a className="item" href="#contact">
                    <i className="far fa-envelope"></i>CONTACT</a></li>
            </ul>
        </div>

    );
};

export default Nav;